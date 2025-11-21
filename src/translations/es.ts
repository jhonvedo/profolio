const es = {
	meta: { title: 'Jhon Acevedo · Arquitecto / Full‑Stack', description: 'Portafolio profesional de Jhon Acevedo: Arquitectura de software, Full‑Stack, DevOps en Azure, Node.js, .NET, React, Angular.' },
	nav: { services: 'Servicios', cases: 'Casos', skills: 'Skills', experience: 'Experiencia', testimonials: 'Testimonios', contact: 'Contacto' },
	cta: { talk: 'Hablemos', book: 'Agenda una llamada', cases: 'Ver casos reales' },
	hero: { badge: 'Disponible para consultorías selectas', title: 'Arquitecto de Software y Full‑Stack', stack: 'Node.js · .NET · Azure', subtitle: 'Diseño, lidero y ejecuto plataformas escalables con foco en arquitectura limpia, productividad de equipos y costos óptimos en la nube. Transformo ideas en productos medibles y mantenibles.', years: 'años', exp: 'Experiencia', projects: 'Proyectos', uptime: 'Uptime entregado' },
	services: { title: 'Cómo te aporto valor', subtitle: 'Servicios pensados para acelerar resultados y reducir riesgo técnico.', cards: { arch: { title: 'Arquitectura y Roadmap', text: 'Definición de arquitectura, ADRs y plan por fases con métricas de éxito.', b1: 'Hexagonal, Clean, CQRS', b2: 'Cloud Azure, costos y escalabilidad', b3: 'Seguridad y cumplimiento' }, mod: { title: 'Modernización y DevOps', text: 'CI/CD, infraestructura como código y observabilidad desde el día uno.', b1: 'Azure Pipelines, GitHub Actions', b2: 'Terraform, Docker, K8s', b3: 'SLIs/SLOs, tracing y alertas' }, audit: { title: 'Auditoría y Performance', text: 'Revisión de código, seguridad y pruebas con quick wins accionables.', b1: 'Code review y refactors', b2: 'Pruebas, cobertura y calidad', b3: 'Optimización de costos' } } },
	cases: { title: 'Casos de estudio', subtitle: 'Del problema al impacto medido. Historias reales con resultados.', cta: 'Solicitar una revisión', card1: { title: 'Plataforma de sostenibilidad', text: 'Multi‑tenant, reportes PDF, alertas y paneles con 99.9% uptime.', impact: 'Impacto: -35% costos, +42% velocidad de entrega' }, card2: { title: 'E‑commerce salud', text: 'Portal con Astro + CDN + Auth0 y cumplimiento PCI‑like.', impact: 'Impacto: +63% conversión, TTFB < 100ms' }, card3: { title: 'Finanzas personales', text: 'App Next.js + Mongo con dashboard de ingresos y recibos.', impact: 'Impacto: -70% tiempo manual, auditoría simple' } },
	skills: { title: 'Habilidades clave', subtitle: 'Stack y competencias que uso para entregar resultados.', cards: { backend: { title: 'Back‑End', text: 'Node.js, .NET 8, API First, mensajería y patrones.' }, frontend: { title: 'Front‑End', text: 'Angular, React/Next.js, Astro, diseño accesible.' }, devops: { title: 'Cloud y DevOps', text: 'Infra como código, CI/CD y observabilidad.' }, arch: { title: 'Arquitectura', text: 'ADRs, diseño evolutivo, governance de calidad.' }, lead: { title: 'Liderazgo', text: 'Mentoría, definition of done, rituales ágiles.' }, data: { title: 'Datos', text: 'Modelado, ETL y data‑driven decisions.' } } },
	exp: { title: 'Experiencia', card1: { role: 'Líder Técnico · Plataforma SaaS', place: 'Medellín · 2022 – 2025', badge: 'Impacto', b1: 'Microservicios con Azure Functions y mensajería.', b2: 'CI/CD con Azure Pipelines y Terraform.', b3: 'Métricas de producto y observabilidad centralizada.' }, card2: { role: 'Arquitecto de Soluciones · E‑commerce Salud', place: 'Remoto · 2020 – 2022', badge: 'Escala', b1: 'Astro + CDN con TTFB sub‑100ms.', b2: 'Integración Auth0 y pasarelas de pago.', b3: 'Hardening de seguridad y cumplimiento.' } },
	testimonials: { title: 'Testimonios', f1: { q: 'Superó las metas del trimestre y ordenó nuestra arquitectura.', by: 'CTO · Fintech LATAM' }, f2: { q: 'Excelente criterio técnico y enfoque en negocio.', by: 'Head of Engineering · Retail' }, f3: { q: 'Implementó CI/CD y bajó costos de nube.', by: 'Gerente de TI · Salud' } },
	review: { title: '¿Buscas una revisión arquitectónica en 48h?', text: 'Entrego un informe con riesgos priorizados, quick wins y próximos pasos.', cta: 'Solicitar ahora' },
	contact: {
		title: 'Contacto', subtitle: 'Cuéntame sobre tu reto y coordinamos una llamada.', name: 'Nombre', company: 'Empresa', desc: 'Describe brevemente el proyecto', optin: 'Acepto recibir una propuesta por email', send: 'Enviar', form: {
			success: {
				title: "Listo",
				message: "✅ Mensaje enviado correctamente. Te contactaré pronto."
			},
			error: {
				title: "Error",
				default: "No fue posible enviar el formulario.",
				network: "❌ Error de conexión. Por favor intenta nuevamente."
			},
			sending: "Enviando..."
		}
	},
	footer: { privacy: 'Privacidad', terms: 'Términos' }

}
export default es