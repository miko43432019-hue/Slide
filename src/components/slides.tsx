import { useState } from "react";
import {
  BookOpen,
  Heart,
  Landmark,
  Leaf,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Sun,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Emblem, Flag } from "@/components/symbols";
import { GamePanel } from "@/components/game-panel";
import { QuizPanel } from "@/components/quiz-panel";
import {
  DUTIES,
  HISTORY,
  MASCOT,
  NEWS,
  RIGHTS,
  VALUES,
  type SlideId,
} from "@/lib/content";
import { cn } from "@/lib/cn";

export function MascotLine({ slide }: { slide: SlideId }) {
  return (
    <div className="flex items-end gap-3">
      <img
        src="/art/mascot.jpg"
        alt="Беркут — орёл-проводник"
        className="size-16 shrink-0 rounded-2xl object-cover ring-2 ring-gold sm:size-20"
      />
      <p className="relative rounded-3xl rounded-bl-md bg-paper px-4 py-3 text-sm text-ink shadow-card text-pretty sm:text-base">
        {MASCOT[slide]}
      </p>
    </div>
  );
}

export function TitleSlide({
  name,
  onName,
  onStart,
}: {
  name: string;
  onName: (v: string) => void;
  onStart: () => void;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="flex flex-col gap-5">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky">
          Классный час · 5 класс
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl lg:text-6xl">
          Главный закон Казахстана
        </h1>
        <p className="max-w-xl text-lg text-muted text-pretty">
          Конституция — как устав школы, только для всей страны. Сегодня узнаем,
          какие у нас права, какие обязанности, и сыграем в весёлую игру.
        </p>
        <label className="flex max-w-md flex-col gap-2">
          <span className="text-sm font-semibold text-ink">Как тебя зовут?</span>
          <input
            value={name}
            onChange={(e) => onName(e.target.value)}
            placeholder="Напиши имя — будет на дипломе"
            maxLength={24}
            className="h-12 rounded-2xl border border-line bg-paper px-4 text-base text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          />
        </label>
        <div className="flex flex-wrap gap-3">
          <Button variant="gold" size="xl" onClick={onStart}>
            Начать урок
          </Button>
        </div>
      </div>
      <div className="relative">
        <img
          src="/art/classroom.jpg"
          alt="Мультяшный класс в Казахстане"
          className="aspect-[16/10] w-full rounded-[32px] object-cover shadow-pop"
        />
        <img
          src="/art/mascot.jpg"
          alt=""
          className="absolute -bottom-4 -left-3 size-24 rounded-full object-cover ring-4 ring-cream shadow-pop sm:size-28"
        />
        <div className="absolute -right-2 -top-3 w-28 overflow-hidden rounded-xl shadow-card ring-2 ring-paper sm:w-36">
          <Flag className="block w-full" />
        </div>
      </div>
    </div>
  );
}

