# MORFYDEV — Brand & Design System

**Versión:** 1.0  
**Estado:** Propuesta de estándar oficial  
**Dirección visual:** Obsidian + Copper  
**Personalidad:** Minimalista, premium, madura y cálida  
**Tecnologías:** React, Next.js, Tailwind CSS, shadcn/ui y TypeScript  
**Cobertura:** SaaS, ERP, CRM, dashboards y webs públicas

---

## 1. Filosofía de diseño

MorfyDev construye productos digitales con una identidad visual consistente, funcional y reconocible. El diseño debe comunicar precisión, confianza y calidad sin depender de adornos innecesarios.

### Principios obligatorios

1. **Minimalismo funcional:** cada elemento visual debe tener un propósito.
2. **Jerarquía clara:** el usuario debe identificar rápidamente qué es importante y qué acción puede realizar.
3. **Neutralidad premium:** predominan los tonos neutros; el cobre se reserva para destacar.
4. **Consistencia:** los mismos componentes deben comportarse igual en todos los productos.
5. **Accesibilidad:** el diseño debe ser usable mediante teclado, lector de pantalla y diferentes tamaños de pantalla.
6. **Densidad controlada:** las aplicaciones empresariales pueden mostrar mucha información, pero deben conservar legibilidad.
7. **Reutilización:** las soluciones compartidas se implementan una sola vez siempre que tenga sentido.
8. **Simplicidad técnica:** no se crean abstracciones innecesarias ni componentes excesivamente configurables.

### Lo que MorfyDev no debe parecer

- Una plantilla SaaS genérica basada en azul eléctrico.
- Una interfaz gamer o futurista con efectos excesivos.
- Una marca de lujo recargada.
- Un dashboard lleno de tarjetas, sombras y bordes sin propósito.
- Una colección de componentes visualmente inconsistentes.

---

## 2. Identidad de marca

### 2.1. Nombre

La marca se escribe siempre como **MorfyDev**.

Reglas:

- Respetar las mayúsculas M y D.
- No separar el nombre en dos palabras.
- No utilizar variantes como Morfy DEV, MORFY DEV o Morfy Development como sustituto del nombre.
- En interfaces pequeñas se puede utilizar únicamente el isotipo, una vez aprobado.

### 2.2. Logotipo e isotipo

El logotipo definitivo debe construirse y aprobarse antes de implementar la identidad completa.

Se requieren estas versiones:

- Logotipo principal horizontal.
- Logotipo monocromático oscuro.
- Logotipo monocromático claro.
- Isotipo independiente.
- Versión para fondos claros.
- Versión para fondos oscuros.
- Favicon y avatar para aplicaciones.

Reglas:

- No deformar, rotar ni estirar el logotipo.
- No cambiar sus proporciones.
- No aplicar sombras, degradados ni contornos improvisados.
- No colocar el logotipo sobre fondos que reduzcan su legibilidad.
- Mantener un área de protección mínima equivalente a la altura de la letra M del logotipo alrededor de la marca.
- No utilizar el logotipo provisional de las exploraciones visuales como arte final sin validarlo.

### 2.3. Eslogan

Eslogan provisional:

**Software, thoughtfully engineered.**

Debe comunicar que los productos se diseñan y construyen con intención, rigor y atención al detalle.

Puede utilizarse en la web corporativa, presentaciones y materiales institucionales. No es necesario mostrarlo en cada aplicación.

---

## 3. Sistema de color

La paleta oficial se denomina **Obsidian + Copper**.

### 3.1. Colores de marca

| Nombre | Token | HEX |
|---|---|---|
| Obsidian | `brand-obsidian` | `#191919` |
| Deep Obsidian | `brand-deep` | `#0D0D0D` |
| Bone | `brand-bone` | `#F2EFE8` |
| Copper | `brand-copper` | `#B76E4D` |
| Sand | `brand-sand` | `#D6C7B8` |
| Stone | `brand-stone` | `#948B86` |

Obsidian es el color principal estructural. Bone proporciona calidez a las superficies claras y Copper introduce el carácter distintivo de la marca.

### 3.2. Paleta semántica del modo claro

