import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, List, Maximize, Minimize, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DiplomaSlide,
  DutiesSlide,
  GameSlide,
  HistorySlide,
  MascotLine,
  NewsSlide,
  QuizSlide,
  RightsSlide,
  SymbolsSlide,
  TitleSlide,
  ValuesSlide,
  WhatSlide,
} from "@/components/slides";
import { SLIDES, type SlideId } from "@/lib/content";
import { setSoundEnabled, unlockSound } from "@/lib/sound";
import { cn } from "@/lib/cn";

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [gameScore, setGameScore] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [menu, setMenu] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [full, setFull] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const slide = SLIDES[index];
  const last = index === SLIDES.length - 1;

  const go = useCallback((n: number) => {
    setIndex(Math.max(0, Math.min(SLIDES.length - 1, n)));
    setMenu(false);
  }, []);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
      if ((e.target as HTMLElement | null)?.closest("button, a, [role='button']")) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "f" || e.key === "F") {
        toggleFull();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    function onFs() {
      setFull(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  function toggleFull() {
    const el = rootRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen();
  }

  function armSound() {
    if (soundOn) unlockSound();
  }

  function onTouchStart(e: TouchEvent) {
    touchX.current = e.changedTouches[0]?.clientX ?? null;
  }
  function onTouchEnd(e: TouchEvent) {
    const start = touchX.current;
    touchX.current = null;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (dx < -60) next();
    if (dx > 60) prev();
  }

  return (
    <div
      ref={rootRef}
      className="relative flex min-h-dvh flex-col bg-cream text-ink"
      onPointerDown={armSound}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <header className="flex items-center gap-2 bg-sky px-3 py-2 text-cream sm:px-5">
        <img src="/art/flag.svg" alt="" className="h-6 w-12 rounded-sm object-cover ring-1 ring-cream/30" />
        <p className="hidden font-display text-sm font-semibold sm:block">Басты заң</p>
        <nav className="mx-auto flex max-w-full items-center gap-1 overflow-x-auto px-1" aria-label="Слайды">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={s.label}
              aria-current={i === index}
              onClick={() => go(i)}
              className={cn(
                "size-2.5 shrink-0 rounded-full transition-transform duration-150 sm:size-3",
                i === index ? "scale-125 bg-gold" : i < index ? "bg-cream" : "bg-cream/35",
              )}
            />
          ))}
        </nav>
        <p className="hidden text-xs font-semibold tabular-nums sm:block">
          {index + 1}/{SLIDES.length}
        </p>
        <button
          type="button"
          aria-label={soundOn ? "Выключить звук" : "Включить звук"}
          onClick={() => {
            setSoundOn((v) => {
              setSoundEnabled(!v);
              return !v;
            });
          }}
          className="grid size-11 place-items-center rounded-xl hover:bg-sky-deep"
        >
          {soundOn ? <Volume2 className="size-5" /> : <VolumeX className="size-5" />}
        </button>
        <button
          type="button"
          aria-label="Содержание"
          onClick={() => setMenu((v) => !v)}
          className="grid size-11 place-items-center rounded-xl hover:bg-sky-deep"
        >
          <List className="size-5" />
        </button>
        <button
          type="button"
          aria-label={full ? "Обычный экран" : "На весь экран"}
          onClick={toggleFull}
          className="grid size-11 place-items-center rounded-xl hover:bg-sky-deep"
        >
          {full ? <Minimize className="size-5" /> : <Maximize className="size-5" />}
        </button>
      </header>

      {menu && (
        <div className="absolute inset-x-0 top-14 z-20 mx-3 rounded-3xl bg-paper p-3 shadow-pop sm:right-4 sm:left-auto sm:w-72">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              className={cn(
                "flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left font-display text-sm font-semibold",
                i === index ? "bg-sky text-cream" : "text-ink hover:bg-cream",
              )}
            >
              <span>{s.label}</span>
              <span className="tabular-nums opacity-70">{i + 1}</span>
            </button>
          ))}
        </div>
      )}

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 px-4 py-5 sm:px-6 sm:py-7">
        {slide.id !== "title" && slide.id !== "diploma" && <MascotLine slide={slide.id} />}
        <div key={slide.id} className="slide-enter flex-1">
          <SlideBody
            id={slide.id}
            name={name}
            onName={setName}
            onStart={next}
            game={gameScore}
            quiz={quizScore}
            onGame={(n) => {
              setGameScore(n);
              go(SLIDES.findIndex((s) => s.id === "quiz"));
            }}
            onQuiz={(n) => {
              setQuizScore(n);
              go(SLIDES.length - 1);
            }}
            onRestart={() => {
              setGameScore(0);
              setQuizScore(0);
              go(0);
            }}
          />
        </div>
      </main>

      <footer className="flex items-center justify-between gap-3 bg-sky px-3 py-3 text-cream sm:px-5">
        <Button variant="ghost" size="sm" onClick={prev} disabled={index === 0} className="min-w-24">
          <ChevronLeft className="size-5" /> Назад
        </Button>
        <p className="font-display text-sm font-semibold sm:hidden">
          {index + 1} / {SLIDES.length}
        </p>
        <Button
          variant="gold"
          size="sm"
          onClick={next}
          disabled={last}
          className="min-w-28 text-ink"
        >
          Дальше <ChevronRight className="size-5" />
        </Button>
      </footer>
    </div>
  );
}

function SlideBody({
  id,
  name,
  onName,
  onStart,
  game,
  quiz,
  onGame,
  onQuiz,
  onRestart,
}: {
  id: SlideId;
  name: string;
  onName: (v: string) => void;
  onStart: () => void;
  game: number;
  quiz: number;
  onGame: (n: number) => void;
  onQuiz: (n: number) => void;
  onRestart: () => void;
}) {
  switch (id) {
    case "title":
      return <TitleSlide name={name} onName={onName} onStart={onStart} />;
    case "what":
      return <WhatSlide />;
    case "history":
      return <HistorySlide />;
    case "news":
      return <NewsSlide />;
    case "rights":
      return <RightsSlide />;
    case "duties":
      return <DutiesSlide />;
    case "symbols":
      return <SymbolsSlide />;
    case "values":
      return <ValuesSlide />;
    case "game":
      return <GameSlide onScore={onGame} />;
    case "quiz":
      return <QuizSlide onScore={onQuiz} />;
    case "diploma":
      return <DiplomaSlide name={name} game={game} quiz={quiz} onRestart={onRestart} />;
  }
}
