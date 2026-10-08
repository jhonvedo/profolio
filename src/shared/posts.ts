import type { Lang } from "./i18n"
import * as seriesData from "../content/posts/claude-desde-0/series.json"

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
// Etapas del mapa de aprendizaje del índice: agrupan los ids de las partes, en el orden de la serie.
export type Stage = { title: Record<Lang, string>; parts: string[]; optional?: string[] }
export type Series = { id: string; title: Record<Lang, string>; eyebrow: Record<Lang, string>; langs: Record<Lang, SeriesLang>; stages: Stage[] }

export const series: Series[] = [
	{
		id: "claude-desde-0",
		title: { es: "Claude desde 0", en: "Claude from scratch" },
		eyebrow: { es: "Programa de capacitación · Octubre 2026", en: "Training program · October 2026" },
		langs: seriesData as Record<Lang, SeriesLang>,
		stages: [
			{ title: { es: "Fundamentos", en: "Foundations" }, parts: ["conceptos", "skills-agentes"] },
			{ title: { es: "Las seis sesiones", en: "The six sessions" }, parts: ["s1", "s2", "s3", "s4", "s5", "s6"] },
			{ title: { es: "Día a día", en: "Day to day" }, parts: ["operacion", "consumo"] },
			{ title: { es: "Recursos", en: "Resources" }, parts: ["cursos", "ref"], optional: ["cursos", "ref"] },
		],
	},
]

export const partHref = (s: Series, lang: Lang, part: Part) => `/${lang}/blog/${s.langs[lang].slug}${part.slug ? `/${part.slug}` : ""}`