| Token | Valor inicial | Uso |
|---|---|---|
| `background` | `#FAF8F5` | Fondo general |
| `foreground` | `#191919` | Texto principal |
| `card` | `#FFFFFF` | Tarjetas y superficies |
| `card-foreground` | `#191919` | Texto de tarjetas |
| `primary` | `#B76E4D` | Acción principal |
| `primary-foreground` | `#FFFFFF` | Texto sobre acción principal |
| `secondary` | `#F2EFE8` | Superficie secundaria |
| `secondary-foreground` | `#191919` | Texto secundario |
| `muted` | `#EDE8E2` | Fondos discretos |
| `muted-foreground` | `#625A55` | Texto secundario |
| `border` | `#E5DED7` | Bordes y separadores |
| `input` | `#D6C7B8` | Bordes de campos |
| `ring` | `#B76E4D` | Indicador de foco |
| `destructive` | `#B42332` | Acciones destructivas |

### 3.3. Paleta semántica del modo oscuro

| Token | Valor inicial | Uso |
|---|---|---|
| `background` | `#0D0D0D` | Fondo general |
| `foreground` | `#F2EFE8` | Texto principal |
| `card` | `#161616` | Tarjetas y superficies |
| `card-foreground` | `#F2EFE8` | Texto de tarjetas |
| `primary` | `#C98768` | Acción principal |
| `primary-foreground` | `#191919` | Texto sobre acción principal |
| `secondary` | `#24201E` | Superficie secundaria |
| `secondary-foreground` | `#F2EFE8` | Texto secundario |
| `muted` | `#262220` | Fondos discretos |
| `muted-foreground` | `#C2B6AD` | Texto secundario |
| `border` | `#38312D` | Bordes y separadores |
| `input` | `#49403A` | Bordes de campos |
| `ring` | `#C98768` | Indicador de foco |
| `destructive` | `#F07878` | Acciones destructivas |

Estos son valores iniciales, no una garantía automática de accesibilidad. Deben validarse las combinaciones reales de texto, controles, estados y fondos antes de publicar la librería.

### 3.4. Reglas de utilización

- Obsidian se utiliza para textos principales, navegación oscura y elementos estructurales.
- Bone se utiliza en secciones claras y superficies que necesitan una sensación cálida.
- Copper se reserva para acciones principales, enlaces destacados, indicadores seleccionados y detalles de marca.
- Sand se utiliza en superficies secundarias, divisores cálidos e ilustraciones.
- Stone se utiliza en elementos neutros, bordes y contenido secundario cuando exista suficiente contraste.
- Los colores de estado se mantienen semánticamente independientes del cobre.
- El cobre no debe convertirse en el fondo de todos los botones, tarjetas e iconos.
- No se utilizan colores arbitrarios directamente en cada componente.
- Los temas claro y oscuro comparten la misma estructura semántica.

Como regla de composición inicial, aproximadamente el 80–90 % de una interfaz empresarial debería estar formado por superficies y colores neutros. El resto se reserva para acciones, estados y elementos destacados. Es una orientación visual, no una proporción matemática obligatoria.

---

## 4. Tipografía

### 4.1. Familias tipográficas

**Principal: Geist Sans**

Usos:

- Navegación.
- Encabezados.
- Formularios.
- Botones.
- Tablas.
- Contenido general.
- Web pública.

**Monoespaciada: Geist Mono**

Usos:

- Código.
- Identificadores técnicos.
- Valores de depuración.
- Datos donde la alineación monoespaciada aporta claridad.

No se deben introducir nuevas familias tipográficas sin una necesidad concreta.

### 4.2. Escala tipográfica

| Token | Tamaño | Uso |
|---|---:|---|
| `text-xs` | 12 px | Metadatos y etiquetas auxiliares |
| `text-sm` | 14 px | Navegación, controles y texto secundario |
| `text-base` | 16 px | Texto general |
| `text-lg` | 18 px | Texto destacado |
| `text-xl` | 20 px | Encabezados secundarios |
| `text-2xl` | 24 px | Encabezados de sección |
| `text-3xl` | 30 px | Títulos principales de aplicaciones |
| `text-4xl` | 36 px | Titulares de páginas públicas |
| `text-5xl` | 48 px | Hero principal de marketing, cuando corresponda |

### 4.3. Pesos tipográficos

