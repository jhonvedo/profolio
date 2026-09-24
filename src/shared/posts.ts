import type { Lang } from "./i18n"
import * as seriesData from "../content/posts/copilot-to-claude/series.json"

// Posts sin listar: solo se llega a ellos por URL. No aparecen en el menú, llevan noindex y están fuera del sitemap.
export type Part = {
	id: string
	slug: string // vacío para el índice de la serie
	title: string
	kicker: string
	lede: string
	pills: string[]
	minutes: number
	hasStack: boolean
}
export type SeriesLang = { slug: string; parts: Part[] }
export type Series = { id: string; title: Record<Lang, string>; eyebrow: Record<Lang, string>; langs: Record<Lang, SeriesLang> }

export const series: Series[] = [
	{
		id: "copilot-to-claude",
		title: { es: "De Copilot a Claude", en: "From Copilot to Claude" },
		eyebrow: { es: "Programa de capacitación · Septiembre 2026", en: "Training program · September 2026" },
		langs: seriesData as Record<Lang, SeriesLang>,
	},
]

export const partHref = (s: Series, lang: Lang, part: Part) => `/${lang}/blog/${s.langs[lang].slug}${part.slug ? `/${part.slug}` : ""}`
