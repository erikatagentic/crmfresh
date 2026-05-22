const CALENDLY_URL = "https://tidycal.com/heyagentic/30-minutes";

function CheckMark() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-1.5 h-5 w-5 flex-none text-emerald-500"
    >
      <path
        d="M4 10.5l3.5 3.5L16 6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrimaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* HERO */}
      <section className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl md:leading-[1.05]">
            Your sequences are firing at people who left 18 months ago.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-700 md:text-xl">
            CRMFresh audits your contact list before you hit send. We find
            who left and flag the dead emails. You get back a clean list with
            a re-engagement segment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <PrimaryButton href={CALENDLY_URL}>
              Get a free sample audit
            </PrimaryButton>
            <p className="text-sm text-stone-500">
              Free sample on 50 of your contacts. No call required to get it.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-stone-200 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              CRMs rot faster than anyone wants to admit.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              About 30% of B2B contacts change jobs every year. By the time your
              SDR launches a sequence, a quarter of that list is already firing
              at ghosts. That burns sender reputation and tanks deliverability
              for the people who're still there.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <div className="text-center md:text-left">
              <div className="text-5xl font-semibold text-emerald-600">30%</div>
              <p className="mt-3 text-stone-600">
                of B2B contacts change jobs every year (Cognism)
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl font-semibold text-emerald-600">
                25-30%
              </div>
              <p className="mt-3 text-stone-600">
                of the average CRM is stale within 12 months
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-5xl font-semibold text-emerald-600">
                1 in 4
              </div>
              <p className="mt-3 text-stone-600">
                contacts in your active sequences may already be gone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="border-t border-stone-200 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              Two ways to keep your list clean
            </h2>
            <p className="mt-5 text-lg text-stone-600">
              Pick the one that fits how often your list moves.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm md:p-10">
              <div className="text-xs font-medium uppercase tracking-widest text-stone-500">
                One-time
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-stone-950">
                CRM Audit
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-stone-950">
                  $750
                </span>
                <span className="text-stone-500">flat</span>
              </div>
              <p className="mt-6 leading-relaxed text-stone-700">
                Send us a CSV or connect your CRM. We deliver a cleaned list
                plus a job-change report within 5 business days.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1 font-medium text-emerald-700 hover:text-emerald-800"
              >
                Get started <span aria-hidden="true">→</span>
              </a>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm md:p-10">
              <div className="text-xs font-medium uppercase tracking-widest text-stone-500">
                Ongoing
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-stone-950">
                Monthly Monitoring
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-stone-950">
                  $200
                </span>
                <span className="text-stone-500">/month</span>
              </div>
              <p className="mt-6 leading-relaxed text-stone-700">
                We check your active contacts every 30 days and flag anyone who
                moved. Monthly digest hits your inbox the first Monday.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1 font-medium text-emerald-700 hover:text-emerald-800"
              >
                Start monitoring <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-stone-200 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
              How it works
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="font-mono text-sm tracking-widest text-emerald-600">
                01
              </div>
              <p className="mt-4 text-lg text-stone-800">
                Submit your list as CSV or connect your CRM.
              </p>
            </div>
            <div>
              <div className="font-mono text-sm tracking-widest text-emerald-600">
                02
              </div>
              <p className="mt-4 text-lg text-stone-800">
                We run detection across job changes and dead emails.
              </p>
            </div>
            <div>
              <div className="font-mono text-sm tracking-widest text-emerald-600">
                03
              </div>
              <p className="mt-4 text-lg text-stone-800">
                You get a clean deliverable in 5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLE */}
      <section className="border-t border-stone-200 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
            What lands in your inbox 5 days later
          </h2>
          <p className="mt-5 text-lg text-stone-600">
            Every audit ships as a single spreadsheet with five tabs and a
            one-page summary.
          </p>
          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <CheckMark />
              <span className="text-lg leading-relaxed text-stone-800">
                Contacts who confirmed changed jobs, with their new company and
                title where we found it
              </span>
            </li>
            <li className="flex gap-4">
              <CheckMark />
              <span className="text-lg leading-relaxed text-stone-800">
                Emails that hard-bounce, pulled out of your sequence universe
                entirely
              </span>
            </li>
            <li className="flex gap-4">
              <CheckMark />
              <span className="text-lg leading-relaxed text-stone-800">
                Catch-all domains flagged for manual review, not silently
                included
              </span>
            </li>
            <li className="flex gap-4">
              <CheckMark />
              <span className="text-lg leading-relaxed text-stone-800">
                A re-engagement segment: people still at the same company but
                who haven't been touched in 9+ months
              </span>
            </li>
            <li className="flex gap-4">
              <CheckMark />
              <span className="text-lg leading-relaxed text-stone-800">
                A one-page summary of what we found and what you should look at
                first
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-stone-200 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">
            Stop sending into the void.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-stone-600">
            Free sample on 50 of your contacts. No commitment, no call required.
          </p>
          <div className="mt-10">
            <PrimaryButton href={CALENDLY_URL}>
              Get a free sample audit
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-stone-500 md:flex-row">
          <div className="font-medium text-stone-700">CRMFresh</div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:erik@crmfresh.io"
              className="hover:text-stone-800"
            >
              erik@crmfresh.io
            </a>
            <span aria-hidden="true">·</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