- 400: texto general.
- 500: etiquetas, navegación y títulos secundarios.
- 600: encabezados y botones destacados.
- 700: reservado para énfasis excepcional.

Reglas:

- No utilizar más de tres pesos en una misma vista sin justificación.
- Evitar texto general en mayúsculas.
- Las etiquetas técnicas pueden usar mayúsculas y espaciado entre letras.
- No utilizar tamaños diminutos para incluir más información en una tabla.
- El texto de lectura debe mantener un interlineado cómodo, normalmente entre 1.45 y 1.65.

---

## 5. Espaciado y geometría

### 5.1. Escala de espaciado

La unidad base es de 4 px.

| Token | Valor |
|---|---:|
| `space-1` | 4 px |
| `space-2` | 8 px |
| `space-3` | 12 px |
| `space-4` | 16 px |
| `space-5` | 20 px |
| `space-6` | 24 px |
| `space-8` | 32 px |
| `space-10` | 40 px |
| `space-12` | 48 px |
| `space-16` | 64 px |
| `space-20` | 80 px |

Los componentes deben reutilizar esta escala. Se pueden añadir excepciones cuando una necesidad real de composición lo justifique.

### 5.2. Radios

| Token | Valor | Uso |
|---|---:|---|
| `radius-sm` | 4 px | Elementos compactos |
| `radius-md` | 6 px | Controles y botones |
| `radius-lg` | 10 px | Tarjetas y diálogos |
| `radius-xl` | 14 px | Paneles destacados |
| `radius-full` | 9999 px | Avatares y elementos circulares |

No se deben mezclar radios aleatorios en una misma pantalla.

Los botones principales no necesitan ser completamente redondeados. Se priorizan formas discretas y consistentes.

### 5.3. Bordes y sombras

- El borde estándar tiene 1 px.
- Los separadores deben ser discretos.
- Las sombras se reservan para elementos elevados.
- No añadir sombras a todos los contenedores.
- Las tarjetas dentro de una superficie no deben tener necesariamente su propia sombra.
- Los estados hover no deben depender exclusivamente de sombras.
- Los diálogos, menús flotantes y popovers pueden tener una elevación más marcada.

---

## 6. Layout y estructura de las interfaces

### 6.1. Aplicaciones empresariales

La estructura estándar será:

1. Sidebar de navegación.
2. Barra superior con búsqueda, acciones globales y usuario.
3. Área principal con título, descripción y acciones.
4. Contenido organizado en secciones.
5. Paneles auxiliares cuando sean necesarios.

Reglas:

- La navegación debe tener una jerarquía clara.
- La opción activa debe distinguirse por fondo, texto o indicador.
- No mostrar todos los elementos del sistema en el menú principal si pueden agruparse.
- Las acciones principales de una página deben estar en una posición consistente.
- El contenido debe mantener márgenes y alineación uniformes.
- Las barras laterales deben admitir colapso si la cantidad de contenido lo justifica.
- Las aplicaciones deben conservar una estructura utilizable en tabletas y móviles.

### 6.2. Webs públicas

La web corporativa tendrá una composición diferente:

- Hero con una propuesta de valor clara.
- Tipografía más expresiva que la de un dashboard.
- Espacio en blanco generoso.
- Secciones de servicios, productos, casos de uso y contacto.
- Llamadas a la acción visibles.
- Imágenes seleccionadas con una dirección artística coherente.
- Footer con navegación y datos corporativos.

No se debe copiar el layout de un dashboard en una landing page.

### 6.3. Grid y anchos

- Utilizar un grid consistente y contenedores centrados.
- Las webs públicas pueden tener un ancho máximo cercano a 1200–1280 px.
- Los dashboards pueden aprovechar más el ancho disponible.
- Los formularios deben limitar su ancho para evitar campos excesivamente largos.
- Las columnas deben colapsar cuando ya no permitan leer cómodamente el contenido.
- Evitar scroll horizontal global, excepto en tablas o contenidos que lo necesiten explícitamente.

---

## 7. Botones y acciones

### Variantes oficiales

- `default`: acción principal.
- `secondary`: acción secundaria.
- `outline`: acción alternativa.
- `ghost`: acción discreta.
- `destructive`: acción peligrosa.
- `link`: acción con apariencia de enlace.

