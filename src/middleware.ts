import type { MiddlewareHandler } from 'astro'
import { supported } from './shared/i18n'
export const onRequest: MiddlewareHandler = async ({ request, redirect, url }, next) => {
	const pathname = url.pathname
	const hasLang = supported.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
	if (pathname === '/' || pathname === '') {
		const header = request.headers.get('accept-language') || ''
		const preferred = header.split(',')[0]?.split('-')[0]?.toLowerCase() === 'es' ? 'es' : 'en'
		return redirect(`/${preferred}`)
	}
	if (!hasLang) return next()
	return next()
}