import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { DocsPageData, ImageRenderer } from "@acid-info/docusaurus-og";

const interRegular = readFileSync(
  join(__dirname, "../static/fonts/Inter-Regular.ttf"),
);
const interBold = readFileSync(
  join(__dirname, "../static/fonts/Inter-Bold.ttf"),
);

// PNG version of tagoio-official-logo-white.svg (Satori cannot render SVG)
const logoPng = readFileSync(
  join(__dirname, "../static/img/tagoio-logo-white.png"),
);
const LOGO_DATA_URI = `data:image/png;base64,${logoPng.toString("base64")}`;

export const docsRenderer: ImageRenderer<DocsPageData> = (data) => [
  // biome-ignore lint/correctness/useJsxKeyInIterable: Satori renders JSX to an image, not a React tree
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      backgroundColor: "#121212",
      color: "#ebebeb",
      fontFamily: "Inter, sans-serif",
    }}
  >
    {/* Teal accent bar at the top */}
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "4px",
        backgroundColor: "#2cb1bc",
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
        <img src={LOGO_DATA_URI} alt="TagoIO" width={140} height={38} />
        <div
          style={{
            display: "flex",
            width: "1px",
            height: "24px",
            backgroundColor: "#333333",
          }}
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#a0a0a0",
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
            color: "#ebebeb",
          }}
        >
          {data.metadata.title}
        </span>
        {data.metadata.description && (
          <span
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: "#a0a0a0",
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
        <span style={{ fontSize: "16px", color: "#707070" }}>docs.tago.io</span>
        <span style={{ fontSize: "14px", color: "#2cb1bc" }}>
          IoT Cloud Platform
        </span>
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