### Tamaños

- `sm`: controles compactos.
- `default`: tamaño estándar.
- `lg`: acciones destacadas.
- `icon`: botones exclusivamente de icono.

### Reglas

- Una sección debe tener una acción principal claramente identificable.
- No mostrar varios botones primarios si no existe una jerarquía clara.
- Las acciones destructivas deben identificarse sin depender únicamente del color.
- Los botones de icono deben tener nombre accesible.
- Los estados disabled y loading deben ser evidentes.
- Los botones no deben cambiar de tamaño al pasar de un estado a otro.
- La altura debe ser consistente dentro de cada escala de tamaños.
- No utilizar Copper para todas las acciones indiscriminadamente.

---

## 8. Formularios

Componentes base:

- Input.
- Textarea.
- Select.
- Checkbox.
- RadioGroup.
- Switch.
- DatePicker.
- FormField.
- FormMessage.

Reglas:

- Todo campo debe tener una etiqueta visible o un nombre accesible equivalente.
- Los placeholders no sustituyen a las etiquetas.
- Los campos obligatorios deben identificarse.
- Las validaciones deben explicar qué ha ocurrido y cómo corregirlo.
- Los errores aparecen junto al campo correspondiente.
- Los campos relacionados deben agruparse visualmente.
- Los formularios largos se dividen en secciones.
- Los botones de guardar y cancelar deben mantener una posición consistente.
- Los valores introducidos no deben perderse innecesariamente cuando ocurre un error.
- La validación del cliente complementa, pero no sustituye, la validación del servidor.

En React, React Hook Form y Zod son una combinación adecuada para formularios con validación tipada.

---

## 9. Tablas y gestión de datos

Las tablas son fundamentales para ERP, CRM y aplicaciones administrativas.

### Reglas obligatorias

- Encabezados claros y descriptivos.
- Alineación consistente entre columnas.
- Números alineados para facilitar la comparación.
- Acciones por registro agrupadas en una columna definida.
- Estados representados mediante badges con texto.
- Paginación y tamaño de página cuando el volumen lo requiera.
- Ordenación y filtros visibles cuando aporten valor.
- Selección múltiple con acciones masivas claramente delimitadas.
- Una tabla vacía debe mostrar un estado vacío útil.
- Los errores de carga no deben confundirse con la ausencia de registros.

### Densidad

Se permiten tres variantes:

- `comfortable`: espacio generoso.
- `default`: densidad estándar.
- `compact`: para grandes volúmenes de información.

La densidad compacta no debe reducir la legibilidad ni dificultar la interacción.

No se deben implementar tablas diferentes para cada producto cuando el comportamiento puede compartirse mediante configuración y composición.

---

## 10. Tarjetas, diálogos y paneles

### Cards

Una tarjeta debe agrupar contenido relacionado, no servir como decoración.

Reglas:

- Fondo y borde coherentes con el tema.
- Padding uniforme.
- Encabezado opcional.
- Acciones ubicadas consistentemente.
- Sombras discretas.
- Evitar tarjetas anidadas innecesariamente.

### Dialog y Sheet

- Utilizar Dialog para confirmaciones y tareas breves.
- Utilizar Sheet para formularios o paneles auxiliares cuando sea apropiado.
- No utilizar modales para flujos que requieran demasiados pasos.
- Cerrar con Escape cuando la operación lo permita.
- Gestionar correctamente el foco al abrir y cerrar.
- Las acciones destructivas deben requerir confirmación cuando exista riesgo de pérdida importante de datos.

### Tooltips y menús

- Los tooltips deben complementar, no reemplazar, etiquetas necesarias.
- Los menús deben tener una jerarquía clara.
- Las acciones relacionadas deben agruparse.
- Los menús deben ser utilizables con teclado.

---

## 11. Navegación

### Sidebar

- Utilizar iconos Lucide React.
- Mantener un tamaño y estilo uniforme.
- Mostrar etiquetas comprensibles.
- Agrupar las opciones por contexto funcional.
- Resaltar claramente la ubicación actual.
- No utilizar colores diferentes para cada sección sin necesidad.

### Breadcrumbs

Utilizarlos cuando la jerarquía de navegación sea profunda.

### Navegación móvil

