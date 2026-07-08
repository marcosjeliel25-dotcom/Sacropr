# SACRO.HQ — Master Blueprint (Sitio Web)
Version 1.0 · Julio 2026 · Status: **Canon**

> El sitio no es una página promocional. Es el hogar digital permanente de un universo artístico. Debe sentirse como descubrir un archivo, no como abrir un anuncio. Debe envejecer bien: visitarlo en diez años y sentir que pertenece al mismo mundo.

## Misión

Crear el sitio de artista independiente más hermoso del internet — no por tener más funciones, sino por tener más intención.

## Lenguaje de diseño

Minimal · Editorial · Museo · Archivo · Cine · Puerto Rico · Naturaleza · Silencio · Cálido · Elegante · Atemporal · Orgánico · Análogo · Quiet luxury.
Referencias: A24, MUBI, Apple, Kinfolk, Monocle, Slow Cinema. **Nunca debe sentirse como redes sociales.**

## Sistema de color

| Rol | Color | Hex |
|-----|-------|-----|
| Fondo primario | Marfil cálido | `#F6F2EA` |
| Texto primario | Casi negro (tinta) | `#15130F` |
| Acento | Bronce | `#A5854D` |
| Atenuado | Piedra | `#8E8779` |

Todo cálido. Nada digitalmente frío.

## Tipografía

**Cormorant Garamond** (display/serif) · **Jost** (sans). Márgenes amplios, espaciado intencional, cero ruido visual.

## Filosofía

Cada página responde **una** pregunta. Nunca abrumar. Nunca vender agresivamente. El visitante se siente invitado.

## Estructura del sitio

HOME · ARCHIVO · PROYECTOS · MUNDO · DIARIO · SHOP · CONTACTO

- **Home:** SACRO, el pájaro, una oración. Nada más.
- **Archivo:** el corazón del sitio. Línea de tiempo: proyectos, lanzamientos, films, videos, fotografía, diario.
- **Proyectos:** cada proyecto mayor tiene su página cinematográfica (manifiesto, historia, créditos, galería, videos, letras, notas de producción, referencias, símbolos, locaciones, diario de desarrollo).
- **Mundo:** el universo. Personajes, símbolos, locaciones, línea de tiempo. **No explicado. Documentado.** Como leer un libro de arte.
- **Locaciones:** Puerto Rico interactivo — Primera Posita, Segunda Posita, Bosque Mágico, El Ojo del Buey, Mayagüez, Rincón. Fotografía, notas, films, canciones conectadas.
- **Símbolos:** cada símbolo recurrente tiene su página — Traje Negro, Guaraguao, Foto del Dashboard, Invitación, Café, Bicicleta, Carro, Silla, Océano, Ventana, Flor, Libreta, Viento, Pájaro, Espejo. Apariciones, posibles lecturas, evolución visual. Nunca una explicación cerrada.
- **Diario:** no es blog ni contenido. Entradas cortas, hermosas, honestas ("Practiqué el álbum otra vez. Sigo buscando la nota.").
- **Shop:** mínimo. Solo objetos con significado — libros, prints, fotografía en film, vinilo. Nada genérico.
- **Contacto:** management, booking, prensa, email. Nada más.

## Sistema técnico

- **Stack:** Astro · Tailwind · TypeScript · Colecciones Markdown · Optimización de imágenes · RSS · Sitemap · SEO · Dark mode · i18n (ES/EN) · Generación estática · Lighthouse 95+.
- **CMS:** todo se genera desde Markdown en `content/`. El artista nunca edita páginas a mano.
- **Modelo de contenido:** todo es reusable y se referencia entre sí — canciones → álbumes → eras; símbolos → canciones; locaciones → videos; videos → proyectos; proyectos → diario.
- **Media:** toda imagen soporta fullscreen; todo video, modo cine. La fotografía se trata como obra.
- **Accesibilidad:** navegación por teclado, reduced motion, contraste, ARIA, HTML semántico.

## Regla final

Nunca preguntar "¿qué se ve cool?". Siempre preguntar **"¿qué hace el mundo más real?"**

---

## Estado de implementación (v1 — infraestructura)

**Construido en v1:** diseño base, layout, Home, Archivo, Proyectos (Prequel + Del Amor al Arte), Mundo (símbolos + locaciones), Diario, Contacto, colecciones Markdown, RSS, sitemap, dark mode cálido, ES/EN base, tipografías autohospedadas.

**Future Seed (documentado, no construido):** Shop, búsqueda global, mapa interactivo de Puerto Rico, visor fullscreen/cine, páginas de films por video, galería fotográfica. Se construyen cuando exista el contenido real que las justifique.

## v2 — El museo (Julio 2026) · Status: Canon

- **Sistema de movimiento:** revelado lento (1s ease-in-out, subida de 10px) con escalonado; transiciones de página en crossfade de 0.5s; todo respeta reduced motion.
- **Navegación relacionada:** todo se conecta — símbolos ↔ proyectos ↔ lugares ↔ diario ↔ creación. Bloque "Relacionado" en cada página de detalle; solo aparece si hay referencias reales.
- **Archivo = línea de tiempo:** 2023 (la música se vuelve el centro) → 2024 (tres lanzamientos) → 2026 (Prequel, Del Amor al Arte) → futuro.
- **Creación:** nueva sección — decisiones, sesiones, filosofía de producción. El corazón del archivo.
- **Proyectos como exhibición:** secciones condicionales (historia, canciones, notas, créditos, relacionado) que solo aparecen si existe el contenido.
- **Footer:** los enlaces externos (Spotify, etc.) bajaron al footer — el sitio invita a explorar antes de enviar afuera.
- **Pendiente de material del artista:** foto para el hero del home (un solo objeto, 20–40% opacidad), audio ambiental (Future Seed), fotografía de lugares y símbolos.
