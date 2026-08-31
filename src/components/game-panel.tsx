import { useState } from "react";
import { Check, RotateCcw, Shield, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GAME, type Side } from "@/lib/content";
import { playCorrect, playWrong, playWin } from "@/lib/sound";
import { cn } from "@/lib/cn";

export function GamePanel({ onDone }: { onDone: (score: number) => void }) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<Side | null>(null);
  const [done, setDone] = useState(false);

  const item = GAME[i];
  const locked = picked !== null;

  function choose(side: Side) {
    if (locked || done) return;
    setPicked(side);
    const ok = side === item.answer;
    if (ok) {
      setScore((s) => s + 1);
      playCorrect();
    } else playWrong();
  }

  function next() {
    if (i + 1 >= GAME.length) {
      playWin();
      setDone(true);
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
  }

  function finish() {
    onDone(score);
  }

  function restart() {
    setI(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-5 text-center">
        <img
          src="/art/mascot.jpg"
          alt="Беркут радуется"
          className="size-28 rounded-full object-cover ring-4 ring-gold shadow-pop"
        />
        <h2 className="font-display text-3xl font-semibold text-ink text-balance">
          Игра окончена!
        </h2>
        <p className="text-lg text-muted">
          Верных ответов:{" "}
          <span className="font-display text-2xl text-sky tabular-nums">
            {score} / {GAME.length}
          </span>
        </p>
        <p className="max-w-md text-ink text-pretty">
          {score >= 8
            ? "Супер! Ты отлично отличаешь права и обязанности."
            : score >= 5
              ? "Хорошо! Ещё разок — и будешь чемпионом."
              : "Ничего, так и учатся. Давай попробуем ещё раз!"}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="gold" size="lg" onClick={restart}>
            <RotateCcw className="size-5" /> Ещё раз
          </Button>
          <Button size="lg" onClick={finish}>
            Дальше к квизу
          </Button>
        </div>
      </div>
    );
  }

  const ok = picked === item.answer;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-sky">
          Право или обязанность?
        </p>
        <p className="rounded-full bg-sky/10 px-3 py-1 text-sm font-semibold text-sky tabular-nums">
          {i + 1} / {GAME.length}
        </p>
      </div>

      <div className="rounded-[28px] bg-paper px-5 py-6 text-center shadow-card sm:px-8">
        <p className="font-display text-2xl font-semibold text-ink text-balance sm:text-3xl">
          {item.phrase}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ChoiceCard
          side="right"
          title="Право"
          caption="Руки вверх, как солнце"
          img="/art/game-right.jpg"
          alt="Девочка тянет руки к солнцу"
          selected={picked === "right"}
          correct={item.answer === "right"}
          locked={locked}
          onClick={() => choose("right")}
        />
        <ChoiceCard
          side="duty"
          title="Обязанность"
          caption="Руки на груди — обещание"
          img="/art/game-duty.jpg"
          alt="Мальчик скрестил руки на груди"
          selected={picked === "duty"}
          correct={item.answer === "duty"}
          locked={locked}
          onClick={() => choose("duty")}
        />
      </div>

      {picked && (
        <div
          className={cn(
            "flex flex-col gap-3 rounded-3xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between",
            ok ? "bg-sky/10" : "bg-coral/10",
          )}
        >
          <p className={cn("text-base font-semibold text-pretty", ok ? "text-sky-deep" : "text-coral")}>
            {ok ? "Верно! " : "Почти! "}
            {item.hint}
          </p>
          <Button variant={ok ? "primary" : "gold"} onClick={next} className="shrink-0">
            {i + 1 >= GAME.length ? "Результат" : "Следующая"}
          </Button>
        </div>
      )}
    </div>
  );
}

function ChoiceCard({
  side,
  title,
  caption,
  img,
  alt,
  selected,
  correct,
  locked,
  onClick,
}: {
  side: Side;
  title: string;
  caption: string;
  img: string;
  alt: string;
  selected: boolean;
  correct: boolean;
  locked: boolean;
  onClick: () => void;
}) {
  const show = locked && (selected || correct);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={locked}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border-4 bg-paper text-left shadow-card transition-[transform,border-color] duration-200 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky",
        !locked && "hover:-translate-y-0.5 active:scale-[0.98]",
        locked && !selected && !correct && "opacity-60",
        selected && correct && "border-sky",
        selected && !correct && "border-coral",
        locked && correct && !selected && "border-sky",
        !locked && "border-transparent",
      )}
    >
      <img src={img} alt={alt} className="aspect-square w-full object-cover sm:aspect-[4/3]" />
      <div className="flex items-center gap-3 p-4">
        <span
          className={cn(
            "grid size-11 place-items-center rounded-2xl",
            side === "right" ? "bg-gold text-ink" : "bg-sky text-cream",
          )}
        >
          {side === "right" ? <Sun className="size-6" /> : <Shield className="size-6" />}
        </span>
        <span>
          <span className="block font-display text-xl font-semibold text-ink">{title}</span>
          <span className="block text-sm text-muted">{caption}</span>
        </span>
        {show && selected && (
          <span
            className={cn(
              "ml-auto grid size-9 place-items-center rounded-full",
              correct ? "bg-sky text-cream" : "bg-coral text-cream",
            )}
          >
            <Check className="size-5" />
          </span>
        )}
      </div>
    </button>
  );
}
