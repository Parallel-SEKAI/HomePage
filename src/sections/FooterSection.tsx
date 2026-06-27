import { t, locale } from "../i18n";
import { Corners, HudBar, LiveClock, Uptime } from "../components/Hud";

export function FooterSection() {
  return (
    <section className="snap-section scanlines bg-[var(--bg-0)] relative flex flex-col">
      <div className="absolute inset-0 bg-grid-sm opacity-40" aria-hidden />
      <div className="absolute inset-0 noise" aria-hidden />

      <HudBar
        title="03 — FOOTER // END OF TRANSMISSION"
        right={
          <>
            <span className="hide-mobile"><LiveClock /></span>
            <span>LOCALE {locale.toUpperCase()}</span>
            <span className="text-[var(--accent)]">END</span>
          </>
        }
      />

      <div className="snap-content">
        <div className="p-5 md:p-8 pb-12 md:pb-16">
          {/* Big closing statement */}
          <div className="frame relative mb-6 bg-[var(--bg-1)]/50 p-6 backdrop-blur-sm md:p-10">
            <Corners />
            <div className="flex h-full flex-col justify-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]">
                {t.footerLabel}
              </div>
              <h2 className="mt-3 text-3xl font-black leading-[1.05] tracking-tight md:text-6xl">
                <span className="block text-[var(--accent)] glow">Parallel</span>
                <span className="block text-[var(--fg-0)]">SEKAI</span>
              </h2>
              <p className="localized-text mt-4 max-w-3xl text-sm leading-relaxed text-[var(--fg-1)] md:text-lg">
                {t.footerSlogan}
              </p>
            </div>
          </div>

          {/* Footer grid */}
          <div className="grid grid-cols-2 gap-4 border-t border-[var(--accent-dim)] pt-6 md:grid-cols-4">
            <div>
              <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[var(--fg-2)]">
                [ {t.footerNav} ]
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--fg-1)]">
                <li><a href="#" className="hover:text-[var(--accent)]">› {t.footerHome}</a></li>
                <li><a href="#projects" className="hover:text-[var(--accent)]">› {t.footerProjects}</a></li>
                <li>
                  <a
                    href="https://github.com/Parallel-SEKAI"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--accent)]"
                  >
                    › {t.footerGitHub}
                    </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[var(--fg-2)]">
                [ {t.footerOrg} ]
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--fg-1)]">
                <li>› PJSK-Sticker</li>
                <li>› Kanade</li>
                <li>› AmiaBot</li>
                <li>› Enana</li>
                <li>› Nightcord</li>
              </ul>
            </div>

            <div>
              <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[var(--fg-2)]">
                [ {t.footerContact} ]
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--fg-1)]">
                <li>
                  <a href="https://github.com/Parallel-SEKAI" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
                    › github.com/Parallel-SEKAI
                  </a>
                </li>
                <li>› issues: enabled</li>
                <li>› discussions: open</li>
              </ul>
            </div>

            <div>
              <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[var(--fg-2)]">
                [ SYSTEM ]
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--fg-1)]">
                <li>› UPTIME <Uptime /></li>
                <li>› BUILD stable</li>
                <li>› SIG ok</li>
                <li>› LANG {locale}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom signature strip */}
      <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-[var(--accent-dim)] px-5 pt-4 text-[10px] uppercase tracking-widest text-[var(--fg-2)] md:px-8 md:flex-row md:items-center">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="text-[var(--accent)]">{t.footerBuilt}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="pulse-dot" />
          <span>TRANSMISSION // COMPLETE</span>
          <span className="text-[var(--accent)]">◆</span>
        </div>
      </div>
    </section>
  );
}