- Utilizar un menú compacto o drawer.
- Mantener accesibles las acciones principales.
- Evitar sidebars que ocupen permanentemente gran parte de una pantalla pequeña.

---

## 12. Iconografía e ilustraciones

La librería predeterminada será Lucide React.

Reglas:

- No mezclar diferentes familias de iconos.
- Mantener un grosor visual uniforme.
- Utilizar iconos de tamaño coherente con el texto.
- Los iconos decorativos no deben añadir ruido visual.
- Los botones de icono deben tener etiquetas accesibles.
- No utilizar emojis como sustitutos de iconos en interfaces empresariales.

Las ilustraciones y fotografías deben responder a una dirección artística común. Para la marca, se prefieren imágenes arquitectónicas, materiales, geometrías y composiciones sobrias cuando aporten valor.

---

## 13. Gráficos e indicadores

Los dashboards deben comunicar información, no simplemente llenar espacio.

Reglas:

- Utilizar Copper como acento, no como único color para todas las series.
- Mantener los colores de series consistentes dentro de cada producto.
- Los estados positivos, negativos y de advertencia deben tener una semántica clara.
- No utilizar color como única forma de transmitir una diferencia.
- Incluir etiquetas, unidades y periodos cuando sean necesarios.
- Evitar efectos 3D y gráficos innecesariamente decorativos.
- Las escalas deben representar los datos correctamente.
- Los indicadores deben mostrar contexto, por ejemplo, periodo de comparación.
- Los gráficos deben tener alternativas accesibles cuando corresponda.

El verde puede representar resultados positivos, el rojo resultados negativos y el ámbar advertencias. Estos colores no deben confundirse con los colores corporativos.

---

## 14. Estados de interfaz

Todo componente interactivo debe definir los estados que le correspondan.

- Default.
- Hover.
- Focus-visible.
- Active.
- Disabled.
- Loading.
- Success.
- Error.
- Empty.

Reglas:

- No depender exclusivamente del color para comunicar un estado.
- El foco del teclado debe ser visible.
- Los errores deben incluir una explicación útil.
- Las operaciones exitosas deben confirmarse sin interrumpir innecesariamente el trabajo.
- Los estados vacíos deben orientar al usuario sobre el siguiente paso.
- Los skeletons deben aproximarse a la estructura del contenido real.
- Las acciones asíncronas deben prevenir envíos duplicados cuando corresponda.

---

## 15. Modo claro y oscuro

Ambos temas son obligatorios para la librería compartida.

### Reglas

- Los componentes no deben tener colores fijos incompatibles con los temas.
- Todas las superficies deben utilizar tokens semánticos.
- Los bordes y separadores deben permanecer visibles en ambos temas.
- Las imágenes y los logotipos deben contar con versiones apropiadas.
- Los gráficos deben conservar contraste y legibilidad.
- Los estados hover, focus, disabled y error deben validarse en ambos temas.
- La preferencia puede guardarse en localStorage.
- Se debe evitar el destello del tema incorrecto al cargar la aplicación.
- Se debe permitir una preferencia del sistema cuando el producto lo requiera.

La selección de tema debe centralizarse en un mecanismo compartido, en lugar de implementarse independientemente en cada componente.

---

## 16. Responsive design

Diseñar primero con una estructura flexible y validar los layouts en distintos tamaños.

Breakpoints iniciales de referencia:

| Breakpoint | Ancho |
|---|---:|
| `sm` | 640 px |
| `md` | 768 px |
| `lg` | 1024 px |
| `xl` | 1280 px |
| `2xl` | 1536 px |

Reglas:

- No ocultar información crítica simplemente porque la pantalla es pequeña.
- Las tablas deben disponer de una estrategia para móviles.
- Los formularios deben ocupar el ancho disponible cuando corresponda.
- Los botones deben conservar un área de interacción cómoda.
- Las columnas deben adaptarse al contenido real.
- Los diálogos deben respetar los límites de la pantalla.
- Las webs públicas deben evitar bloques de texto excesivamente anchos.

Los breakpoints pueden ajustarse según el producto; no deben convertirse en límites rígidos cuando el contenido requiera otra adaptación.

---

## 17. Accesibilidad

Objetivo: cumplir WCAG 2.2 nivel AA en los componentes y flujos relevantes.

