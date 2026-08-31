let ctx: AudioContext | null = null;
let enabled = true;

export function setSoundEnabled(on: boolean) {
  enabled = on;
}

function audio() {
  if (typeof window === "undefined" || !enabled) return null;
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export function unlockSound() {
  audio();
}

function tone(freq: number, start: number, dur: number, type: OscillatorType, gain = 0.08) {
  const ac = audio();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, ac.currentTime + start);
  g.gain.linearRampToValueAtTime(gain, ac.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + dur);
  osc.connect(g);
  g.connect(ac.destination);
  osc.start(ac.currentTime + start);
  osc.stop(ac.currentTime + start + dur + 0.02);
}

export function playCorrect() {
  tone(523.25, 0, 0.14, "triangle", 0.07);
  tone(659.25, 0.1, 0.16, "triangle", 0.07);
  tone(783.99, 0.2, 0.22, "triangle", 0.08);
}

export function playWrong() {
  tone(196, 0, 0.22, "sine", 0.06);
  tone(164.81, 0.08, 0.28, "sine", 0.05);
}

export function playTap() {
  tone(880, 0, 0.06, "triangle", 0.04);
}

export function playWin() {
  tone(523.25, 0, 0.12, "triangle", 0.07);
  tone(659.25, 0.1, 0.12, "triangle", 0.07);
  tone(783.99, 0.2, 0.12, "triangle", 0.07);
  tone(1046.5, 0.32, 0.28, "triangle", 0.08);
}
