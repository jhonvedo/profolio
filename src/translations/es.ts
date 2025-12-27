const es = {
	meta: { title: 'Jhon Acevedo · Ingeniero de Software Senior', description: 'Portafolio profesional de Jhon Acevedo: Full‑Stack, Arquitectura de software, Liderazgo técnico, DevOps en Azure, Node.js, .NET, React, Angular.' },
	nav: { services: 'Servicios', cases: 'Casos', skills: 'Skills', experience: 'Experiencia', testimonials: 'Testimonios', contact: 'Contacto' },
	cta: { talk: 'Hablemos', book: 'Agenda una llamada', cases: 'Ver casos reales' },
	hero: { badge: 'Disponible para consultorías selectas', title: 'Ingeniero de Software Senior', stack: 'Full‑Stack · Arquitectura · Liderazgo Técnico', subtitle: 'Con más de 10 años de experiencia, diseño arquitecturas escalables, lidero equipos y ejecuto soluciones end-to-end con foco en calidad, productividad y eficiencia en la nube. Transformo ideas en productos medibles y mantenibles.', years: 'años', exp: 'Experiencia', projects: 'Proyectos', stat3: 'Plataformas en producción' },
	services: { title: 'Cómo te aporto valor', subtitle: 'Servicios pensados para acelerar resultados y reducir riesgo técnico.', cards: { arch: { title: 'Arquitectura y Roadmap', text: 'Definición de arquitectura, ADRs y plan por fases con métricas de éxito.', b1: 'Hexagonal, Clean, CQRS', b2: 'Cloud Azure, costos y escalabilidad', b3: 'Seguridad y cumplimiento' }, mod: { title: 'Modernización y DevOps', text: 'CI/CD, infraestructura como código y observabilidad desde el día uno.', b1: 'Azure Pipelines, GitHub Actions', b2: 'Terraform, Docker, K8s', b3: 'SLIs/SLOs, tracing y alertas' }, audit: { title: 'Auditoría y Performance', text: 'Revisión de código, seguridad y pruebas con quick wins accionables.', b1: 'Code review y refactors', b2: 'Pruebas, cobertura y calidad', b3: 'Optimización de costos' } } },
	cases: { title: 'Casos de estudio', subtitle: 'Del problema al impacto medido. Historias reales con resultados.', cta: 'Solicitar una revisión', card1: { title: 'Sectorial', text: 'Plataforma de estadísticas de mercado. Migración de entrega PDF a sistema de suscripciones donde los clientes acceden a indicadores personalizados.', impact: 'Impacto: Transformación digital, acceso 24/7, suscripciones personalizadas', tech: ['.NET', 'SQL Server', 'Azure', 'APIs REST'], url: 'https://www.sectorial.co/lanzamiento_oda/' }, card2: { title: 'Sure-Metrics', text: 'Plataforma de gestión ambiental. Cálculo de huella de carbono, huella de agua y otros indicadores de desempeño ambiental integrados a la estrategia de negocio.', impact: 'Impacto: Centralización de métricas ambientales, reporting integrado', tech: ['Node.js', 'APIs', 'Cálculos', 'Reporting'], url: 'https://sure-metrics.com/' }, card3: { title: 'NextechDS', text: 'E‑commerce de insumos médicos para diabetes. Portal con catálogo de productos, reorden de medicamentos y gestión de pacientes.', impact: 'Impacto: Plataforma de salud digital, optimización de procesos de pedidos', tech: ['Astro', 'CDN', 'E-commerce', 'Auth'], url: 'https://www.nextechds.com/en/#home' } },
	skills: { title: 'Habilidades clave', subtitle: 'Stack y competencias que uso para entregar resultados.', cards: { backend: { title: 'Back‑End', text: 'Node.js, .NET 8, API First, mensajería y patrones.' }, frontend: { title: 'Front‑End', text: 'Angular, React/Next.js, Astro, diseño accesible.' }, devops: { title: 'Cloud y DevOps', text: 'Infra como código, CI/CD y observabilidad.' }, arch: { title: 'Arquitectura', text: 'ADRs, diseño evolutivo, governance de calidad.' }, lead: { title: 'Liderazgo', text: 'Mentoría, definition of done, rituales ágiles.' }, data: { title: 'Datos', text: 'Modelado, ETL y data‑driven decisions.' } } },
	exp: { title: 'Experiencia', card1: { role: 'Ingeniero Senior · Arquitectura y Desarrollo', place: 'Arquitectura y liderazgo técnico', badge: 'Arquitectura', b1: 'Diseño y ejecución de arquitecturas escalables y mantenibles.', b2: 'Liderazgo de equipos pequeños y mentoría técnica.', b3: 'Definición de patrones, ADRs y gobernanza de código.' }, card2: { role: 'Full‑Stack · Implementación End-to-End', place: '10+ años de experiencia', badge: 'Ejecución', b1: 'Desarrollo completo desde backend hasta frontend.', b2: 'Integración de servicios, APIs y sistemas de terceros.', b3: 'DevOps, CI/CD y despliegues en Azure Cloud.' } },
	testimonials: { title: 'Testimonios', f1: { q: 'Superó las metas del trimestre y ordenó nuestra arquitectura.', by: 'CTO · Fintech LATAM' }, f2: { q: 'Excelente criterio técnico y enfoque en negocio.', by: 'Head of Engineering · Retail' }, f3: { q: 'Implementó CI/CD y bajó costos de nube.', by: 'Gerente de TI · Salud' } },
	review: { title: '¿Iniciando un proyecto nuevo o necesitas escalar uno existente?', text: 'Te ayudo a definir la arquitectura adecuada o a revisar y mejorar la de tu proyecto actual.', cta: 'Hablemos de tu proyecto' },
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