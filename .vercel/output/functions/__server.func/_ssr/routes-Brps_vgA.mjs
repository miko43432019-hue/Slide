import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight, a as Sun, b as BookOpen, c as Shield, d as MessageCircle, f as Maximize, g as Heart, h as Landmark, l as RotateCcw, m as Leaf, n as Volume2, o as Star, p as List, r as Users, s as Sparkles, t as VolumeX, u as Minimize, v as ChevronLeft, y as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Brps_vgA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-display font-semibold tracking-tight text-balance select-none transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky", {
	variants: {
		variant: {
			primary: "bg-sky text-cream shadow-[0_4px_0_0_var(--color-sky-deep)] hover:bg-sky-deep",
			gold: "bg-gold text-ink shadow-[0_4px_0_0_var(--color-gold-deep)] hover:brightness-105",
			cream: "bg-paper text-ink border border-line shadow-[0_3px_0_0_var(--color-line)] hover:bg-cream",
			ghost: "bg-transparent text-cream hover:bg-sky-deep/40",
			coral: "bg-coral text-cream shadow-[0_4px_0_0_color-mix(in_oklab,var(--color-coral)_70%,black)]"
		},
		size: {
			sm: "h-11 px-4 text-sm rounded-xl",
			md: "h-12 px-5 text-base rounded-2xl",
			lg: "min-h-14 px-6 py-3 text-lg rounded-2xl",
			xl: "min-h-16 px-7 py-4 text-xl rounded-3xl"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Flag({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/art/flag.svg",
		alt: "Флаг Республики Казахстан",
		className,
		draggable: false
	});
}
function Emblem({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/art/emblem.svg",
		alt: "Герб Республики Казахстан",
		className,
		draggable: false
	});
}
var SLIDES = [
	{
		id: "title",
		label: "Старт"
	},
	{
		id: "what",
		label: "Что это?"
	},
	{
		id: "history",
		label: "История"
	},
	{
		id: "news",
		label: "Новое"
	},
	{
		id: "rights",
		label: "Права"
	},
	{
		id: "duties",
		label: "Обязанности"
	},
	{
		id: "symbols",
		label: "Символы"
	},
	{
		id: "values",
		label: "Адал азамат"
	},
	{
		id: "game",
		label: "Игра"
	},
	{
		id: "quiz",
		label: "Квиз"
	},
	{
		id: "diploma",
		label: "Диплом"
	}
];
var MASCOT = {
	title: "Сәлем! Я Беркут. Покажу тебе главный закон нашей страны!",
	what: "Конституция — как устав школы, только для всего Казахстана.",
	history: "У нашего закона длинная история. Нажимай на даты!",
	news: "В этом году страна обновила правила. Смотри, что нового!",
	rights: "Это твоё. Эти права есть у каждого ребёнка в Казахстане.",
	duties: "А это наш обещание стране. Права и обязанности идут вместе.",
	symbols: "Флаг, герб и гимн — лицо Казахстана. Давай рассмотрим!",
	values: "Три слова, которые делают нас сильными. Жми на карточки!",
	game: "Руки вверх как солнце — право. Руки на груди — обязанность!",
	quiz: "Проверим, какой ты знаток Конституции. Удачи!",
	diploma: "Сен жарайсың! Ты настоящий адал азамат."
};
var HISTORY = [
	{
		year: "1991",
		title: "Независимость",
		text: "16 декабря Казахстан стал независимым государством."
	},
	{
		year: "1993",
		title: "Первый закон",
		text: "Появилась первая Конституция независимого Казахстана."
	},
	{
		year: "1995",
		title: "30 августа",
		text: "На референдуме приняли Конституцию, которая жила больше 30 лет."
	},
	{
		year: "2022",
		title: "Поправки",
		text: "Страна уже меняла правила — чтобы власть была справедливее."
	},
	{
		year: "2026",
		title: "Новая глава",
		text: "15 марта народ сказал «да». 1 июля заработал обновлённый главный закон."
	}
];
var NEWS = [
	{
		kicker: "Парламент",
		title: "Құрылтай",
		text: "Вместо двух палат теперь один орган — 145 депутатов. Как один большой совет страны."
	},
	{
		kicker: "Народ",
		title: "Халық Кеңесі",
		text: "Народный совет: обычные люди могут советовать, предлагать законы и просить референдум."
	},
	{
		kicker: "Помощник",
		title: "Вице-президент",
		text: "У Президента снова есть помощник — вице-президент."
	},
	{
		kicker: "Праздник",
		title: "15 марта",
		text: "День Конституции теперь в день референдума. В 2026 году праздничного выходного ещё не было."
	}
];
var RIGHTS = [
	{
		title: "Жизнь и имя",
		text: "У тебя есть имя, гражданство и право жить в своей стране."
	},
	{
		title: "Учёба",
		text: "Школа — твоё право. Знания нельзя отнять."
	},
	{
		title: "Игра и отдых",
		text: "После уроков можно играть, гулять и отдыхать."
	},
	{
		title: "Здоровье",
		text: "Если заболел — тебе помогут врачи."
	},
	{
		title: "Семья",
		text: "Тебя должны любить, кормить и защищать."
	},
	{
		title: "Своё мнение",
		text: "Ты можешь говорить, что думаешь — вежливо и честно."
	}
];
var DUTIES = [
	{
		title: "Соблюдать законы",
		text: "Правила есть у всех: и у детей, и у взрослых, и у Президента."
	},
	{
		title: "Уважать символы",
		text: "Флаг, герб и гимн — это лицо страны. Их не обижают."
	},
	{
		title: "Уважать людей",
		text: "Слушаем других, не обижаем, помогаем одноклассникам."
	},
	{
		title: "Беречь природу",
		text: "Степь, реки, горы и животные — наш общий дом."
	},
	{
		title: "Учиться",
		text: "Хорошо учиться — тоже служение стране."
	},
	{
		title: "Защищать Родину",
		text: "Когда вырастешь, сможешь защищать Казахстан."
	}
];
var VALUES = [
	{
		kk: "Адал азамат",
		ru: "Честный гражданин",
		text: "Говорит правду, держит слово, не обманывает. Как хороший друг."
	},
	{
		kk: "Зерделі ұлт",
		ru: "Мудрая нация",
		text: "Любит учиться, знает историю, ценит язык и культуру."
	},
	{
		kk: "Жауапты қоғам",
		ru: "Ответственное общество",
		text: "Заботится о людях, о природе и о будущем страны."
	}
];
var GAME = [
	{
		phrase: "Отдыхать и играть после школы",
		answer: "right",
		hint: "Это твоё право — детство должно быть радостным."
	},
	{
		phrase: "Уважать флаг, герб и гимн",
		answer: "duty",
		hint: "Символы страны мы бережём все вместе."
	},
	{
		phrase: "Получать помощь врача, если заболел",
		answer: "right",
		hint: "Здоровье защищает главный закон."
	},
	{
		phrase: "Не мусорить и беречь природу",
		answer: "duty",
		hint: "Степь и реки — наш общий дом."
	},
	{
		phrase: "Иметь имя и гражданство",
		answer: "right",
		hint: "Каждый ребёнок — гражданин своей страны."
	},
	{
		phrase: "Соблюдать правила дороги",
		answer: "duty",
		hint: "Законы пишут, чтобы все были в безопасности."
	},
	{
		phrase: "Жить в семье и получать заботу",
		answer: "right",
		hint: "Семья — первая защита ребёнка."
	},
	{
		phrase: "Уважать старших и одноклассников",
		answer: "duty",
		hint: "Уважение — это наша обязанность каждый день."
	},
	{
		phrase: "Высказывать своё мнение",
		answer: "right",
		hint: "Говори честно и вежливо — это тоже право."
	},
	{
		phrase: "Говорить правду и быть адал",
		answer: "duty",
		hint: "Честность — обязанность настоящего гражданина."
	}
];
var QUIZ = [
	{
		q: "Конституция — это…",
		options: [
			"Главный закон страны",
			"Школьный дневник",
			"Карта гор"
		],
		correct: 0,
		why: "По ней живут все: и Президент, и дети."
	},
	{
		q: "Когда народ сказал «да» новой Конституции?",
		options: [
			"1 января 2025",
			"15 марта 2026",
			"30 августа 1991"
		],
		correct: 1,
		why: "15 марта 2026 года прошёл общенациональный референдум."
	},
	{
		q: "Как теперь называется парламент?",
		options: [
			"Сенат",
			"Мажилис",
			"Құрылтай"
		],
		correct: 2,
		why: "Две палаты заменил один Құрылтай из 145 депутатов."
	},
	{
		q: "Какой цвет у флага Казахстана?",
		options: [
			"Красный",
			"Небесно-голубой",
			"Зелёный"
		],
		correct: 1,
		why: "Голубое небо — мир, спокойствие и единство."
	},
	{
		q: "Что в центре герба?",
		options: [
			"Шанырак юрты",
			"Гора",
			"Книга"
		],
		correct: 0,
		why: "Шанырак — купол юрты, дом и единство семьи."
	},
	{
		q: "Как называется гимн?",
		options: [
			"Атамекен",
			"Менің Қазақстаным",
			"Елім-ай"
		],
		correct: 1,
		why: "«Мой Казахстан» звучит с 2006 года."
	},
	{
		q: "Кто помогает Президенту?",
		options: [
			"Директор школы",
			"Вице-президент",
			"Капитан команды"
		],
		correct: 1,
		why: "Должность вице-президента снова есть в Конституции."
	},
	{
		q: "«Адал азамат» значит…",
		options: [
			"Быстрый бегун",
			"Честный гражданин",
			"Громкий певец"
		],
		correct: 1,
		why: "Адал — честный. Такой гражданин держит слово."
	}
];
var ctx = null;
var enabled = true;
function setSoundEnabled(on) {
	enabled = on;
}
function audio() {
	if (typeof window === "undefined" || !enabled) return null;
	if (!ctx) ctx = new AudioContext();
	if (ctx.state === "suspended") ctx.resume();
	return ctx;
}
function unlockSound() {
	audio();
}
function tone(freq, start, dur, type, gain = .08) {
	const ac = audio();
	if (!ac) return;
	const osc = ac.createOscillator();
	const g = ac.createGain();
	osc.type = type;
	osc.frequency.value = freq;
	g.gain.setValueAtTime(0, ac.currentTime + start);
	g.gain.linearRampToValueAtTime(gain, ac.currentTime + start + .02);
	g.gain.exponentialRampToValueAtTime(1e-4, ac.currentTime + start + dur);
	osc.connect(g);
	g.connect(ac.destination);
	osc.start(ac.currentTime + start);
	osc.stop(ac.currentTime + start + dur + .02);
}
function playCorrect() {
	tone(523.25, 0, .14, "triangle", .07);
	tone(659.25, .1, .16, "triangle", .07);
	tone(783.99, .2, .22, "triangle", .08);
}
function playWrong() {
	tone(196, 0, .22, "sine", .06);
	tone(164.81, .08, .28, "sine", .05);
}
function playWin() {
	tone(523.25, 0, .12, "triangle", .07);
	tone(659.25, .1, .12, "triangle", .07);
	tone(783.99, .2, .12, "triangle", .07);
	tone(1046.5, .32, .28, "triangle", .08);
}
function GamePanel({ onDone }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	const item = GAME[i];
	const locked = picked !== null;
	function choose(side) {
		if (locked || done) return;
		setPicked(side);
		if (side === item.answer) {
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
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/mascot.jpg",
				alt: "Беркут радуется",
				className: "size-28 rounded-full object-cover ring-4 ring-gold shadow-pop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold text-ink text-balance",
				children: "Игра окончена!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-lg text-muted",
				children: [
					"Верных ответов:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl text-sky tabular-nums",
						children: [
							score,
							" / ",
							GAME.length
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-ink text-pretty",
				children: score >= 8 ? "Супер! Ты отлично отличаешь права и обязанности." : score >= 5 ? "Хорошо! Ещё разок — и будешь чемпионом." : "Ничего, так и учатся. Давай попробуем ещё раз!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "gold",
					size: "lg",
					onClick: restart,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-5" }), " Ещё раз"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					onClick: finish,
					children: "Дальше к квизу"
				})]
			})
		]
	});
	const ok = picked === item.answer;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold uppercase tracking-wider text-sky",
					children: "Право или обязанность?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-full bg-sky/10 px-3 py-1 text-sm font-semibold text-sky tabular-nums",
					children: [
						i + 1,
						" / ",
						GAME.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[28px] bg-paper px-5 py-6 text-center shadow-card sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-semibold text-ink text-balance sm:text-3xl",
					children: item.phrase
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
					side: "right",
					title: "Право",
					caption: "Руки вверх, как солнце",
					img: "/art/game-right.jpg",
					alt: "Девочка тянет руки к солнцу",
					selected: picked === "right",
					correct: item.answer === "right",
					locked,
					onClick: () => choose("right")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceCard, {
					side: "duty",
					title: "Обязанность",
					caption: "Руки на груди — обещание",
					img: "/art/game-duty.jpg",
					alt: "Мальчик скрестил руки на груди",
					selected: picked === "duty",
					correct: item.answer === "duty",
					locked,
					onClick: () => choose("duty")
				})]
			}),
			picked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex flex-col gap-3 rounded-3xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between", ok ? "bg-sky/10" : "bg-coral/10"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("text-base font-semibold text-pretty", ok ? "text-sky-deep" : "text-coral"),
					children: [ok ? "Верно! " : "Почти! ", item.hint]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: ok ? "primary" : "gold",
					onClick: next,
					className: "shrink-0",
					children: i + 1 >= GAME.length ? "Результат" : "Следующая"
				})]
			})
		]
	});
}
function ChoiceCard({ side, title, caption, img, alt, selected, correct, locked, onClick }) {
	const show = locked && (selected || correct);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled: locked,
		className: cn("group relative overflow-hidden rounded-[28px] border-4 bg-paper text-left shadow-card transition-[transform,border-color] duration-200 ease-out", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky", !locked && "hover:-translate-y-0.5 active:scale-[0.98]", locked && !selected && !correct && "opacity-60", selected && correct && "border-sky", selected && !correct && "border-coral", locked && correct && !selected && "border-sky", !locked && "border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: img,
			alt,
			className: "aspect-square w-full object-cover sm:aspect-[4/3]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid size-11 place-items-center rounded-2xl", side === "right" ? "bg-gold text-ink" : "bg-sky text-cream"),
					children: side === "right" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-display text-xl font-semibold text-ink",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm text-muted",
					children: caption
				})] }),
				show && selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("ml-auto grid size-9 place-items-center rounded-full", correct ? "bg-sky text-cream" : "bg-coral text-cream"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
				})
			]
		})]
	});
}
function QuizPanel({ onDone }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	const item = QUIZ[i];
	function choose(n) {
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
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: Array.from({ length: QUIZ.length }).map((_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-7", n < stars ? "fill-gold text-gold" : "text-line") }, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold text-ink text-balance",
					children: score >= 7 ? "Знаток Конституции!" : score >= 5 ? "Хороший результат!" : "Ещё чуть-чуть!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-2xl text-sky tabular-nums",
							children: [
								score,
								" / ",
								QUIZ.length
							]
						}),
						" ",
						"верных ответов"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "cream",
						size: "lg",
						onClick: restart,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-5" }), " Ещё раз"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "gold",
						size: "lg",
						onClick: () => onDone(score),
						children: "Получить диплом"
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold uppercase tracking-wider text-sky",
					children: "Квиз"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-full bg-gold/30 px-3 py-1 text-sm font-semibold text-ink tabular-nums",
					children: [
						i + 1,
						" / ",
						QUIZ.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 overflow-hidden rounded-full bg-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-gold transition-[width] duration-300 ease-out",
					style: { width: `${(i + (picked !== null ? 1 : 0)) / QUIZ.length * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold text-ink text-balance sm:text-3xl",
				children: item.q
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: item.options.map((opt, n) => {
					const isPicked = picked === n;
					const isCorrect = n === item.correct;
					const show = picked !== null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: picked !== null,
						onClick: () => choose(n),
						className: cn("min-h-14 rounded-2xl border-2 px-4 py-3 text-left font-display text-lg font-semibold text-ink transition-[transform,background-color,border-color] duration-150 ease-out", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky", !show && "border-line bg-paper hover:-translate-y-0.5 hover:border-sky active:scale-[0.98]", show && isCorrect && "border-sky bg-sky text-cream", show && isPicked && !isCorrect && "border-coral bg-coral text-cream", show && !isPicked && !isCorrect && "border-line bg-paper opacity-50"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-3 inline-grid size-8 place-items-center rounded-full bg-cream/30 text-sm",
							children: [
								"А",
								"Б",
								"В"
							][n]
						}), opt]
					}, opt);
				})
			}),
			picked !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 rounded-3xl bg-cream px-5 py-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ink text-pretty",
					children: item.why
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: next,
					className: "shrink-0",
					children: i + 1 >= QUIZ.length ? "Результат" : "Следующий вопрос"
				})]
			})
		]
	});
}
function MascotLine({ slide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/mascot.jpg",
			alt: "Беркут — орёл-проводник",
			className: "size-16 shrink-0 rounded-2xl object-cover ring-2 ring-gold sm:size-20"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "relative rounded-3xl rounded-bl-md bg-paper px-4 py-3 text-sm text-ink shadow-card text-pretty sm:text-base",
			children: MASCOT[slide]
		})]
	});
}
function TitleSlide({ name, onName, onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-semibold uppercase tracking-[0.2em] text-sky",
					children: "Классный час · 5 класс"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl lg:text-6xl",
					children: "Главный закон Казахстана"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-lg text-muted text-pretty",
					children: "Конституция — как устав школы, только для всей страны. Сегодня узнаем, какие у нас права, какие обязанности, и сыграем в весёлую игру."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex max-w-md flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-ink",
						children: "Как тебя зовут?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => onName(e.target.value),
						placeholder: "Напиши имя — будет на дипломе",
						maxLength: 24,
						className: "h-12 rounded-2xl border border-line bg-paper px-4 text-base text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "gold",
						size: "xl",
						onClick: onStart,
						children: "Начать урок"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/classroom.jpg",
					alt: "Мультяшный класс в Казахстане",
					className: "aspect-[16/10] w-full rounded-[32px] object-cover shadow-pop"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/mascot.jpg",
					alt: "",
					className: "absolute -bottom-4 -left-3 size-24 rounded-full object-cover ring-4 ring-cream shadow-pop sm:size-28"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-2 -top-3 w-28 overflow-hidden rounded-xl shadow-card ring-2 ring-paper sm:w-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "block w-full" })
				})
			]
		})]
	});
}
function WhatSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2 lg:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/kids-book.jpg",
			alt: "Дети держат большую золотую книгу",
			className: "aspect-[4/3] w-full rounded-[32px] object-cover shadow-pop"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
					children: "Что такое Конституция?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg text-ink text-pretty",
					children: [
						"Представь школу. У неё есть устав: как себя вести, кто за что отвечает, какие у ребят права. У страны такой устав тоже есть. Он называется",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Конституция" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: [
						"По ней живут все: Президент, министры, мама, папа и ты.",
						"Это самый главный закон. Другие законы не могут ему противоречить.",
						"Её написал народ — на референдуме люди сказали «да»."
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-2xl bg-paper px-4 py-3 text-ink shadow-card text-pretty",
						children: t
					}, t))
				})
			]
		})]
	});
}
function HistorySlide() {
	const [open, setOpen] = (0, import_react.useState)(4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
				children: "Путешествие во времени"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted text-pretty",
				children: "Нажимай на год — откроется история."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: HISTORY.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(i),
					className: cn("shrink-0 rounded-full px-4 py-2 font-display text-lg font-semibold tabular-nums transition-colors duration-150", open === i ? "bg-sky text-cream" : "bg-paper text-ink hover:bg-gold"),
					children: h.year
				}, h.year))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 rounded-[28px] bg-paper p-5 shadow-card sm:grid-cols-[1fr_220px] sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold uppercase tracking-wider text-sky",
						children: HISTORY[open].year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-2xl font-semibold text-ink",
						children: HISTORY[open].title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-ink text-pretty",
						children: HISTORY[open].text
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/teacher.jpg",
					alt: "Учительница рассказывает историю",
					className: "hidden h-48 w-full rounded-3xl object-cover sm:block"
				})]
			})
		]
	});
}
function NewsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
				children: "Что изменилось в 2026 году"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted text-pretty",
				children: "15 марта на участки пришли больше 9 миллионов человек. Почти 9 из 10 сказали «да». 1 июля новый закон заработал."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: NEWS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-[28px] bg-paper p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs font-semibold uppercase tracking-wider text-sky",
							children: n.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-2xl font-semibold text-ink",
							children: n.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink text-pretty",
							children: n.text
						})
					]
				}, n.title))
			})
		]
	});
}
var RIGHT_ICONS = [
	Heart,
	BookOpen,
	Sun,
	Shield,
	Users,
	MessageCircle
];
function RightsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
				children: "Твои права"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/rights.jpg",
				alt: "Дети читают, играют, с семьёй и у врача",
				className: "aspect-[16/8] w-full rounded-[28px] object-cover shadow-pop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: RIGHTS.map((r, i) => {
					const Icon = RIGHT_ICONS[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl bg-paper p-4 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-sky" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-lg font-semibold text-ink",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted text-pretty",
								children: r.text
							})
						]
					}, r.title);
				})
			})
		]
	});
}
var DUTY_ICONS = [
	BookOpen,
	Landmark,
	Users,
	Leaf,
	Star,
	Shield
];
function DutiesSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
				children: "Твои обязанности"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/duties.jpg",
				alt: "Дети берегут природу, уважают флаг и помогают друзьям",
				className: "aspect-[16/8] w-full rounded-[28px] object-cover shadow-pop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: DUTIES.map((r, i) => {
					const Icon = DUTY_ICONS[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl bg-paper p-4 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-gold-deep" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-lg font-semibold text-ink",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted text-pretty",
								children: r.text
							})
						]
					}, r.title);
				})
			})
		]
	});
}
function SymbolsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
				children: "Символы Казахстана"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/steppe.jpg",
				alt: "Степь, юрта, беркут и солнце",
				className: "aspect-[16/8] w-full rounded-[28px] object-cover shadow-pop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-[28px] bg-paper p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-2xl ring-1 ring-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "block w-full" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-semibold text-ink",
								children: "Флаг"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted text-pretty",
								children: "Небесно-голубой — мир и чистое небо. Солнце с лучами-зёрнами — достаток. Золотой беркут — свобода. Слева — национальный орнамент."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-[28px] bg-paper p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid size-36 place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, { className: "h-full w-full" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-semibold text-ink",
								children: "Герб"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted text-pretty",
								children: "В центре шанырак — купол юрты. По бокам крылатые кони-тұлпары. Сверху звезда. Цвета — золото и голубой."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-[28px] bg-paper p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-24 place-items-center rounded-2xl bg-sky/10 font-display text-2xl font-semibold text-sky",
								children: "Менің Қазақстаным"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-semibold text-ink",
								children: "Гимн"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted text-pretty",
								children: "«Мой Казахстан». Музыка Шамши Калдаякова, слова Жумекена Нажимеденова и Нурсултана Назарбаева. Звучит с января 2006 года."
							})
						]
					})
				]
			})
		]
	});
}
function ValuesSlide() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
				children: "Три слова силы"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(i),
					className: cn("rounded-[28px] p-5 text-left shadow-card transition-colors duration-150", open === i ? "bg-sky text-cream" : "bg-paper text-ink hover:bg-gold/40"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold",
							children: v.kk
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("text-sm", open === i ? "text-cream/80" : "text-muted"),
							children: v.ru
						}),
						open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-pretty",
							children: v.text
						})
					]
				}, v.kk))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/family.jpg",
			alt: "Семья читает главный закон вместе",
			className: "hidden aspect-[4/5] w-full rounded-[32px] object-cover shadow-pop lg:block"
		})]
	});
}
function GameSlide({ onScore }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
			children: "Игра для класса"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted text-pretty",
			children: "Можно играть сидя за партами — или встать: руки вверх как солнце, если это право, руки на груди, если обязанность. Потом нажмите ответ на экране."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GamePanel, { onDone: onScore })]
	});
}
function QuizSlide({ onScore }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
			children: "Квиз на закрепление"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPanel, { onDone: onScore })]
	});
}
function DiplomaSlide({ name, game, quiz, onRestart }) {
	const who = name.trim() || "ученик 5 класса";
	const total = game + quiz;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto flex max-w-2xl flex-col items-center gap-5 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full rounded-[32px] border-4 border-gold bg-paper p-5 shadow-pop sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "mx-auto h-12 w-24 rounded-md object-cover sm:h-14 sm:w-28" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-sky",
					children: "Республика Казахстан"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold text-ink text-balance sm:text-4xl",
					children: "Диплом знатока Конституции"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted",
					children: "Награждается"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-semibold text-sky",
					children: who
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-ink text-pretty",
					children: "за честный ум, добрые ответы и любовь к главному закону страны."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex justify-center gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Игра",
							value: `${game}/10`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Квиз",
							value: `${quiz}/8`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Звёзды",
							value: `${total}/18`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, { className: "size-16" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/art/mascot.jpg",
							alt: "",
							className: "size-16 rounded-full object-cover"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "gold",
					size: "lg",
					onClick: onRestart,
					className: "mt-6",
					children: "Пройти урок снова"
				})
			]
		})
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold uppercase tracking-wider text-muted",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-xl font-semibold text-ink tabular-nums",
		children: value
	})] });
}
function Presentation() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)("");
	const [gameScore, setGameScore] = (0, import_react.useState)(0);
	const [quizScore, setQuizScore] = (0, import_react.useState)(0);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [soundOn, setSoundOn] = (0, import_react.useState)(true);
	const [full, setFull] = (0, import_react.useState)(false);
	const rootRef = (0, import_react.useRef)(null);
	const touchX = (0, import_react.useRef)(null);
	const slide = SLIDES[index];
	const last = index === SLIDES.length - 1;
	const go = (0, import_react.useCallback)((n) => {
		setIndex(Math.max(0, Math.min(SLIDES.length - 1, n)));
		setMenu(false);
	}, []);
	const next = (0, import_react.useCallback)(() => go(index + 1), [go, index]);
	const prev = (0, import_react.useCallback)(() => go(index - 1), [go, index]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
			if (e.target?.closest("button, a, [role='button']")) return;
			if (e.key === "ArrowRight") {
				e.preventDefault();
				next();
			} else if (e.key === "ArrowLeft") {
				e.preventDefault();
				prev();
			} else if (e.key === "f" || e.key === "F") toggleFull();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [next, prev]);
	(0, import_react.useEffect)(() => {
		function onFs() {
			setFull(Boolean(document.fullscreenElement));
		}
		document.addEventListener("fullscreenchange", onFs);
		return () => document.removeEventListener("fullscreenchange", onFs);
	}, []);
	function toggleFull() {
		const el = rootRef.current;
		if (!el) return;
		if (document.fullscreenElement) document.exitFullscreen();
		else el.requestFullscreen();
	}
	function armSound() {
		if (soundOn) unlockSound();
	}
	function onTouchStart(e) {
		touchX.current = e.changedTouches[0]?.clientX ?? null;
	}
	function onTouchEnd(e) {
		const start = touchX.current;
		touchX.current = null;
		if (start == null) return;
		const dx = e.changedTouches[0].clientX - start;
		if (dx < -60) next();
		if (dx > 60) prev();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "relative flex min-h-dvh flex-col bg-cream text-ink",
		onPointerDown: armSound,
		onTouchStart,
		onTouchEnd,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-2 bg-sky px-3 py-2 text-cream sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/art/flag.svg",
						alt: "",
						className: "h-6 w-12 rounded-sm object-cover ring-1 ring-cream/30"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden font-display text-sm font-semibold sm:block",
						children: "Басты заң"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mx-auto flex max-w-full items-center gap-1 overflow-x-auto px-1",
						"aria-label": "Слайды",
						children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": s.label,
							"aria-current": i === index,
							onClick: () => go(i),
							className: cn("size-2.5 shrink-0 rounded-full transition-transform duration-150 sm:size-3", i === index ? "scale-125 bg-gold" : i < index ? "bg-cream" : "bg-cream/35")
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hidden text-xs font-semibold tabular-nums sm:block",
						children: [
							index + 1,
							"/",
							SLIDES.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": soundOn ? "Выключить звук" : "Включить звук",
						onClick: () => {
							setSoundOn((v) => {
								setSoundEnabled(!v);
								return !v;
							});
						},
						className: "grid size-11 place-items-center rounded-xl hover:bg-sky-deep",
						children: soundOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Содержание",
						onClick: () => setMenu((v) => !v),
						className: "grid size-11 place-items-center rounded-xl hover:bg-sky-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": full ? "Обычный экран" : "На весь экран",
						onClick: toggleFull,
						className: "grid size-11 place-items-center rounded-xl hover:bg-sky-deep",
						children: full ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "size-5" })
					})
				]
			}),
			menu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-14 z-20 mx-3 rounded-3xl bg-paper p-3 shadow-pop sm:right-4 sm:left-auto sm:w-72",
				children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => go(i),
					className: cn("flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left font-display text-sm font-semibold", i === index ? "bg-sky text-cream" : "text-ink hover:bg-cream"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums opacity-70",
						children: i + 1
					})]
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 px-4 py-5 sm:px-6 sm:py-7",
				children: [slide.id !== "title" && slide.id !== "diploma" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MascotLine, { slide: slide.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "slide-enter flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideBody, {
						id: slide.id,
						name,
						onName: setName,
						onStart: next,
						game: gameScore,
						quiz: quizScore,
						onGame: (n) => {
							setGameScore(n);
							go(SLIDES.findIndex((s) => s.id === "quiz"));
						},
						onQuiz: (n) => {
							setQuizScore(n);
							go(SLIDES.length - 1);
						},
						onRestart: () => {
							setGameScore(0);
							setQuizScore(0);
							go(0);
						}
					})
				}, slide.id)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex items-center justify-between gap-3 bg-sky px-3 py-3 text-cream sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: prev,
						disabled: index === 0,
						className: "min-w-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" }), " Назад"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm font-semibold sm:hidden",
						children: [
							index + 1,
							" / ",
							SLIDES.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "gold",
						size: "sm",
						onClick: next,
						disabled: last,
						className: "min-w-28 text-ink",
						children: ["Дальше ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })]
					})
				]
			})
		]
	});
}
function SlideBody({ id, name, onName, onStart, game, quiz, onGame, onQuiz, onRestart }) {
	switch (id) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleSlide, {
			name,
			onName,
			onStart
		});
		case "what": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatSlide, {});
		case "history": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistorySlide, {});
		case "news": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsSlide, {});
		case "rights": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightsSlide, {});
		case "duties": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DutiesSlide, {});
		case "symbols": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymbolsSlide, {});
		case "values": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValuesSlide, {});
		case "game": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameSlide, { onScore: onGame });
		case "quiz": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizSlide, { onScore: onQuiz });
		case "diploma": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiplomaSlide, {
			name,
			game,
			quiz,
			onRestart
		});
	}
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {});
}
//#endregion
export { Home as component };
