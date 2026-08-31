import { useState } from "react";
import { RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QUIZ } from "@/lib/content";
import { playCorrect, playWrong, playWin } from "@/lib/sound";
import { cn } from "@/lib/cn";

export function QuizPanel({ onDone }: { onDone: (score: number) => void }) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const item = QUIZ[i];

  function choose(n: number) {
    if (picked !== null || done) return;
    setPicked(n);
    if (n === item.correct) {
      setScore((s) => s + 1);
      playCorrect();
    } else playWrong();
  }

  function next() {
    if (i + 1 >= QUIZ.length) {
      playWin();
      setDone(true);
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
  }

  function restart() {
    setI(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  }

  if (done) {
    const stars = score;
    return (
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex gap-1">
          {Array.from({ length: QUIZ.length }).map((_, n) => (
            <Star
              key={n}
              className={cn("size-7", n < stars ? "fill-gold text-gold" : "text-line")}
            />
          ))}
        </div>
        <h2 className="font-display text-3xl font-semibold text-ink text-balance">
          {score >= 7 ? "Знаток Конституции!" : score >= 5 ? "Хороший результат!" : "Ещё чуть-чуть!"}
        </h2>
        <p className="text-lg text-muted">
          <span className="font-display text-2xl text-sky tabular-nums">
            {score} / {QUIZ.length}
          </span>{" "}
          верных ответов
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="cream" size="lg" onClick={restart}>
            <RotateCcw className="size-5" /> Ещё раз
          </Button>
          <Button variant="gold" size="lg" onClick={() => onDone(score)}>
            Получить диплом
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-sky">
          Квиз
        </p>
        <p className="rounded-full bg-gold/30 px-3 py-1 text-sm font-semibold text-ink tabular-nums">
          {i + 1} / {QUIZ.length}
        </p>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-gold transition-[width] duration-300 ease-out"
          style={{ width: `${((i + (picked !== null ? 1 : 0)) / QUIZ.length) * 100}%` }}
        />
      </div>

      <h2 className="font-display text-2xl font-semibold text-ink text-balance sm:text-3xl">
        {item.q}
      </h2>

      <div className="grid gap-3">
        {item.options.map((opt, n) => {
          const isPicked = picked === n;
          const isCorrect = n === item.correct;
          const show = picked !== null;
          return (
            <button
              key={opt}
              type="button"
              disabled={picked !== null}
              onClick={() => choose(n)}
              className={cn(
                "min-h-14 rounded-2xl border-2 px-4 py-3 text-left font-display text-lg font-semibold text-ink transition-[transform,background-color,border-color] duration-150 ease-out",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky",
                !show && "border-line bg-paper hover:-translate-y-0.5 hover:border-sky active:scale-[0.98]",
                show && isCorrect && "border-sky bg-sky text-cream",
                show && isPicked && !isCorrect && "border-coral bg-coral text-cream",
                show && !isPicked && !isCorrect && "border-line bg-paper opacity-50",
              )}
            >
              <span className="mr-3 inline-grid size-8 place-items-center rounded-full bg-cream/30 text-sm">
                {["А", "Б", "В"][n]}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="flex flex-col gap-3 rounded-3xl bg-cream px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink text-pretty">{item.why}</p>
          <Button onClick={next} className="shrink-0">
            {i + 1 >= QUIZ.length ? "Результат" : "Следующий вопрос"}
          </Button>
        </div>
      )}
    </div>
  );
}
