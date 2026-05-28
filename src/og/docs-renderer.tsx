import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { DocsPageData, ImageRenderer } from "@acid-info/docusaurus-og";

const interRegular = readFileSync(join(__dirname, "../static/fonts/Inter-Regular.ttf"));
const interBold = readFileSync(join(__dirname, "../static/fonts/Inter-Bold.ttf"));

// PNG version of tagoio-official-logo-white.svg (Satori cannot render SVG)
const logoPng = readFileSync(join(__dirname, "../static/img/tagoio-logo-white.png"));
const LOGO_DATA_URI = `data:image/png;base64,${logoPng.toString("base64")}`;

// Default dark palette
const COLOR_BG = "#0A0A0A";
const COLOR_FG = "#FAFAFA";
const COLOR_MUTED_FG = "#A1A1A1";
const COLOR_ACCENT = "#28A6FA";
const COLOR_BORDER = "#262626";

export const docsRenderer: ImageRenderer<DocsPageData> = (data) => [
  // oxlint-disable-next-line react/jsx-key -- Satori renders JSX to an image, not a React tree
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      backgroundColor: COLOR_BG,
      color: COLOR_FG,
      fontFamily: "Inter, sans-serif",
    }}
  >
    {/* Primary accent bar at the top */}
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "4px",
        backgroundColor: COLOR_ACCENT,
      }}
    />

    {/* Main content area */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        padding: "48px 60px 40px",
      }}
    >
      {/* Logo + Documentation */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img src={LOGO_DATA_URI} alt="TagoIO" width={140} height={40} />
        <div
          style={{
            display: "flex",
            width: "1px",
            height: "24px",
            backgroundColor: COLOR_BORDER,
          }}
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: COLOR_MUTED_FG,
            letterSpacing: "0.02em",
          }}
        >
          Documentation
        </span>
      </div>

      {/* Title + description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "900px",
        }}
      >
        <span
          style={{
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: 1.15,
            color: COLOR_FG,
          }}
        >
          {data.metadata.title}
        </span>
        {data.metadata.description && (
          <span
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: COLOR_MUTED_FG,
              lineHeight: 1.4,
            }}
          >
            {data.metadata.description.length > 140
              ? `${data.metadata.description.slice(0, 140)}...`
              : data.metadata.description}
          </span>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "16px", color: COLOR_MUTED_FG }}>docs.tago.io</span>
        <span style={{ fontSize: "14px", color: COLOR_ACCENT }}>IoT Cloud Platform</span>
      </div>
    </div>
  </div>,
  {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: interRegular,
        weight: 400,
        style: "normal",
      },
      {
        name: "Inter",
        data: interBold,
        weight: 700,
        style: "normal",
      },
    ],
  },
];
