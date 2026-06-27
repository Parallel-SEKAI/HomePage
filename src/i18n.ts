// Auto language detection with i18n support.
// Decorative / non-critical labels stay in English across all locales.

export type Locale = "zh-CN" | "zh-TW" | "en" | "ja";

export const translations = {
  "zh-CN": {
    orgTagline: "一个围绕 Project Sekai 展开的开源技术组织",
    orgMission:
      "我们围绕音游生态构建工具、客户端与自动化服务。从表情生成器、音乐播放器到 OneBot 机器人，Parallel SEKAI 以代码连接热爱。",
    heroTitlePrefix: "WELCOME TO",
    heroTitleMain: "Parallel SEKAI",
    heroTitleSuffix: "// OPEN SOURCE COLLECTIVE",
    heroSubtitle: "音游生态 · 工具链 · 开源协作",
    ctaPrimary: "进入 GitHub",
    ctaSecondary: "查看项目",
    sectionTag: "02 — PROJECTS",
    sectionLabel: "核心项目",
    sectionDesc: "以下为组织内最具代表性的三个开源项目。所有功能通过文档化文本呈现。",
    viewRepo: "查看仓库 ↗",
    footerLabel: "ORGANIZATION FOOTER",
    footerSlogan: "在代码的平行世界里，奏响另一种可能性。",
    footerNav: "导航",
    footerOrg: "组织",
    footerHome: "首页",
    footerProjects: "项目",
    footerGitHub: "GitHub",
    footerContact: "联系",
    footerBuilt: "BUILT BY PARALLEL SEKAI",
    project: {
      pjskSticker: {
        name: "PJSK-Sticker",
        short: "Project Sekai 表情包生成器",
        desc: "一款基于 Dart 构建的跨平台表情包制作工具。用户可通过可视化编辑器自由组合 Project Sekai 角色立绘、台词气泡与背景素材，实时预览并导出高清贴纸。支持桌面端与移动端双平台运行，并提供独立的后端 API (Go) 与资源仓库。",
        tags: ["Dart", "Flutter", "Cross-Platform"],
      },
      kanade: {
        name: "Kanade",
        short: "高性能 Android 音乐播放器",
        desc: "基于 Clean Architecture + MVI 架构打造的 Android 原生音乐播放器，采用 Jetpack Compose 与 Material 3 设计语言。内置 Media3 (ExoPlayer) 播放引擎，支持逐字同步歌词 (LRC / TTML)、QuickJS 脚本扩展音源 (KSS) 与流光动态主题。",
        tags: ["Kotlin", "Jetpack Compose", "Media3"],
      },
      amiabot: {
        name: "AmiaBot",
        short: "以暁山瑞希为主题的 QQ 机器人",
        desc: "基于 OneBot (NapCat) 接口实现的 QQ 机器人框架，以 Project Sekai 角色暁山瑞希 (Akiyama Mizuki) 为主题人格。采用 TypeScript 开发，支持群聊互动、指令系统与多媒体内容分发。",
        tags: ["TypeScript", "OneBot", "NapCat"],
      },
    },
  },
  "zh-TW": {
    orgTagline: "一個圍繞 Project Sekai 展開的開源技術組織",
    orgMission:
      "我們圍繞音遊生態構建工具、客戶端與自動化服務。從表情生成器、音樂播放器到 OneBot 機器人，Parallel SEKAI 以代碼連接熱愛。",
    heroTitlePrefix: "WELCOME TO",
    heroTitleMain: "Parallel SEKAI",
    heroTitleSuffix: "// OPEN SOURCE COLLECTIVE",
    heroSubtitle: "音遊生態 · 工具鏈 · 開源協作",
    ctaPrimary: "進入 GitHub",
    ctaSecondary: "查看項目",
    sectionTag: "02 — PROJECTS",
    sectionLabel: "核心項目",
    sectionDesc: "以下為組織內最具代表性的三個開源項目。所有功能透過文件化文本呈現。",
    viewRepo: "查看倉庫 ↗",
    footerLabel: "ORGANIZATION FOOTER",
    footerSlogan: "在代碼的平行世界裡，奏響另一種可能性。",
    footerNav: "導航",
    footerOrg: "組織",
    footerHome: "首頁",
    footerProjects: "項目",
    footerGitHub: "GitHub",
    footerContact: "聯繫",
    footerBuilt: "BUILT BY PARALLEL SEKAI",
    project: {
      pjskSticker: {
        name: "PJSK-Sticker",
        short: "Project Sekai 表情包生成器",
        desc: "一款基於 Dart 構建的跨平台表情包製作工具。用戶可透過視覺化編輯器自由組合 Project Sekai 角色立繪、台詞氣泡與背景素材，即時預覽並匯出高清貼紙。支援桌面端與移動端雙平台運行，並提供獨立的後端 API (Go) 與資源倉庫。",
        tags: ["Dart", "Flutter", "Cross-Platform"],
      },
      kanade: {
        name: "Kanade",
        short: "高效能 Android 音樂播放器",
        desc: "基於 Clean Architecture + MVI 架構打造的 Android 原生音樂播放器，採用 Jetpack Compose 與 Material 3 設計語言。內建 Media3 (ExoPlayer) 播放引擎，支援逐字同步歌詞 (LRC / TTML)、QuickJS 腳本擴充音源 (KSS) 與流光動態主題。",
        tags: ["Kotlin", "Jetpack Compose", "Media3"],
      },
      amiabot: {
        name: "AmiaBot",
        short: "以暁山瑞希為主題的 QQ 機器人",
        desc: "基於 OneBot (NapCat) 介面實現的 QQ 機器人框架，以 Project Sekai 角色暁山瑞希 (Akiyama Mizuki) 為主題人格。採用 TypeScript 開發，支援群聊互動、指令系統與多媒體內容分發。",
        tags: ["TypeScript", "OneBot", "NapCat"],
      },
    },
  },
  en: {
    orgTagline: "An open-source collective orbiting the Project Sekai ecosystem",
    orgMission:
      "We build tooling, clients, and automated services around the rhythm-game ecosystem. From a sticker generator to a music player and an OneBot-based chat bot — Parallel SEKAI connects passion through code.",
    heroTitlePrefix: "WELCOME TO",
    heroTitleMain: "Parallel SEKAI",
    heroTitleSuffix: "// OPEN SOURCE COLLECTIVE",
    heroSubtitle: "RHYTHM-GAME ECOSYSTEM · TOOLCHAINS · OPEN SOURCE",
    ctaPrimary: "Enter GitHub",
    ctaSecondary: "Browse Projects",
    sectionTag: "02 — PROJECTS",
    sectionLabel: "Core Projects",
    sectionDesc: "Three flagship repositories from the organization. All functionality is presented through descriptive text.",
    viewRepo: "View Repo ↗",
    footerLabel: "ORGANIZATION FOOTER",
    footerSlogan: "In a parallel world of code, play a different possibility.",
    footerNav: "Navigation",
    footerOrg: "Organization",
    footerHome: "Home",
    footerProjects: "Projects",
    footerGitHub: "GitHub",
    footerContact: "Contact",
    footerBuilt: "BUILT BY PARALLEL SEKAI",
    project: {
      pjskSticker: {
        name: "PJSK-Sticker",
        short: "A Project Sekai Sticker Maker",
        desc: "A cross-platform sticker creation tool built on Dart. Users can freely compose Project Sekai character sprites, speech bubbles and backgrounds via a visual editor — previewing and exporting high-resolution stickers in real time. Runs on both desktop and mobile, accompanied by a dedicated Go backend API and an asset repository.",
        tags: ["Dart", "Flutter", "Cross-Platform"],
      },
      kanade: {
        name: "Kanade",
        short: "High-performance Android Music Player",
        desc: "A native Android music player crafted with Clean Architecture + MVI, featuring Jetpack Compose and Material 3 design language. Powered by a Media3 (ExoPlayer) engine, it supports word-synced lyrics (LRC / TTML), QuickJS-scripted audio source extensions (KSS), and a flowing dynamic theme.",
        tags: ["Kotlin", "Jetpack Compose", "Media3"],
      },
      amiabot: {
        name: "AmiaBot",
        short: "A QQ Bot themed around Akiyama Mizuki",
        desc: "A QQ bot framework implemented on top of the OneBot (NapCat) interface, themed around Akiyama Mizuki from Project Sekai. Written in TypeScript, supporting group interaction, a command system and multimedia content distribution.",
        tags: ["TypeScript", "OneBot", "NapCat"],
      },
    },
  },
  ja: {
    orgTagline: "Project Sekai の世界観に根ざしたオープンソース技術集団",
    orgMission:
      "私たちはリズムゲーム生態系を中心に、ツール、クライアント、自動化サービスを開発しています。スタンプ生成器から音楽プレーヤー、OneBot ベースのチャットボットまで — Parallel SEKAI はコードを通じて情熱をつなぎます。",
    heroTitlePrefix: "WELCOME TO",
    heroTitleMain: "Parallel SEKAI",
    heroTitleSuffix: "// OPEN SOURCE COLLECTIVE",
    heroSubtitle: "リズムゲーム生態系 · ツールチェーン · オープンソース",
    ctaPrimary: "GitHub へ",
    ctaSecondary: "プロジェクト一覧",
    sectionTag: "02 — PROJECTS",
    sectionLabel: "主要プロジェクト",
    sectionDesc: "組織を代表する三つのリポジトリ。すべての機能は説明テキストとして提示されます。",
    viewRepo: "リポジトリ ↗",
    footerLabel: "ORGANIZATION FOOTER",
    footerSlogan: "コードの並行世界で、もう一つの可能性を奏でる。",
    footerNav: "ナビゲーション",
    footerOrg: "組織",
    footerHome: "ホーム",
    footerProjects: "プロジェクト",
    footerGitHub: "GitHub",
    footerContact: "連絡先",
    footerBuilt: "BUILT BY PARALLEL SEKAI",
    project: {
      pjskSticker: {
        name: "PJSK-Sticker",
        short: "Project Sekai スタンプメーカー",
        desc: "Dart で構築されたクロスプラットフォームのスタンプ作成ツール。ビジュアルエディタを通じて、Project Sekai のキャラクター立ち絵、セリフ吹き出し、背景素材を自由に組み合わせ、リアルタイムでプレビュー & 高解像度エクスポートが可能です。デスクトップ / モバイル両対応、Go バックエンド API とアセットリポジトリも用意。",
        tags: ["Dart", "Flutter", "Cross-Platform"],
      },
      kanade: {
        name: "Kanade",
        short: "高性能 Android 音楽プレーヤー",
        desc: "Clean Architecture + MVI で構築された Android ネイティブ音楽プレーヤー。Jetpack Compose と Material 3 デザインを採用し、Media3 (ExoPlayer) 再生エンジン、逐字同期歌詞 (LRC / TTML)、QuickJS スクリプトによる音源拡張 (KSS)、流動的なダイナミックテーマを搭載しています。",
        tags: ["Kotlin", "Jetpack Compose", "Media3"],
      },
      amiabot: {
        name: "AmiaBot",
        short: "暁山瑞希をテーマにした QQ ボット",
        desc: "OneBot (NapCat) インターフェース上に実装された QQ ボットフレームワーク。Project Sekai のキャラクター暁山瑞希をテーマペルソナに据え、TypeScript で開発。グループ交流、コマンドシステム、マルチメディア配信をサポートします。",
        tags: ["TypeScript", "OneBot", "NapCat"],
      },
    },
  },
} as const;

export type Translation = typeof translations["zh-CN"];

/** Detect browser language and map to a supported locale. */
export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  const lower = nav.toLowerCase();
  if (lower.startsWith("zh")) {
    if (lower.includes("tw") || lower.includes("hk") || lower.includes("hant")) return "zh-TW";
    return "zh-CN";
  }
  if (lower.startsWith("ja")) return "ja";
  return "en";
}

export const t = translations[detectLocale()];
export const locale = detectLocale();
