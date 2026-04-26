import { PrimaryCtaLink, SecondaryCtaLink } from '@/components/cta-links';
import { Reveal } from '@/components/reveal';

export default function HomePage() {
  return (
    <main>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            <Reveal active className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-slate mb-4 flex items-center">
                <span className="w-8 h-px bg-gold mr-4" />
                Most professionals don't know this number
              </p>
              <h1 className="font-work-sans text-5xl lg:text-7xl leading-[1.1] text-charcoal mb-6">
                What's your <br />
                <span className="text-forest italic tracking-[-0.072em]">CareerArth?</span>
              </h1>
              <p className="text-lg text-slate mb-10 leading-relaxed max-w-lg">
                Diagnose where your career is quietly weakening before it limits your future options. A strategic
                assessment framework for ambitious professionals.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <PrimaryCtaLink href="/audit">Start the Career Audit</PrimaryCtaLink>
                <SecondaryCtaLink href="/sample-score">See Sample Score</SecondaryCtaLink>
              </div>
              <p className="text-xs text-slate opacity-70 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Free Diagnostic</span>
                <span>&bull;</span>
                <span>5-Minute Assessment</span>
                <span>&bull;</span>
                <span>Immediate Insight</span>
              </p>
            </Reveal>

            <Reveal active className="relative lg:h-[500px] flex justify-center lg:justify-end delay-100">
              <div className="w-full max-w-md bg-graphite rounded-2xl border border-gold/25 p-7 relative z-10 overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)]">

                {/* Subtle grid texture */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] bg-[length:20px_20px] pointer-events-none" />

                {/* Header */}
                <div className="flex justify-between items-start mb-8 pb-5 border-b border-pearl/10">
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-pearl/50 mb-1">Career Arth</div>
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-pearl">Diagnostic Report</div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span className="text-[11px] tracking-widest uppercase text-gold">Active</span>
                  </div>
                </div>

                {/* Gauge */}
                <div className="relative flex flex-col items-center mb-7">
                  <svg viewBox="0 0 100 55" className="w-full max-w-[200px]">
                    <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#3d4c50" strokeWidth="4" strokeLinecap="round" />
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#B59654"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="0 100"
                      pathLength="100"
                      className="gauge-fill"
                    />
                  </svg>
                  <div className="absolute bottom-0 text-center">
                    <div className="font-black text-5xl text-pearl leading-none tracking-tight">68</div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold mt-1.5">Arth Score</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="border-t border-pearl/10 pt-6 space-y-6">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs uppercase tracking-widest text-pearl/70">Trajectory Risk</span>
                      <span className="text-xs font-bold text-gold">Elevated</span>
                    </div>
                    <div className="w-full bg-pearl/10 h-0.5 rounded-full overflow-hidden">
                      <div className="bg-gold h-full w-[70%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs uppercase tracking-widest text-pearl/70">Alignment</span>
                      <span className="text-xs font-bold text-pearl">Stable</span>
                    </div>
                    <div className="w-full bg-pearl/10 h-0.5 rounded-full overflow-hidden">
                      <div className="bg-pearl/50 h-full w-[45%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xs uppercase tracking-widest text-pearl/70">Human Capital</span>
                      <span className="text-xs font-bold text-pearl">Growing</span>
                    </div>
                    <div className="w-full bg-pearl/10 h-0.5 rounded-full overflow-hidden">
                      <div className="bg-pearl/50 h-full w-[60%]" />
                    </div>
                  </div>
                </div>

                {/* Footer ref */}
                <div className="mt-8 pt-6 border-t border-pearl/10 flex justify-between items-center">
                  <span className="text-[9px] tracking-widest uppercase text-pearl/35">Ref #CA-2026-0847</span>
                  <span className="text-[9px] tracking-widest uppercase text-pearl/35">Career Arth Platform</span>
                </div>
              </div>

              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold rounded-full blur-3xl opacity-[0.06] -z-10" />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="problem" className="py-24 bg-white relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <Reveal className="lg:col-span-5">
              <h2 className="font-bold text-4xl lg:text-5xl text-forest leading-tight tracking-tight mb-6">
                Most careers don't break. <br />
                <span className="italic text-slate">They erode.</span>
              </h2>
              <p className="text-slate leading-relaxed mb-6">
                You work hard, take on new roles, and earn more. Yet, without a diagnostic framework, you may be
                quietly losing momentum, strategic clarity, or future optionality.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:col-start-7 flex flex-col border-t border-b border-sand delay-100">
              <div className="p-8 border-b border-sand hover:bg-ivory/80 transition-colors">
                <div className="text-xs font-semibold text-gold tracking-widest uppercase mb-3">The Blindspot</div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">False Security</h3>
                <p className="text-sm text-slate">
                  High compensation often masks structural career stagnation, leading to a narrower set of options in
                  the following decade.
                </p>
              </div>
              <div className="p-8 hover:bg-ivory/80 transition-colors">
                <div className="text-xs font-semibold text-gold tracking-widest uppercase mb-3">The Catalyst</div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Inflection Points</h3>
                <p className="text-sm text-slate">
                  Without a baseline measurement, professionals navigate critical career pivots using intuition rather
                  than objective strategic assessment.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="framework" className="py-24 bg-ivory/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-medium uppercase tracking-widest text-slate mb-4">The Methodology</p>
            <h2 className="font-bold text-4xl lg:text-5xl text-forest tracking-tight mb-6">The ARTH Score</h2>
            <p className="text-slate">
              A proprietary 4-dimension diagnostic identifying where your career is gaining strength and where risks
              are accumulating.
            </p>
          </Reveal>

          <Reveal className="grid md:grid-cols-2 gap-px bg-charcoal rounded-xl overflow-hidden border border-charcoal delay-100">
            {[
              ['A', 'Alignment', 'Measures the coherence between your current role and your long-term ambitions.'],
              ['R', 'Risk Exposure', 'Evaluates vulnerability to industry shifts and skill obsolescence.'],
              ['T', 'Trajectory', 'Assesses current momentum - are options expanding or narrowing over time?'],
              ['H', 'Human Capital', 'Quantifies the strength of your network and brand equity.'],
            ].map(([letter, title, copy]) => (
              <div key={title} className="bg-graphite p-10 lg:p-14 relative group hover:bg-[#404f52] transition-colors">
                <div className="absolute top-8 right-8 font-black text-7xl text-pearl/10 group-hover:text-pearl/20 transition-colors pointer-events-none">
                  {letter}
                </div>
                <h3 className="font-semibold text-2xl text-pearl mb-3 relative z-10">{title}</h3>
                <p className="text-sm text-pearl/65 leading-relaxed max-w-xs relative z-10">{copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-ivory/80">        <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="bg-white p-12 lg:p-20 rounded-2xl shadow-sm border border-sand">
            <h2 className="font-bold text-4xl lg:text-5xl text-forest tracking-tight mb-6">
              Better career decisions start with <span className="italic text-slate">better diagnostics.</span>
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <PrimaryCtaLink href="/audit">Start the Career Audit</PrimaryCtaLink>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <SecondaryCtaLink href="/sample-score">See Sample Score</SecondaryCtaLink>
                <SecondaryCtaLink href="/consultation">Talk to a Career Expert</SecondaryCtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      </section>
    </main>
  );
}
