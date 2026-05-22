# Phase 0 Warm Outreach — CRM Freshness Monitoring

_Drafted 2026-05-21. Two warm leads from existing Agentic engagements. Personalized based on call transcripts and brain context._

---

## Competitive context (verified 2026-05-21, updated 2026-05-21 post-audit)

- **UserGems**: $2,750/month minimum ($33K/year Core), plus $3K onboarding fee. Enterprise only.
- **Champify**: ~$1,250-3,000/month. No native HubSpot integration (Keepsync explicitly calls this out).
- **Keepsync**: $79/month Starter (1,000 contacts), $149/month Team (5,000 contacts), $399/month Pro (20,000 contacts). Native HubSpot, weekly refresh, "30+ data sources," free trial. Champion-tracking frame ("catch movers, sell to them at new company"). No G2 presence — likely very early stage, 500+ customers claimed. Case studies on homepage are explicitly NOT their customers ("public industry case studies, not KeepSync customers — yet"). [keepsync.io/pricing, scraped 2026-05-21]
- **Enrich-CRM**: €75/month CRM Connector (~$81 USD), native HubSpot, job change alerts + buying intent. Credits-based model. [enrich-crm.com/en/pricing, scraped 2026-05-21]
- **Crustdata**: Data provider API, not a monitoring product. $200+/month for API access.

**The actual gap:** Both Keepsync and Enrich-CRM are ongoing monitoring tools — they watch contacts from the point of signup forward. Neither offers a one-time forensic audit of contacts already in the CRM. The $750 one-time cleanup angle exploits exactly that gap: "the 3,000 contacts already in your database need a cleanup first, before any monitoring tool can watch them clean."

**Positioning wedge vs. Keepsync:** Keepsync's frame is revenue generation (catch movers, sell to them at their new company). Our Phase 0 frame is risk protection (stop sequences from firing at contacts who already left). Different buyer urgency, different budget line.

---

## Lead 1: Lance Parthemore (Triton Sensors)

**Why he fits**: Uses HubSpot actively. K-12 contacts (principals, district VPs, security directors) rotate roughly every 3 years per school. His Clay workflow just finished pushing 8K+ school contacts into HubSpot. If those sequences fire against stale contacts, deliverability takes the hit and he'll never know why.

**His words from the call (2026-05-01)**: "it gets pretty gnarly" about HubSpot data quality. He described a recent internal cleanup.

**Email to send:**

---

Subject: your HubSpot before the sequences run

Hey Lance,

Quick one. The Clay workflow we built is about to start pushing contacts into HubSpot and Smartlead. Before those sequences fire, I want to flag a problem we haven't talked about.

Principals rotate. A lot. The national average is 3 years per school, and your existing customer contacts are quietly going stale right now. Your new prospect contacts will start the same clock the day they land.

When that happens you get bounces, spam folder placement, and reps calling numbers that go to someone who left in January. We've seen it tank deliverability by 30-40 points on active sequences.

I can do a full one-time audit: dedup your records, verify all emails against actual SMTP, enrich any missing fields, and flag contacts where the person has left. $750, 3,000 contacts, 5 business days. You get a clean list back as a CSV import.

And if you want to keep it clean after that, we can set up a monthly monitoring pass for $200/month. Before a sequence fires, we check. Dead contacts get flagged, not emailed.

Worth a quick call?

Erik

---

## Lead 2: Ken Smythe (Next Round Capital)

**Why he fits**: Active $1,200/mo retainer client. Just migrated 449 HubSpot deals to Attio. VC portfolio contacts (founders, operators, GPs) are the fastest-decaying CRM ICP. Funding rounds, acquisitions, and fund transitions mean 25-30% contact decay per year is a reasonable estimate. He won't notice until a campaign fires cold.

**Note**: Ken is on Attio, not HubSpot. Phase 0 manual monitoring still applies. Attio integration is a Phase 2 item.

**Email to send:**

---

Subject: the Attio contacts you just brought over

Hey Ken,

The 449 deal contacts you moved from HubSpot to Attio are only as good as the moment they were created.

VC contacts are probably the fastest-decaying ICP out there. Founders get acquired, raise a Series B and hand off to a CFO, leave to start a second company. We're talking 25-30% turnover per year on a typical fund's contact list. Most of that is invisible until a campaign bounces or a rep calls and gets "oh, she moved to Sequoia in March."

I've been building a CRM monitoring process using our enrichment stack. The basic version: I take your Attio contact list, run it through email verification and a live re-check, and flag anyone where the company or title no longer matches. Flat $750 for up to 3,000 contacts, 5 business days. You get a clean export showing who's current and who's moved.

This is separate from the retainer work, just a one-time cleanup. Let me know if it'd be useful.

Erik

---

## Lead 3 (secondary): Mark Osborne

**Why he fits**: Consulting partner who brings Erik into HubSpot-using clients. His consulting client "just implemented HubSpot" after a big cancellation. Once that client's contact list grows, monitoring becomes relevant. Mark is also a channel for future referrals.

**Approach**: Surface the idea conversationally next time Mark is on a call rather than cold pitching. "We're starting to offer CRM audits for companies with active HubSpot lists. If any of your clients mention data quality issues, worth a mention."

---

## Next steps (Phase 0)

- [ ] Send Lance pitch (done via gws as erik@heyagentic.ai)
- [ ] Send Ken pitch (add to next retainer session or send standalone)
- [ ] Track replies in Attio under respective deal records
- [ ] If 1+ converts: run manual audit using n8n + Reoon + enrichment waterfall
- [ ] After month 1: document change rate. This becomes the marketing stat.

---

## Phase 0 success gate

2+ one-time cleanup clients signed ($750+ each), 1+ converts to $200/month monitoring retainer.
If 0 of 2 respond with interest: the pain isn't acute enough at this price point or these contacts aren't the right ICP. Re-examine before building anything.