export function WhatSlide() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <img
        src="/art/kids-book.jpg"
        alt="Дети держат большую золотую книгу"
        className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-pop"
      />
      <div className="flex flex-col gap-4">
        <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
          Что такое Конституция?
        </h2>
        <p className="text-lg text-ink text-pretty">
          Представь школу. У неё есть устав: как себя вести, кто за что отвечает,
          какие у ребят права. У страны такой устав тоже есть. Он называется{" "}
          <strong>Конституция</strong>.
        </p>
        <ul className="grid gap-3">
          {[
            "По ней живут все: Президент, министры, мама, папа и ты.",
            "Это самый главный закон. Другие законы не могут ему противоречить.",
            "Её написал народ — на референдуме люди сказали «да».",
          ].map((t) => (
            <li
              key={t}
              className="rounded-2xl bg-paper px-4 py-3 text-ink shadow-card text-pretty"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function HistorySlide() {
  const [open, setOpen] = useState(4);
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
        Путешествие во времени
      </h2>
      <p className="text-muted text-pretty">Нажимай на год — откроется история.</p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {HISTORY.map((h, i) => (
          <button
            key={h.year}
            type="button"
            onClick={() => setOpen(i)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 font-display text-lg font-semibold tabular-nums transition-colors duration-150",
              open === i ? "bg-sky text-cream" : "bg-paper text-ink hover:bg-gold",
            )}
          >
            {h.year}
          </button>
        ))}
      </div>
      <div className="grid gap-5 rounded-[28px] bg-paper p-5 shadow-card sm:grid-cols-[1fr_220px] sm:p-7">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-sky">
            {HISTORY[open].year}
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-ink">
            {HISTORY[open].title}
          </h3>
          <p className="mt-3 text-lg text-ink text-pretty">{HISTORY[open].text}</p>
        </div>
        <img
          src="/art/teacher.jpg"
          alt="Учительница рассказывает историю"
          className="hidden h-48 w-full rounded-3xl object-cover sm:block"
        />
      </div>
    </div>
  );
}

export function NewsSlide() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
        Что изменилось в 2026 году
      </h2>
      <p className="text-muted text-pretty">
        15 марта на участки пришли больше 9 миллионов человек. Почти 9 из 10 сказали
        «да». 1 июля новый закон заработал.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {NEWS.map((n) => (
          <article key={n.title} className="rounded-[28px] bg-paper p-5 shadow-card">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-sky">
              {n.kicker}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{n.title}</h3>
            <p className="mt-2 text-ink text-pretty">{n.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

const RIGHT_ICONS = [Heart, BookOpen, Sun, Shield, Users, MessageCircle];

export function RightsSlide() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
        Твои права
      </h2>
      <img
        src="/art/rights.jpg"
        alt="Дети читают, играют, с семьёй и у врача"
        className="aspect-[16/8] w-full rounded-[28px] object-cover shadow-pop"
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {RIGHTS.map((r, i) => {
          const Icon = RIGHT_ICONS[i];
          return (
            <article key={r.title} className="rounded-3xl bg-paper p-4 shadow-card">
              <Icon className="size-6 text-sky" />
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{r.title}</h3>
              <p className="mt-1 text-sm text-muted text-pretty">{r.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

const DUTY_ICONS = [BookOpen, Landmark, Users, Leaf, Star, Shield];

export function DutiesSlide() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
        Твои обязанности
      </h2>
      <img
        src="/art/duties.jpg"
        alt="Дети берегут природу, уважают флаг и помогают друзьям"
        className="aspect-[16/8] w-full rounded-[28px] object-cover shadow-pop"
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {DUTIES.map((r, i) => {
          const Icon = DUTY_ICONS[i];
          return (
            <article key={r.title} className="rounded-3xl bg-paper p-4 shadow-card">
              <Icon className="size-6 text-gold-deep" />
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{r.title}</h3>
              <p className="mt-1 text-sm text-muted text-pretty">{r.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function SymbolsSlide() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
        Символы Казахстана
      </h2>
      <img
        src="/art/steppe.jpg"
        alt="Степь, юрта, беркут и солнце"
        className="aspect-[16/8] w-full rounded-[28px] object-cover shadow-pop"
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-[28px] bg-paper p-5 shadow-card">
          <div className="overflow-hidden rounded-2xl ring-1 ring-line">
            <Flag className="block w-full" />
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold text-ink">Флаг</h3>
          <p className="mt-1 text-sm text-muted text-pretty">
            Небесно-голубой — мир и чистое небо. Солнце с лучами-зёрнами — достаток.
            Золотой беркут — свобода. Слева — национальный орнамент.
          </p>
        </article>
        <article className="rounded-[28px] bg-paper p-5 shadow-card">
          <div className="mx-auto grid size-36 place-items-center">
            <Emblem className="h-full w-full" />
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold text-ink">Герб</h3>
          <p className="mt-1 text-sm text-muted text-pretty">
            В центре шанырак — купол юрты. По бокам крылатые кони-тұлпары. Сверху
            звезда. Цвета — золото и голубой.
          </p>
        </article>
        <article className="rounded-[28px] bg-paper p-5 shadow-card">
          <div className="grid h-24 place-items-center rounded-2xl bg-sky/10 font-display text-2xl font-semibold text-sky">
            Менің Қазақстаным
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold text-ink">Гимн</h3>
          <p className="mt-1 text-sm text-muted text-pretty">
            «Мой Казахстан». Музыка Шамши Калдаякова, слова Жумекена Нажимеденова и
            Нурсултана Назарбаева. Звучит с января 2006 года.
          </p>
        </article>
      </div>
    </div>
  );
}

export function ValuesSlide() {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start">
      <div className="flex flex-col gap-4">
        <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
          Три слова силы
        </h2>
        <div className="grid gap-3">
          {VALUES.map((v, i) => (
            <button
              key={v.kk}
              type="button"
              onClick={() => setOpen(i)}
              className={cn(
                "rounded-[28px] p-5 text-left shadow-card transition-colors duration-150",
                open === i ? "bg-sky text-cream" : "bg-paper text-ink hover:bg-gold/40",
              )}
            >
              <p className="font-display text-2xl font-semibold">{v.kk}</p>
              <p className={cn("text-sm", open === i ? "text-cream/80" : "text-muted")}>{v.ru}</p>
              {open === i && <p className="mt-2 text-pretty">{v.text}</p>}
            </button>
          ))}
        </div>
      </div>
      <img
        src="/art/family.jpg"
        alt="Семья читает главный закон вместе"
        className="hidden aspect-[4/5] w-full rounded-[32px] object-cover shadow-pop lg:block"
      />
    </div>
  );
}

export function GameSlide({ onScore }: { onScore: (n: number) => void }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
          Игра для класса
        </h2>
        <p className="mt-2 text-muted text-pretty">
          Можно играть сидя за партами — или встать: руки вверх как солнце, если это
          право, руки на груди, если обязанность. Потом нажмите ответ на экране.
        </p>
      </div>
      <GamePanel onDone={onScore} />
    </div>
  );
}

export function QuizSlide({ onScore }: { onScore: (n: number) => void }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
        Квиз на закрепление
      </h2>
      <QuizPanel onDone={onScore} />
    </div>
  );
}

export function DiplomaSlide({
  name,
  game,
  quiz,
  onRestart,
}: {
  name: string;
  game: number;
  quiz: number;
  onRestart: () => void;
}) {
  const who = name.trim() || "ученик 5 класса";
  const total = game + quiz;
  const max = 10 + 8;
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
      <div className="w-full rounded-[32px] border-4 border-gold bg-paper p-5 shadow-pop sm:p-8">
        <Flag className="mx-auto h-12 w-24 rounded-md object-cover sm:h-14 sm:w-28" />
        <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-sky">
          Республика Казахстан
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
          Диплом знатока Конституции
        </h2>
        <p className="mt-4 text-lg text-muted">Награждается</p>
        <p className="font-display text-3xl font-semibold text-sky">{who}</p>
        <p className="mt-3 text-ink text-pretty">
          за честный ум, добрые ответы и любовь к главному закону страны.
        </p>
        <div className="mt-5 flex justify-center gap-6">
          <Stat label="Игра" value={`${game}/10`} />
          <Stat label="Квиз" value={`${quiz}/8`} />
          <Stat label="Звёзды" value={`${total}/${max}`} />
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Emblem className="size-16" />
          <Sparkles className="size-6 text-gold" />
          <img src="/art/mascot.jpg" alt="" className="size-16 rounded-full object-cover" />
        </div>
        <Button variant="gold" size="lg" onClick={onRestart} className="mt-6">
          Пройти урок снова
        </Button>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
      <p className="font-display text-xl font-semibold text-ink tabular-nums">{value}</p>
    </div>
  );
}
