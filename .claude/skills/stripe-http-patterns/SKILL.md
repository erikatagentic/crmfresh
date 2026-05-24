# Stripe HTTP Patterns for n8n

Use HTTP Request nodes instead of native Stripe node to avoid bugs with empty search results.

## Why HTTP Request Instead of Native Stripe Node

- Native `n8n-nodes-base.stripe` crashes when customer search returns empty results
- Error: "Cannot read properties of undefined (reading 'id')"
- HTTP Request gives full control and handles empty results gracefully

## Authentication Pattern

Use "None" for authentication and put API key directly in headers:
```
Header Name: Authorization
Header Value: Bearer sk_live_YOUR_STRIPE_SECRET_KEY
```

## Search Customer

```
Method: GET
URL: https://api.stripe.com/v1/customers
Authentication: None
Headers:
  - Authorization: Bearer sk_live_...
Query Parameters:
  - email: {{ $json.prospectEmail }}
  - limit: 1
```

**Response Structure:**
```javascript
{
  "data": [
    { "id": "cus_xxx", "email": "..." }  // Customer if found
  ],  // Empty array [] if not found
  "has_more": false
}
```

**Check if customer exists (IF node):** `{{ $json.data.length > 0 }}`

**Access found customer:** `{{ $json.data[0].id }}`

## Create Customer

```
Method: POST
URL: https://api.stripe.com/v1/customers
Authentication: None
Headers:
  - Authorization: Bearer sk_live_...
Body Content Type: Form Urlencoded

Body Parameters:
  - email: {{ $('Prepare Stripe Data').item.json.prospectEmail }}
  - name: {{ $('Prepare Stripe Data').item.json.prospectName }}
  - description: {{ $('Prepare Stripe Data').item.json.company }}
```

## Create Subscription

For subscriptions WITHOUT a payment method on file, use `collection_method=send_invoice`:

```
Method: POST
URL: https://api.stripe.com/v1/subscriptions
Authentication: None
Headers:
  - Authorization: Bearer sk_live_...
Body Content Type: Form Urlencoded

Body Parameters:
  - customer: {{ $json.customerId }}
  - items[0][price_data][unit_amount]: {{ $json.priceInCents }}
  - items[0][price_data][currency]: usd
  - items[0][price_data][product]: {{ $json.stripeProductId }}
  - items[0][price_data][recurring][interval]: month
  - collection_method: send_invoice
  - days_until_due: 7
```

Response includes `latest_invoice` - use to send the invoice.

## Send Invoice

```
Method: POST
URL: https://api.stripe.com/v1/invoices/{{ $json.latest_invoice }}/send
Authentication: None
Headers:
  - Authorization: Bearer sk_live_...
```

## Complete Flow Pattern

```
Has Price & Product? → Stripe: Search Customer → IF: Customer Exists?
                                                      ↓
                               TRUE: Customer Found (Set node) ─────┐
                               FALSE: Stripe: Create Customer       │
                                      → Customer Created (Set node) │
                                                      ↓             │
                                      ←─────────────────────────────┘
                                                      ↓
                              Stripe: Create Subscription → Stripe: Send Invoice
```

## Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| "Cannot read properties of undefined (reading 'id')" | Native Stripe node bug | Use HTTP Request |
| "This customer has no attached payment source" | Auto-charge without payment method | Add `collection_method=send_invoice` |
| 401 Unauthorized | Invalid/expired API key | Verify in Stripe Dashboard |

## Key Rules

- **NEVER** use native `n8n-nodes-base.stripe` node
- **ALWAYS** use Form Urlencoded body for POST requests
- **ALWAYS** use `$json.data.length > 0` to check customer exists
- **ALWAYS** use `$json.data[0].id` to access customer ID
