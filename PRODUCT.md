# Product

<!-- impeccable:product-schema 1 -->

> Este archivo describe la marca **MorfyDev** y sirve como contexto reutilizable en cualquier proyecto de la marca. Cópialo tal cual a otro repositorio y añade solo la sección `## Proyecto actual` con los hechos propios de ese producto. El estándar completo de diseño vive en [docs/MORFYDEV-DESIGN-SYSTEM.md](docs/MORFYDEV-DESIGN-SYSTEM.md).

## Platform

web

## Users

MorfyDev construye software para equipos y empresas que trabajan con información a diario: SaaS, ERP, CRM, dashboards y webs públicas. Los usuarios de las aplicaciones son personas que completan tareas repetidas (registrar, buscar, filtrar, aprobar, consultar), a menudo con mucha información en pantalla, en escritorio y también en tableta o móvil. Los visitantes de la web corporativa son quienes evalúan si confiar en MorfyDev para construir su producto.

## Product Purpose

Construir productos digitales con una identidad visual consistente, funcional y reconocible. El diseño comunica precisión, confianza y calidad sin depender de adornos. El éxito es que cada producto de MorfyDev se sienta parte de la misma familia y que la calidad se note en las decisiones, no en la cantidad de elementos.

## Positioning

**Software, thoughtfully engineered.** (eslogan provisional) Software diseñado y construido con intención, rigor y atención al detalle. Una sola librería de diseño compartida entre productos (Morfy UI, nombre de trabajo) en lugar de interfaces distintas por proyecto.

## Operating Context

- Stack de referencia: React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Lucide React; formularios con React Hook Form y Zod. Debe fijarse una versión concreta de Tailwind y mantenerla coherente (las instrucciones de Tailwind 3 y 4 no son intercambiables).
- Arquitectura objetivo, incremental: monorepo (Nx si se justifica) con `ui`, `tokens`, `tailwind-config`, `brand`, `docs` y configuraciones compartidas de ESLint y TypeScript. No se crean paquetes ni apps antes de necesitarlos.
- Aplicaciones empresariales: sidebar, barra superior con búsqueda y acciones globales, área principal con título, descripción y acciones. Webs públicas: composición propia (hero, servicios, productos, casos de uso, contacto), nunca un layout de dashboard.
- Temas claro y oscuro obligatorios en toda la librería compartida.

## Capabilities and Constraints

- Idioma de producto y de documentación: español.
- Tipografía: Geist Sans (interfaz y contenido) y Geist Mono (código, identificadores, datos técnicos). No introducir otras familias sin necesidad concreta.
- Iconos: solo Lucide React; sin emojis como iconos en interfaces empresariales.
- Los componentes usan tokens semánticos; no se escriben colores HEX sueltos ni se sobrescribe el estilo de un componente compartido desde cada producto.
- Los componentes de dominio (facturas, pedidos, clientes) permanecen fuera de la librería general.
- Sin decidir: logotipo e isotipo definitivos (el provisional de las exploraciones no es arte final), disponibilidad comercial y legal del nombre "Morfy UI".

## Brand Commitments

- **Nombre:** siempre **MorfyDev** (M y D mayúsculas, una sola palabra; nunca "Morfy DEV", "MORFY DEV" ni "Morfy Development" como sustituto).
- **Dirección:** Obsidian + Copper. Minimalista, premium, madura y cálida.
- **Colores de marca vinculantes:** Obsidian `#191919`, Deep Obsidian `#0D0D0D`, Bone `#F2EFE8`, Copper `#B76E4D`, Sand `#D6C7B8`, Stone `#948B86`. Los valores semánticos de claro y oscuro están en el documento de diseño.
- **Cobre reservado:** acciones principales, enlaces destacados, indicadores seleccionados y detalles de marca. Entre el 80 y el 90 % de una interfaz empresarial es neutra. Los colores de estado (verde, rojo, ámbar) son independientes del cobre.
- **Lo que MorfyDev no debe parecer:** plantilla SaaS genérica en azul eléctrico; interfaz gamer o futurista con efectos; marca de lujo recargada; dashboard lleno de tarjetas, sombras y bordes sin propósito; colección de componentes inconsistentes.
- **Forma:** radios discretos y consistentes (4, 6, 10, 14 px), borde estándar de 1 px, sombras solo en elementos elevados (diálogos, menús, popovers), movimiento breve (120–220 ms) y sin rebotes.

## Evidence on Hand

- El estándar completo "MorfyDev — Brand & Design System v1.0" en `docs/MORFYDEV-DESIGN-SYSTEM.md`.
- No hay logotipo final, casos de estudio, clientes ni testimonios documentados; no inventarlos.

## Product Principles

1. **Minimalismo funcional:** cada elemento visual tiene un propósito; si no mejora la experiencia, no aporta información ni refuerza la identidad, no se añade.
2. **Neutralidad premium:** predominan los neutros cálidos y el cobre destaca solo lo importante.
3. **Consistencia reutilizable:** una solución compartida se implementa una vez; los productos extienden el sistema, no redefinen sus fundamentos.
4. **Jerarquía clara y densidad controlada:** el usuario identifica qué importa y qué puede hacer, incluso con mucha información.
5. **Simplicidad técnica:** sin abstracciones ni componentes sobreconfigurables que no tengan un segundo caso de uso.

## Accessibility & Inclusion

Objetivo WCAG 2.2 AA: contraste 4.5:1 en texto normal y 3:1 en texto grande y controles, calculado sobre las combinaciones reales de fondo y texto; foco visible; navegación por teclado; etiquetas accesibles; no transmitir información solo con color; respetar `prefers-reduced-motion`; compatibilidad con lectores de pantalla.

## Proyecto actual

**Creador de temas para shadcn/ui** (`apps/v4`, ruta `/create`): herramienta donde se elige estilo, color base, tema, tipografías, radio y librería de iconos, se ve el resultado en una vista previa en vivo y se copia el preset o se crea el proyecto. Modo de la superficie: herramienta (Operate). La vista previa muestra el tema del usuario; el cromo de la aplicación (header, panel) se mantiene neutro y no compite con ella.
