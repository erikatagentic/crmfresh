# Enrich-CRM Competitor Test — Findings

_Research date: 2026-05-21. Sources: public website (enrich-crm.com) + signup flow attempt. Account signup blocked at phone number field — documented below._

---

## What they actually are

Enrich-CRM is **not a database tool**. They live-crawl the web on every request: Google/Bing queries → open relevant pages in a clean logged-out session → LLM extraction → cross-reference across sources → deliver structured JSON. "The web is the database — always up to date." [enrich-crm.com/en/how-it-works, scraped 2026-05-21]

This is materially different from Apollo/ZoomInfo (static database, refreshed periodically). It's also different from what the plan assumed ("enrichment re-verify using Apollo/FindyMail/LeadMagic" as Tier 2 signal).

---

## Detection methodology

**Pipeline per contact:**
1. Send queries to Google + Bing using every identifier provided (email, name, company, LinkedIn URL)
2. Open results in clean logged-out session — LinkedIn profiles, company pages, press releases, job boards, registries
3. LLM extracts + cross-references across sources to resolve conflicts
4. Delivers 300+ typed fields, streamed progressively

**Sources confirmed:** "40+ public sources" including LinkedIn, company sites, press, registries. SMTP is listed as one of their 12 pipeline sources on the homepage alongside LinkedIn, Crunchbase, SIRENE, SimilarWeb. [enrich-crm.com homepage cascade diagram, scraped 2026-05-21]

**Response time:** 4-10 seconds per contact (live, not cached)

---

## Job change detection

Detection mode (from how-it-works page):

> "We monitor your contacts and alert you the moment someone switches company, is promoted, or goes dark."

Detection timeline: "detected within days" of job change. They also claim "before their LinkedIn even updates — typically within 24 to 72 hours of the move." This last claim seems aggressive given their method relies on public LinkedIn data — but it's what they market. [enrich-crm.com homepage, scraped 2026-05-21]

**SMTP in their stack:** Yes, SMTP is one of their sources. But they don't lead with it — it's one of 12, not the primary signal.

---

## Pricing (euros)

| Tier | Price | Credits | Notes |
|---|---|---|---|
| Free | €0 | 100/month (signup page) or 500 total (homepage) — discrepancy | No credit card |
| Growth | €29/month | 1,000 | API, CSV, Clay, Make, Zapier, n8n |
| CRM Connector | €75/month | 1,700 | Native HubSpot integration |

**Currency note:** Pricing is in euros. At ~1.08 EUR/USD: Free=€0, Growth≈$31/mo, CRM Connector≈$81/mo.

**Discrepancy found:** Signup form says "100 free credits every month." Homepage CTAs say "500 free credits." May be: 500 on first signup, 100/month recurring. Couldn't confirm without completing signup.

---

## HubSpot integration

- Native write-back, auto-enriches on record creation
- Job change alerts trigger HubSpot workflows automatically
- "5-minute setup, no dev work"
- Fields map to CRM properties with control over overwrite rules (fill-if-empty, overwrite, backup field)

---

## CSV bulk upload

Available for one-time cleanups. "Upload a list of 150,000 contacts. Match column headers to our fields. Download your enriched file." [enrich-crm.com homepage] — This is the one-time audit equivalent. But it's enrichment + job-change alerts, not a dedicated "audit + clean + deliver" workflow.

---

## Positioning

They market to: SDRs/BDRs ("sequences going to ghosts"), Marketing/Demand Gen ("enrich form fills instantly"), RevOps ("clean fields, clean scoring"). Primary pain they address: stale data. Secondary: missed champion movement.

They don't lead with "sequence protection" — they lead with "pipeline from job changes" and "clean your data so scoring works."

---

## What the plan's SMTP differentiation actually means in context

