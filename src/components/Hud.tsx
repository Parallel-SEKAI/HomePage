import { useEffect, useState } from "react";

/* ---------- Corner Brackets ---------- */
export function Corners({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[var(--accent)]" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[var(--accent)]" />
      <span className="absolute left-0 bottom-0 h-4 w-4 border-l-2 border-b-2 border-[var(--accent)]" />
      <span className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-[var(--accent)]" />
    </div>
  );
}

/* ---------- HUD Header Bar ---------- */
export function HudBar({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--accent-dim)] bg-[var(--bg-1)]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--fg-1)]">
      <div className="flex items-center gap-2">
        <span className="pulse-dot" />
        <span className="font-semibold text-[var(--accent)]">{title}</span>
      </div>
      <div className="flex items-center gap-3 text-[var(--fg-2)]">
        {right}
      </div>
    </div>
  );
}

/* ---------- Live Clock ---------- */
export function LiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const ts = now.toISOString().replace("T", " ").slice(0, 19);
  return <span className="tabular-nums">UTC {ts}</span>;
}

/* ---------- Uptime Counter ---------- */
export function Uptime() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setS((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return <span className="tabular-nums text-[var(--accent)]">{h}:{m}:{sec}</span>;
}

/* ---------- System Monitor Panel ---------- */
type Stat = { label: string; value: number; from: number; to: number };
export function SystemMonitor({ stats }: { stats: Stat[] }) {
  return (
    <div className="frame bg-[var(--bg-1)]/80 p-3 backdrop-blur-sm">
      <Corners />
      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-[var(--fg-2)]">
        <span>SYS / MONITOR</span>
        <span className="text-[var(--accent)]">● LIVE</span>
      </div>
      <div className="space-y-2.5">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="mb-1 flex justify-between text-[10px] text-[var(--fg-1)]">
              <span className="tracking-wider">{s.label}</span>
              <span className="tabular-nums text-[var(--accent)]">{s.value}%</span>
            </div>
            <div className="relative h-1.5 bg-[var(--bg-2)]">
              <div
                className="bar-fill absolute left-0 top-0 h-full bg-[var(--accent)]"
                style={{
                  ["--bar-from" as string]: `${s.from}%`,
                  ["--bar-to" as string]: `${s.to}%`,
                  width: `${s.value}%`,
                }}
              />
              <div
                className="absolute top-0 h-full w-px bg-[var(--accent-dim)]"
                style={{ left: "25%" }}
              />
              <div
                className="absolute top-0 h-full w-px bg-[var(--accent-dim)]"
                style={{ left: "50%" }}
              />
              <div
                className="absolute top-0 h-full w-px bg-[var(--accent-dim)]"
                style={{ left: "75%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- CLI Window ---------- */
export function CliWindow({
  title,
  lines,
}: {
  title: string;
  lines: { prompt?: string; text: string; dim?: boolean }[];
}) {
  return (
    <div className="frame overflow-hidden bg-[var(--bg-1)]/85 backdrop-blur-sm">
      <Corners />
      <HudBar
        title={title}
        right={
          <>
            <span className="hide-mobile">PID 8842</span>
            <span className="text-[var(--accent)]">TTY0</span>
            <span className="flex gap-1">
              <span className="h-2 w-2 bg-[var(--fg-2)]" />
              <span className="h-2 w-2 bg-[var(--fg-2)]" />
              <span className="h-2 w-2 bg-[var(--accent)]" />
            </span>
          </>
        }
      />
      <div className="reveal p-4 font-mono text-[11px] leading-relaxed text-[var(--fg-1)] md:text-xs">
        {lines.map((l, i) => (
          <div key={i} className={l.dim ? "text-[var(--fg-2)]" : ""}>
            <span className="mr-2 text-[var(--accent)]">{l.prompt ?? "▸"}</span>
            <span>{l.text}</span>
            {i === lines.length - 1 && <span className="caret" />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Marquee log strip ---------- */
export function LogStrip() {
  const entries = [
    "SYS: boot sequence complete",
    "NET: handshake // parallel.sekai.node",
    "AUTH: token valid · scope:public",
    "DATA: repo sync · 0 errors · 14 updated",
    "SIGNAL: nightcord.at.25:00",
    "BUILD: kanade.apk · 42.3MB · signed",
    "HOOK: onebot.event.message → amiabot.handler",
    "CACHE: sticker.assets · 1247 indexed",
  ];
  const joined = entries.map((e) => `[${e}]`).join("   ·   ");
  return (
    <div className="relative overflow-hidden border-y border-[var(--accent-dim)] bg-[var(--bg-1)] py-2 text-[10px] uppercase tracking-widest text-[var(--fg-2)]">
      <div className="marquee">
        <span className="shrink-0 pr-12">{joined}   ·   </span>
        <span className="shrink-0 pr-12">{joined}   ·   </span>
      </div>
    </div>
  );
}

/* ---------- Coordinate crosshair overlay ---------- */
export function CoordinateGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute left-6 top-6 text-[10px] tracking-widest text-[var(--fg-2)]">
        <div>X: 141.072</div>
        <div>Y: 035.891</div>
      </div>
      <div className="absolute right-6 top-6 text-right text-[10px] tracking-widest text-[var(--fg-2)]">
        <div>SECTOR :: 25-NC</div>
        <div>NODE  :: SEKAI-PARALLEL-01</div>
      </div>
      <div className="absolute bottom-6 left-6 text-[10px] tracking-widest text-[var(--fg-2)]">
        <div>LAT 35.6762° N</div>
        <div>LON 139.6503° E</div>
      </div>
      <div className="absolute bottom-6 right-6 text-right text-[10px] tracking-widest text-[var(--fg-2)]">
        <div>MODE: READONLY</div>
        <div>PROTOCOL: HTTPS/3</div>
      </div>
    </div>
  );
}

/* ---------- Hexagonal / radar spinner ---------- */
export function RadarSpinner() {
  return (
    <div aria-hidden className="spin-slow relative h-24 w-24 md:h-32 md:w-32">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--accent-dim)" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="var(--accent-dim)" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="var(--accent-dim)" strokeWidth="0.5" />
        <line x1="50" y1="2" x2="50" y2="98" stroke="var(--accent-dim)" strokeWidth="0.4" />
        <line x1="2" y1="50" x2="98" y2="50" stroke="var(--accent-dim)" strokeWidth="0.4" />
        <path d="M50 50 L96 50 A46 46 0 0 0 50 4 Z" fill="var(--accent-dim)" />
        <circle cx="50" cy="50" r="2" fill="var(--accent)" />
      </svg>
    </div>
  );
}

/* ---------- Small stat chip ---------- */
export function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--accent-dim)] bg-[var(--bg-1)]/70 px-3 py-2">
      <div className="text-[9px] uppercase tracking-[0.25em] text-[var(--fg-2)]">{label}</div>
      <div className="mt-0.5 text-sm font-semibold text-[var(--accent)] tabular-nums">{value}</div>
    </div>
  );
}

/* ---------- DataGrid background ---------- */
export function DataGrid({ rows }: { rows: string[] }) {
  return (
    <div className="frame h-full bg-[var(--bg-1)]/70 p-3 text-[10px] leading-relaxed text-[var(--fg-1)]">
      <Corners />
      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-[var(--fg-2)]">
        <span>DATA / GRID</span>
        <span className="text-[var(--accent)]">READ</span>
      </div>
      <div className="space-y-0.5 font-mono">
        {rows.map((r, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-[var(--fg-2)]">{String(i + 1).padStart(3, "0")}</span>
            <span className="text-[var(--fg-1)]">{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
