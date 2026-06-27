import { t } from "../i18n";
import {
  CliWindow,
  CoordinateGrid,
  DataGrid,
  HudBar,
  LiveClock,
  LogStrip,
  RadarSpinner,
  StatChip,
  SystemMonitor,
  Uptime,
  Corners,
} from "../components/Hud";

export function HeroSection() {
  const cliLines = [
    { dim: true, text: "# Parallel SEKAI — bootstrap session" },
    { prompt: "$", text: "whoami" },
    { dim: true, text: "parallel-sekai@open-collective" },
    { prompt: "$", text: "ls -la ./missions" },
    { dim: true, text: "drwx---  stickers   3 contributors" },
    { dim: true, text: "drwx---  music      4 contributors" },
    { dim: true, text: "drwx---  bots       2 contributors" },
    { prompt: "$", text: "cat ./manifest.md" },
    { text: t.orgMission },
  ];

  const stats = [
    { label: "CPU / RENDER", value: 64, from: 40, to: 78 },
    { label: "MEMORY / HEAP", value: 72, from: 55, to: 82 },
    { label: "NET / UPLINK", value: 41, from: 20, to: 60 },
    { label: "GPU / SHADERS", value: 88, from: 70, to: 95 },
  ];

  return (
    <section className="snap-section hero-section scanlines bg-[var(--bg-0)] bg-grid relative flex flex-col">
      {/* Background layers */}
      <div className="absolute inset-0 hero-glow" aria-hidden />
      <div className="absolute inset-0 noise" aria-hidden />
      <CoordinateGrid />

      {/* Top HUD bar */}
      <HudBar
        title="01 — HERO // TERMINAL SESSION"
        right={
          <>
            <span className="hide-mobile"><LiveClock /></span>
            <span>UPTIME <Uptime /></span>
            <span className="text-[var(--accent)]">ONLINE</span>
          </>
        }
      />

      {/* Main grid content */}
      <div className="snap-content">
        <div className="relative z-10 grid flex-1 grid-cols-12 gap-3 overflow-hidden p-3 md:p-5">
        {/* Left column - CLI & hero */}
        <div className="col-span-12 flex flex-col gap-3 lg:col-span-8">
          {/* Hero text block */}
          <div className="frame relative flex-1 bg-[var(--bg-1)]/60 p-5 backdrop-blur-sm md:p-8">
            <Corners />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[var(--fg-2)]">
                  <span className="pulse-dot" />
                  <span>{t.heroTitlePrefix}</span>
                  <span className="h-px flex-1 bg-[var(--accent-dim)]" />
                  <span className="text-[var(--accent)]">{t.heroTitleSuffix.replace("// ", "")}</span>
                </div>
                <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight text-[var(--fg-0)] md:text-7xl lg:text-8xl">
                  <span className="block text-[var(--accent)] glow">Parallel</span>
                  <span className="block">SEKAI</span>
                </h1>
                <p className="localized-text mt-4 max-w-2xl text-sm leading-relaxed text-[var(--fg-1)] md:text-base">
                  {t.orgTagline}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--fg-2)] md:text-sm">
                  {t.heroSubtitle}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Parallel-SEKAI"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--bg-0)] transition hover:bg-transparent hover:text-[var(--accent)]"
                >
                  <span>→</span>
                  <span>{t.ctaPrimary}</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 border border-[var(--accent-dim)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--accent)] transition hover:bg-[var(--accent-dim)]"
                >
                  <span>{t.ctaSecondary}</span>
                  <span>↓</span>
                </a>
                <div className="ml-auto hidden gap-2 md:flex">
                  <StatChip label="MEMBERS" value="07" />
                  <StatChip label="REPOS" value="11" />
                  <StatChip label="LANG" value="6+" />
                </div>
              </div>
            </div>
          </div>

          {/* CLI */}
          <div className="max-h-[320px] flex-shrink-0">
            <CliWindow title="shell@parallel-sekai" lines={cliLines} />
          </div>
        </div>

        {/* Right column - monitors & data */}
        <div className="col-span-12 hidden flex-col gap-3 lg:col-span-4 lg:flex">
          <SystemMonitor stats={stats} />

          <div className="frame flex items-center justify-center bg-[var(--bg-1)]/70 p-4 backdrop-blur-sm">
            <Corners />
            <div className="relative flex items-center gap-4">
              <RadarSpinner />
              <div className="text-[10px] uppercase tracking-widest text-[var(--fg-1)]">
                <div className="text-[var(--accent)]">● TRACKING</div>
                <div className="mt-1">SIG: 25:00.00</div>
                <div>FREQ: 440 Hz</div>
                <div>CH: STEREO</div>
                <div className="mt-2 text-[var(--fg-2)]">NIGHTCORD</div>
                <div className="text-[var(--fg-2)]">at 25:00</div>
              </div>
            </div>
          </div>

          <DataGrid
            rows={[
              "repo:pjsk-sticker   lang:dart    ★ 08",
              "repo:kanade         lang:kotlin  ★ 01",
              "repo:amiabot        lang:ts      ★ 05",
              "repo:enana          lang:python  ★ 00",
              "repo:nightcord      lang:ts      ★ 01",
              "repo:cmmt           lang:python  ★ 00",
              "repo:nekonekobot    lang:dart    ★ 00",
              "repo:pjsk-st-api    lang:go      ★ 01",
            ]}
          />
        </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <LogStrip />
    </section>
  );
}