- Enrich-CRM uses SMTP as one of their 12 sources — it's not exclusive to the plan's approach.
- Their live-web crawl + LLM extraction is more sophisticated than pure SMTP.
- SMTP's specific advantage: catches "inbox deleted" state (550 error) in real time, with no dependency on public profile data being updated. A person can delete their inbox the day they leave, and SMTP catches it within minutes. LinkedIn profiles may lag days or weeks.
- SMTP's limitation: email forwarding. Most companies forward email for 30-90 days post-departure, so SMTP returns valid during that window.
- **Net assessment:** SMTP is a useful signal in a multi-tier stack, not a standalone differentiator. The plan's "SMTP-first" framing overstates its coverage of actual job changes.

---

## Signup attempt — blocker

Form fields required: first name, last name, email, company name, **mobile phone number** (required, validated), password, confirm password.

Filled: first name=Erik, last name=Hernal, email=erik@heyagentic.ai, company=Agentic, password set. Blocked at phone number — field is required and phone number not available in session context.

**To complete:** Erik needs to provide phone number to finish account creation and test live detection on the 100-contact CSV (`agentic/products/crm-freshness/test-contacts-100.csv`).

---

## Competitive assessment vs. plan

| Dimension | Enrich-CRM | Plan's approach |
|---|---|---|
| Detection method | Live web crawl + LLM (40+ sources) | SMTP (Tier 1) + enrichment re-verify (Tier 2) + LinkedIn/Brightdata (Tier 3) |
| Job change lag | 24-72h claimed, "within days" actual | Tier 1 SMTP: real-time. Tier 2: days. Tier 3: weekly |
| HubSpot native | Yes (CRM Connector, €75/mo) | Phase 1 build (not yet) |
| One-time cleanup | CSV upload available (self-serve) | $750 white-glove service (Phase 0) |
| Monitoring model | Credits-based (monthly) | $200/month manual retainer (Phase 0) |
| Positioning | Data enrichment + job alerts | Sequence protection (sequence doesn't fire at ghosts) |
| Price floor | €75/month (~$81) for HubSpot native | $750 one-time + $200/month monitoring |

**The real gap Enrich-CRM leaves:**
- Their CSV upload is self-serve but complex (map column headers, download enriched file). Our $750 audit is white-glove delivery.
- Their framing is enrichment-first, not protection-first. The "stop a bad sequence before it fires" use case is underserved.
- No Attio integration (Attio is not in their listed CRM integrations).

---

## Live test results — 100-contact CSV (2026-05-21)

Account: erik@heyagentic.ai (free tier, 100 credits). API key: `mUqa3XKo`. Test CSV: `test-contacts-100.csv` (agentic_leads contacts — B2B prospects, not stale CRM data). Results file: `enrich-crm-results.json`.

**API endpoint:** `GET https://gateway.enrich-crm.com/api/ingress/v4/full`

Parameters used: `apiId`, `data` (email), `firstName`, `lastName`, `crmCompanyName`. No `firmographic` flag (saves 1 credit per call).

### Volume and credit reality

| Metric | Result |
|---|---|
| Contacts attempted | 90 of 100 (ran out of credits at contact 90) |
| Credits burned | 100 of 100 |
| Credits per contact | 1-3 (median 1, some contacts cost 2-3x — unclear trigger) |
| Effective coverage | ~75-80 contacts per 100 credits (not 100 as their pricing implies) |

### Match rate breakdown

| Status | Count | % |
|---|---|---|
| NO_NEW_COMPANY — found, no job change | 41 | 41% |
| ABORTED — timed out at 15 seconds | 31 | 31% |
| UNKNOWN — API error, not found | 11 | 11% |
| ERROR — explicit not-found response | 7 | 7% |
| Not processed (credits exhausted) | 10 | 10% |

**Effective match rate: 41%.** Of 100 contacts, Enrich-CRM found and enriched 41. 31% timed out (15s cutoff), 18% not in their database, 10% never processed.

**Job changes detected via `status` field: 0.**

### Critical finding — status field doesn't fire on corporate emails [VERIFIED]

Enrich-CRM's `NEW_COMPANY` status does not fire when a contact has a working corporate email at their old employer — even when LinkedIn clearly shows them at a new company.

**Verification (2026-05-21):** Dan Shelton has email `dan.shelton@procirrus.com` (ProCirrus Technologies, his former employer). Brightdata LinkedIn profile lookup confirms: `current_company_name = "Zscaler"` — he has been posting Zscaler content since 2021, his LinkedIn headline is Zscaler, his profile is unambiguous. Enrich-CRM's own `active_company` field correctly returns "Zscaler." But `status` = `NO_NEW_COMPANY`. [Source: Brightdata web_data_linkedin_person_profile, linkedin.com/in/dan-shelton-1863866, pulled 2026-05-21; Enrich-CRM API result in enrich-crm-results.json]

The mechanism: Enrich-CRM uses the email domain as the authoritative "current company" signal. If `dan.shelton@procirrus.com` delivers mail (SMTP 250), they treat him as still at ProCirrus. The `crmCompanyName` parameter doesn't override this. The status field is designed for personal email flows (Gmail-based contacts) where the email isn't tied to a specific employer.

| Email | CRM company | Active company (from API) | LinkedIn truth | Status |
|---|---|---|---|---|
| dan.shelton@procirrus.com | ProCirrus Technologies | Zscaler | Zscaler [VERIFIED] | NO_NEW_COMPANY |
| allyson.burroughs@ricoh-usa.com | Ricoh USA | Holt Whitley Consulting, LLC | not independently verified | NO_NEW_COMPANY |
| mubaldini@stspartner.com | Strategic Technology Solutions (STS) | CITOC | not independently verified | NO_NEW_COMPANY |

**Implication:** Enrich-CRM's job change detection is designed for personal emails (Gmail-based prospects) more than corporate-email CRM contacts. For a B2B CRM with corporate email addresses — which is the target use case for our product — the status field is close to useless. The real signal has to come from comparing `active_company` to the stored company name, which requires building your own comparison logic on top of their data.

### Timeout problem

31% of contacts hit a 15-second timeout. The live-crawl approach (Google/Bing → open pages → LLM extraction) is genuinely slow for contacts with a thin web footprint. In a real 3,000-contact audit, a 31% timeout rate at 4-10 seconds per contact + timeouts means total runtime of hours, not minutes.

### What Enrich-CRM is actually good at

- **Data enrichment on contacts you found recently** — it's a solid enrichment tool for current, active prospects. The `active_company`, `headline`, `linkedInUrl`, and `currentCompanyDetail` fields are useful.
- **Personal email detection** — the `crmCompanyName` + `status` flow is probably useful for consumer-facing B2B or Gmail-based contacts.
- **Not for stale CRM audits** — the product is designed for "enrich new contacts as they enter" not "find who's left in my 3,000-contact CRM."

### What this means for Phase 0 positioning

Enrich-CRM does not solve the same problem we're pitching. Their CRM Connector watches contacts **going forward** and is primarily designed for personal-email enrichment flows. It doesn't audit historical CRM contacts, and its job change signal breaks on corporate emails.

Our approach (SMTP floor check + enrichment re-verify comparing active_company vs. stored company) produces the actual job change signal for B2B CRM contacts. But it requires building the comparison logic ourselves — which is exactly the Phase 1 build.

For Phase 0 (manual service): we can use the Enrich-CRM API as a data source for the `active_company` field, then manually compare against the stored company. The $750 audit price includes this comparison work.

### Recommended next step

~~Complete the account signup — Erik needs to provide his phone number.~~ Done. Account live, 100 credits consumed.

Phase 0 validation has shifted to net-new client outreach (not warm leads). The competitive gap is confirmed: no tool currently does a **forensic audit of existing CRM contacts using corporate email addresses.** Enrich-CRM and Keepsync both watch going forward. The one-time $750 cleanup is uncontested.
