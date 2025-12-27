import es from "../translations/es"
import en from "../translations/en"
export const supported = ["es", "en"] as const
export type Lang = (typeof supported)[number]
export const isSupportedLang = (l: string | undefined): l is Lang => !!l && supported.includes(l as Lang)
export const getDictionary = async (lang: Lang) => lang === 'en' ? en : es