Reglas:

- Contraste mínimo de 4.5:1 para texto normal.
- Contraste mínimo de 3:1 para texto grande y elementos visuales aplicables.
- Navegación por teclado en controles interactivos.
- Foco visible.
- Etiquetas accesibles en formularios.
- Jerarquía correcta de encabezados.
- Uso adecuado de roles y atributos ARIA.
- Alternativas textuales para contenido visual relevante.
- Compatibilidad con lectores de pantalla.
- Respeto por `prefers-reduced-motion`.
- No transmitir información únicamente mediante color.

El contraste debe calcularse sobre las combinaciones reales de fondo y texto, no deducirse únicamente del nombre de un color.

---

## 18. Animaciones y microinteracciones

La interfaz debe sentirse fluida sin distraer.

Reglas:

- Priorizar transiciones de color, opacidad y transformaciones sencillas.
- Usar duraciones breves, normalmente entre 120 y 220 ms para controles.
- Evitar rebotes y animaciones decorativas persistentes.
- No animar elementos que no aporten información o respuesta.
- Evitar desplazamientos que provoquen cambios de layout inesperados.
- Respetar las preferencias de movimiento reducido del usuario.

Las animaciones deben reforzar la comprensión de lo que ocurre, no demostrar capacidad técnica.

---

## 19. Arquitectura del Design System

Nombre de trabajo: **Morfy UI**. Su disponibilidad comercial y legal debe verificarse antes de convertirlo en una marca pública independiente.

Arquitectura propuesta:

```text
morfydev/
├── apps/
│   ├── website/
│   └── docs/
│
├── packages/
│   ├── ui/
│   ├── tokens/
│   ├── tailwind-config/
│   ├── brand/
│   ├── eslint-config/
│   └── typescript-config/
│
├── nx.json
├── package.json
└── tsconfig.base.json
```

Responsabilidades:

- `ui`: componentes React compartidos.
- `tokens`: colores, tipografía, radios, espaciado y temas.
- `tailwind-config`: configuración compartida, si resulta necesaria para la versión elegida.
- `brand`: logotipos, recursos gráficos y elementos de identidad.
- `docs`: documentación de uso, ejemplos y reglas de diseño.

La estructura se implementará de forma incremental. No es necesario crear todas las aplicaciones ni todos los paquetes desde el primer día.

### Stack

- React y TypeScript.
- Next.js para aplicaciones que requieran sus capacidades.
- Tailwind CSS.
- shadcn/ui como base de componentes.
- Radix UI cuando corresponda.
- Lucide React.
- React Hook Form y Zod para formularios.
- Nx para organizar el monorepo, si el número de aplicaciones y paquetes lo justifica.

Debe elegirse una versión concreta de Tailwind CSS y mantener su configuración coherente. Las instrucciones para Tailwind 3 y Tailwind 4 no son intercambiables.

---

## 20. Convenciones de código

### Nombres

- Componentes: `PascalCase`.
- Hooks: `camelCase` con prefijo `use`.
- Variables y funciones: `camelCase`.
- Constantes globales: `UPPER_SNAKE_CASE` cuando corresponda.
- Archivos de componentes: `PascalCase.tsx`.
- Tokens y archivos de configuración: nombres descriptivos y consistentes.

### Componentes

- Definir props explícitas con TypeScript.
- Utilizar variantes tipadas para los estados visuales.
- Preferir composición frente a componentes excesivamente configurables.
- Mantener accesibilidad desde la implementación inicial.
- Evitar duplicar componentes equivalentes entre aplicaciones.
- No crear componentes genéricos si solo existe un caso de uso y la abstracción no aporta valor.

### Estilos

- Utilizar tokens semánticos.
- Evitar valores HEX dispersos en los componentes.
- Centralizar los estilos de marca.
- Utilizar las variantes compartidas para mantener consistencia.
- No sobrescribir estilos de un componente de forma arbitraria desde cada producto.

### Dependencias

- Evitar incorporar librerías para funcionalidades sencillas ya cubiertas por el stack.
- Revisar mantenimiento, seguridad, accesibilidad y compatibilidad antes de añadir dependencias.
- Mantener las versiones controladas.
- Documentar las decisiones arquitectónicas importantes.

