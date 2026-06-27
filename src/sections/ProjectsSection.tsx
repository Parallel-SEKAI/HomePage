import { t } from "../i18n";
import { Corners, HudBar, LiveClock, Uptime } from "../components/Hud";

const PROJECTS = [
  {
    key: "pjskSticker" as const,
    id: "PJSK-Sticker",
    url: "https://github.com/Parallel-SEKAI/PJSK-Sticker",
    version: "v2.1.0",
    license: "GPL-3.0",
    stars: "08",
    forks: "02",
    status: "ACTIVE",
    index: "01",
  },
  {
    key: "kanade" as const,
    id: "Kanade",
    url: "https://github.com/Parallel-SEKAI/Kanade",
    version: "v1.0.0",
    license: "Apache-2.0",
    stars: "01",
    forks: "00",
    status: "DEV",
    index: "02",
  },
  {
    key: "amiabot" as const,
    id: "AmiaBot",
    url: "https://github.com/Parallel-SEKAI/AmiaBot",
    version: "v0.9.3",
    license: "MIT",
    stars: "05",
    forks: "01",
    status: "ACTIVE",
    index: "03",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="snap-section scanlines bg-[var(--bg-0)] bg-dots relative flex flex-col">
      <div className="absolute inset-0 noise" aria-hidden />

      <HudBar
        title="02 — PROJECTS // REPOSITORY INDEX"
        right={
          <>
            <span className="hide-mobile"><LiveClock /></span>
            <span>COUNT 03</span>
            <span className="text-[var(--accent)]">FETCH OK</span>
          </>
        }
      />

      <div className="snap-content">
        <div className="relative z-10 flex flex-col p-4 md:p-6 pb-12 md:pb-16">
          {/* Section header */}
          <div className="mb-4 flex flex-col gap-2 md:mb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--fg-2)]">
                <span className="h-px w-8 bg-[var(--accent)]" />
                <span className="text-[var(--accent)]">{t.sectionTag}</span>
                <span className="h-px flex-1 bg-[var(--accent-dim)]" />
              </div>
              <h2 className="localized-text mt-2 text-3xl font-black tracking-tight text-[var(--fg-0)] md:text-5xl">
                <span className="text-[var(--accent)] glow">/</span> {t.sectionLabel}
              </h2>
              <p className="localized-text mt-2 max-w-3xl text-xs text-[var(--fg-1)] md:text-sm">
                {t.sectionDesc}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--fg-2)]">
              <span className="border border-[var(--accent-dim)] px-2 py-1">
                UPTIME <Uptime />
              </span>
              <span className="border border-[var(--accent-dim)] px-2 py-1 text-[var(--accent)]">
                ● SYNC
              </span>
            </div>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {PROJECTS.map((p) => {
              const data = t.project[p.key];
              return (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="frame group relative flex flex-col overflow-hidden bg-[var(--bg-1)]/70 backdrop-blur-sm transition hover:bg-[var(--bg-2)]/80"
                >
                  <Corners />

                  {/* Card header */}
                  <div className="relative flex items-start justify-between border-b border-[var(--accent-dim)] p-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--fg-2)]">
                        REPO / {p.index}
                      </div>
                      <h3 className="mt-1 font-mono text-2xl font-bold tracking-tight text-[var(--fg-0)] group-hover:text-[var(--accent)]">
                        {data.name}
                      </h3>
                      <div className="localized-text mt-1 text-[11px] uppercase tracking-widest text-[var(--accent)]">
                        {data.short}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] uppercase tracking-widest text-[var(--fg-2)]">STATUS</div>
                      <div
                        className={`mt-0.5 text-[10px] font-bold ${
                          p.status === "ACTIVE" ? "text-[var(--accent)]" : "text-[var(--fg-1)]"
                        }`}
                      >
                        ● {p.status}
                      </div>
                    </div>
                  </div>

                  {/* Card body - description */}
                  <div className="relative flex-1 p-4">
                    <p className="localized-text text-xs leading-relaxed text-[var(--fg-1)] md:text-[13px]">
                      {data.desc}
                    </p>

                    {/* Mini "terminal" decoration */}
                    <div className="mt-4 border-l-2 border-[var(--accent-dim)] pl-3 font-mono text-[10px] text-[var(--fg-2)]">
                      <div>$ git clone parallel-sekai/{p.id.toLowerCase()}.git</div>
                      <div className="text-[var(--accent)]">→ resolving refs... done</div>
                    </div>
                  </div>

                  {/* Card footer - meta */}
                  <div className="relative border-t border-[var(--accent-dim)] bg-[var(--bg-1)]/90">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 px-4 py-2.5">
                      {data.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[var(--accent-dim)] bg-[var(--bg-2)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--accent)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta row */}
                    <div className="flex items-center justify-between border-t border-[var(--accent-dim)] px-4 py-2 text-[10px] uppercase tracking-widest text-[var(--fg-2)]">
                      <div className="flex gap-3">
                        <span>★ {p.stars}</span>
                        <span>⑂ {p.forks}</span>
                        <span className="hide-mobile">LIC {p.license}</span>
                        <span className="hide-mobile">VER {p.version}</span>
                      </div>
                      <span className="font-bold text-[var(--accent)] transition group-hover:translate-x-1">
                        {t.viewRepo}
                      </span>
                    </div>
                  </div>

                  {/* Decorative scan accent */}
                  <div className="stripes absolute -right-10 top-0 h-full w-3 opacity-0 transition-opacity group-hover:opacity-30" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom status line */}
      <div className="mt-4 hidden items-center justify-between text-[10px] uppercase tracking-widest text-[var(--fg-2)] md:flex">
        <div className="flex items-center gap-4">
          <span>QUERY: featured=TRUE</span>
          <span>·</span>
          <span>RESULTS: 03</span>
          <span>·</span>
          <span>INDEX: PARALLEL-SEKAI/MAIN</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PAGE 02 / 03</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-6 bg-[var(--fg-2)]" />
            <span className="h-1.5 w-6 bg-[var(--accent)]" />
            <span className="h-1.5 w-6 bg-[var(--fg-2)]" />
          </span>
        </div>
      </div>
    </section>
  );
}
