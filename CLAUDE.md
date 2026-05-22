# CRMFresh — Claude Code Instructions

## Product

**CRMFresh** (crmfresh.io) monitors B2B CRM contacts for job changes and data
rot, then flags stale records before outbound sequences fire. Two offers:

- **One-time CRM Audit** — $750 flat. Client sends CSV or connects CRM, gets
  a cleaned list + job-change report within 5 business days.
- **Monthly Monitoring** — $200/month. Active contacts checked every 30 days,
  monthly digest delivered.

Phase 0 is a manual service. Zero code until the Phase 1 gate clears. Phase 1
is a HubSpot-native product (automated monitoring, CRM write-back, sequences
paused on detection).

---

## ICP

**Primary:** RevOps managers, Heads of Sales, or founders running outbound at
B2B companies with 20-200 employees, $2-20M revenue. They have an existing CRM
(HubSpot, Attio, Pipedrive), active sequences, and bad data they find out about
when campaigns bounce.

**Secondary:** Outbound agencies that run sequences for multiple clients and
need a data hygiene layer before sends.

**Not:** enterprise (they use ZoomInfo or UserGems), pre-CRM startups, B2C.

---

## Phase 0 Gate (all must be GREEN before any Phase 1 code)

- [ ] 1+ one-time cleanup client signed
- [ ] 1+ monitoring retainer signed or committed
- [ ] Real change rate documented from actual audit
- [ ] One framing clearly winning

Research, competitive analysis, and Enrich-CRM test results are in the sister
repo: `CC-agentic/agentic/products/crm-freshness/`. Read those files before
making any product or positioning decisions. Do not duplicate the research here.

---

## Competitor Snapshot

| Tool | Model | Price | Gap |
|------|-------|-------|-----|
| Keepsync | SaaS monitoring | $79-$399/mo | No one-time audit, HubSpot/Salesforce only |
| Enrich-CRM | Credits, SaaS | 0-75 EUR/mo | Status field broken on corporate emails (verified) |
| Deepline | Developer CLI (Claude Code) | $0.10/credit (~$237 for 3K contacts) | Tool not service, RevOps can't self-serve |
| Champify/UserGems | Mid-market SaaS | $1K-$3K+/mo | Priced out of ICP |

**Our gap:** no one offers a forensic, white-glove, one-time audit of existing
CRM contacts with corporate email addresses. SaaS tools watch going forward.
We clean what's already broken.

Full competitive detail: `CC-agentic/agentic/products/crm-freshness/research.md`

---

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deploy:** Vercel
- **Domain:** crmfresh.io
- **Email:** erik@crmfresh.io (set up when domain is live)
- **Booking:** Calendly (update link once crmfresh-specific booking page exists)

---

## Git Identity

- Author email: `erik@heyagentic.ai` (the `.ai` domain, NOT `.com`)
- Verify before every commit: `git config user.email`
- Auto-commit and push after every task. Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`.
- Never `git add -A`. Stage files by name.

---

## Anti-AI Writing (applies to all copy, emails, docs)

**Banned words (zero tolerance):** Delve, Leverage, Robust, Seamless, Elevate,
Unlock, Unleash, Foster, Crucial, Nuanced, Comprehensive, Cutting-edge,
Revolutionize, Streamline, Utilize, Facilitate, Embark, Stellar, Pivotal, Myriad

**Banned patterns:**
- "It's not about X, it's about Y"
- "No X. No Y. Just Z."
- Compulsive triplets (use 2 or 4 items, not 3)
- "The result?" / "And the X? Y."
- Trailing participles: "...launched in 2024, marking a shift" (cut the -ing phrase)
- Synonym cycling: pick one word for the thing and repeat it

**Required:**
- Zero em dashes. Not anywhere. Replace with comma, period, or rewrite.
- Contractions always ("don't" not "do not")
- Sentence length variation (mix 3-word fragments with 20+ word sentences)
- Opinions without hedging. Take a side.
- Straight quotes, not curly

---

## Verification Discipline

For factual claims in any output: cite the source inline or hedge explicitly.
No source = "I think" or "from memory, unverified." 95% confidence required
before stating something as fact.

Before presenting any plan or spec: re-read the key files, verify field names,
confirm assumptions against actual data. List what you verified. "I'm confident"
without specifics = gate failure.

---

## Open Brain (persistent memory)

**Project slug:** `crm-fresh` (confirm this is registered on first /ship)

**Session start — run all three:**
1. `brain_recent(project="crm-fresh", limit=5)`
2. `brain_search(query="<main topic>", project="crm-fresh")`
3. `brain_search(query="<main topic>")` (cross-project — pulls from CC-agentic research)

**After every task:** `brain_save` with `project="crm-fresh"`. Pick the most
specific category: `bug`, `pattern`, `decision`, `learning`, `reference`.
Never default to `context` — that's for session-end summaries only.

**Session end:** one `brain_save` with `category="context"` summarizing tasks
completed, decisions made, open threads.

---

## Golden Rules

1. **Anti-AI writing applies to everything.** Every word on this site will be
   read by a skeptical RevOps manager. If it reads like AI wrote it, they close
   the tab.

2. **Website is a conversion tool, not a brochure.** One CTA. No hedge copy.
   No "learn more" links to nowhere. Every section earns its place.

3. **Don't build Phase 1 until Phase 0 gate clears.** No HubSpot API code, no
   monitoring loop, no digest mailer. Manual service first.

4. **Open Brain is mandatory.** Session start: brain_search. After every task:
   brain_save. Session end: context save.

5. **Push back, don't yes-man.** If copy is weak, say so. If a design decision
   contradicts the ICP, flag it. Surface the strongest counter before agreeing.

6. **Direct, concise tone.** No preamble. No trailing summaries. Lead with the
   answer.

7. **Research lives in CC-agentic.** Before making any competitive or
   positioning claim, check `CC-agentic/agentic/products/crm-freshness/` first.
   Don't re-derive what's already documented.
