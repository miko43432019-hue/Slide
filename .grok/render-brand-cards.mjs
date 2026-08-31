import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";

const classroom = readFileSync("/workspace/public/art/classroom.jpg").toString("base64");
const mascot = readFileSync("/workspace/public/art/mascot.jpg").toString("base64");
const sans = readFileSync("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf").toString("base64");
const serif = readFileSync("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf").toString("base64");

const fontFace = `
@font-face {
  font-family: "TitleSans";
  src: url(data:font/ttf;base64,${sans}) format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "TitleSerif";
  src: url(data:font/ttf;base64,${serif}) format("truetype");
  font-weight: 700;
}
`;

const ogHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8" />
<style>
${fontFace}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; background: #16324A; }
.stage { position: relative; width: 1200px; height: 630px; }
.bg {
  position: absolute; inset: 0;
  background: url(data:image/jpeg;base64,${classroom}) center 42% / cover no-repeat;
}
.vignette {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 65% at 50% 48%, rgba(22,50,74,0.10) 0%, rgba(22,50,74,0.52) 100%),
    linear-gradient(180deg, rgba(0,163,200,0.16) 0%, transparent 26%, transparent 74%, rgba(22,50,74,0.32) 100%);
}
.frame {
  position: absolute; inset: 18px;
  border: 4px solid #F5C518;
  border-radius: 18px;
  box-shadow: inset 0 0 0 3px #16324A;
  pointer-events: none;
}
.lockup {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  text-align: center;
}
.plaque {
  background: linear-gradient(180deg, rgba(255,248,232,0.97) 0%, rgba(255,236,196,0.95) 100%);
  border: 5px solid #F5C518;
  border-radius: 28px;
  padding: 26px 40px 22px;
  box-shadow: 0 0 0 4px #16324A, 0 16px 36px rgba(22,50,74,0.45);
}
.sun {
  width: 34px; height: 34px; margin: 0 auto 8px;
  background: #F5C518; border-radius: 50%;
  box-shadow: 0 0 0 4px #FFF8E8, 0 0 0 6px #F5C518;
}
h1 {
  font-family: "TitleSans", sans-serif;
  font-weight: 700;
  font-size: 78px;
  line-height: 0.98;
  color: #16324A;
  letter-spacing: 0.01em;
}
h1 span { display: block; }
h1 .gold { color: #00A3C8; }
.rule {
  width: 220px; height: 4px; margin: 12px auto 10px;
  background: linear-gradient(90deg, transparent, #F5C518 15%, #F5C518 85%, transparent);
  border-radius: 2px;
}
.tag {
  font-family: "TitleSerif", serif;
  font-size: 22px;
  color: #16324A;
  letter-spacing: 0.08em;
}
</style>
</head>
<body>
  <div class="stage">
    <div class="bg"></div>
    <div class="vignette"></div>
    <div class="frame"></div>
    <div class="lockup">
      <div class="plaque">
        <div class="sun"></div>
        <h1>
          <span>Главный</span>
          <span class="gold">закон</span>
        </h1>
        <div class="rule"></div>
        <div class="tag">Конституция Казахстана</div>
      </div>
    </div>
  </div>
</body>
</html>`;

const bannerHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8" />
<style>
${fontFace}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1200px; height: 264px; overflow: hidden; background: #00A3C8; }
.stage { position: relative; width: 1200px; height: 264px; }
.bg {
  position: absolute; inset: 0;
  background: url(data:image/jpeg;base64,${classroom}) center 38% / cover no-repeat;
}
.wash {
  position: absolute; inset: 0;
  background: linear-gradient(90deg,
    rgba(0,163,200,0.96) 0%,
    rgba(0,163,200,0.92) 28%,
    rgba(0,163,200,0.55) 48%,
    rgba(22,50,74,0.12) 70%,
    rgba(22,50,74,0.08) 100%);
}
.lockup {
  position: absolute;
  left: 40px;
  top: 28px;
  width: 520px;
}
.kicker {
  font-family: "TitleSerif", serif;
  font-size: 15px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #FFF8E8;
  margin-bottom: 6px;
}
h1 {
  font-family: "TitleSans", sans-serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 1.02;
  color: #FFF8E8;
  text-shadow: 0 2px 0 #16324A, 0 4px 10px rgba(22,50,74,0.35);
}
h1 em { font-style: normal; color: #F5C518; }
.rule {
  width: 160px; height: 4px; margin-top: 10px;
  background: #F5C518; border-radius: 2px;
}
.mascot {
  position: absolute;
  right: 36px;
  top: 18px;
  width: 228px; height: 228px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 42%;
  border: 5px solid #F5C518;
  box-shadow: 0 0 0 3px #16324A, 0 8px 18px rgba(22,50,74,0.4);
}
</style>
</head>
<body>
  <div class="stage">
    <div class="bg"></div>
    <div class="wash"></div>
    <div class="lockup">
      <div class="kicker">викторина</div>
      <h1>Главный <em>закон</em></h1>
      <div class="rule"></div>
    </div>
    <img class="mascot" src="data:image/jpeg;base64,${mascot}" alt="" />
  </div>
</body>
</html>`;

mkdirSync("/workspace/.grok", { recursive: true });

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

async function shot(html, width, height, outPath) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await page.screenshot({ path: outPath, type: "png", clip: { x: 0, y: 0, width, height } });
  await page.close();
  console.log("wrote", outPath);
}

await shot(ogHtml, 1200, 630, "/workspace/.grok/og-raw.png");
await shot(bannerHtml, 1200, 264, "/workspace/.grok/x-banner-raw.png");
await browser.close();