---

## 21. Patrones compartidos

Morfy UI debe ofrecer patrones reutilizables, además de componentes individuales.

### Patrones iniciales

1. Dashboard principal.
2. Listado con búsqueda y filtros.
3. Tabla con ordenación y paginación.
4. Formulario de creación y edición.
5. Página de detalle.
6. Panel lateral de edición.
7. Confirmación de operación destructiva.
8. Estado vacío.
9. Estado de error.
10. Estado de carga.
11. Panel de indicadores.
12. Página de autenticación.
13. Navegación de aplicación.
14. Landing page corporativa.

Los componentes de dominio, como facturas, pedidos o clientes, deben mantenerse separados de la librería general cuando pertenecen a un producto concreto.

---

## 22. Documentación y calidad

Cada componente compartido debe documentar:

- Propósito.
- API y props.
- Variantes disponibles.
- Estados.
- Ejemplos de uso.
- Reglas de accesibilidad.
- Comportamiento responsive.
- Limitaciones conocidas.

Pruebas recomendadas:

- TypeScript y linting.
- Pruebas unitarias de comportamiento.
- Pruebas de accesibilidad.
- Pruebas visuales de los componentes importantes.
- Validación de los temas claro y oscuro.
- Pruebas de responsive.
- Pruebas de regresión en componentes compartidos.

La documentación debe mostrar ejemplos reales y evitar que cada equipo tenga que interpretar las reglas por su cuenta.

---

## 23. Gobierno y evolución del sistema

El Design System debe evolucionar sin perder consistencia.

Reglas:

- Toda modificación de tokens debe evaluarse en los dos temas.
- Los cambios incompatibles deben documentarse.
- Las variantes nuevas deben responder a una necesidad real.
- Los componentes compartidos deben probarse antes de actualizar productos.
- Las decisiones de diseño importantes deben registrarse.
- Los productos pueden extender el sistema, pero no redefinir unilateralmente sus fundamentos.
- Los componentes obsoletos deben retirarse mediante un proceso controlado.
- La documentación debe actualizarse junto con el código.

Se recomienda utilizar versionado semántico para los paquetes compartidos cuando se publiquen como dependencias reutilizables.

---

## 24. Checklist antes de entregar una interfaz

### Identidad

- [ ] Se respeta la identidad de MorfyDev.
- [ ] Los colores proceden de los tokens.
- [ ] La tipografía es consistente.
- [ ] La interfaz no introduce efectos innecesarios.

### Componentes

- [ ] Se utilizan componentes compartidos cuando corresponde.
- [ ] Las variantes son coherentes.
- [ ] Los estados interactivos están definidos.
- [ ] No existen duplicaciones injustificadas.

### Experiencia

- [ ] La jerarquía visual es clara.
- [ ] Los formularios muestran errores comprensibles.
- [ ] Las tablas tienen estados vacíos y de carga.
- [ ] Las acciones principales son fáciles de identificar.

### Accesibilidad y responsive

- [ ] El foco del teclado es visible.
- [ ] Las etiquetas son accesibles.
- [ ] Los contrastes están validados.
- [ ] La interfaz funciona en pantallas pequeñas.
- [ ] Se respeta la preferencia de movimiento reducido.

### Calidad técnica

- [ ] TypeScript no presenta errores.
- [ ] El linting pasa correctamente.
- [ ] Las pruebas relevantes están ejecutadas.
- [ ] Los temas claro y oscuro han sido comprobados.
- [ ] La documentación está actualizada.

---

## 25. Criterio final de diseño

Toda decisión visual de MorfyDev debe responder a tres preguntas:

1. ¿Mejora la comprensión o la experiencia del usuario?
2. ¿Respeta la identidad Obsidian + Copper?
3. ¿Puede mantenerse de forma consistente en los demás productos?

Si un elemento no mejora la experiencia, no aporta información ni refuerza la identidad, no debería añadirse por defecto.

**MorfyDev debe reconocerse por la calidad de sus decisiones, no por la cantidad de elementos que muestra.**

Este documento establece las reglas iniciales del sistema. La implementación definitiva deberá acompañarse de los archivos de tokens, los componentes reales, la documentación visual y las pruebas necesarias para validar el comportamiento de las interfaces.
