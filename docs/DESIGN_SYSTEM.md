# Edvak Admin Design System

## Design intent

Edvak Admin is a calm, trustworthy operations layer for teams managing access, practices, billing, and audit evidence. It should feel more like a well-lit clinical workspace than a generic dashboard: generous space, quiet hierarchy, clear status, and motion that explains rather than distracts.

## Tokens

Tokens live in `ehr-admin-frontend/src/styles/tokens.scss` and are mirrored in `tailwind.config.js`.

- **Primary:** deep teal (`#064b43` / `#087565`) for trust, navigation, and primary actions.
- **Surface:** soft mint (`#effcf8`) for contextual panels and neutral white for cards.
- **Alert:** warm coral (`#ef765e`) for attention states; never use it as a decorative primary.
- **Neutrals:** slate values for readable body copy and quiet borders.
- **Spacing:** a 4/8px rhythm from `--space-1` through `--space-16`.
- **Radius:** 8px controls, 12–16px cards, pill status badges.
- **Elevation:** restrained `--shadow-sm`, `--shadow-md`, and `--shadow-lg`.
- **Layers:** base, sticky sidebar, header, overlay, and modal z-index tokens.

Dark mode is implemented through the same semantic CSS variables under `[data-theme='dark']`; the shell theme toggle changes that attribute without duplicating component styles.

## Typography

- **Display:** DM Sans, 500–700, for page headings and KPI values.
- **UI:** Inter, 400–700, for navigation, labels, tables, and forms.
- Body copy is intentionally compact and uses slate-muted text only for secondary information.

## Motion

Motion is limited to transform and opacity for content transitions. The landing page uses CSS/SVG only: mesh drift, floating glass cards, a dashed access-flow path, risk gauge sweep, staggered reveal, and counter-like KPI presentation. IntersectionObserver adds `.is-visible` to reveal sections as they enter the viewport. Angular animations handle route transitions.

`prefers-reduced-motion: reduce` disables or sharply shortens animation and transition durations; reveal content remains visible without waiting for the observer.

## Component contracts

Shared components live under `src/app/shared/ui`:

- `app-button`: primary, secondary, ghost, and danger variants.
- `app-card`: surface container with optional interactive lift.
- `app-stat-tile`: compact KPI tile for overview pages.
- `app-data-table`: accessible wrapper for projected rows and column headings.
- `app-modal`: modal shell with labelled dialog and close event.
- `app-toast`: inline status notification with `role="status"`.
- `app-badge`: success, warning, danger, and neutral status.
- `app-empty-state`: friendly, action-ready zero state.
- `app-skeleton`: shimmer placeholder for data loading.

## Accessibility

- All controls use native buttons, links, inputs, and form labels.
- Visible `:focus-visible` rings use warm coral against both light and dark surfaces.
- Motion has a reduced-motion override.
- Status uses text and color together; risk never depends on color alone.
- The command palette and modal have dialog/status semantics.
- The landing SVG includes a text alternative through `role="img"` and `aria-label`.
- Mobile layouts collapse navigation and content without hiding operational meaning.

## Performance guardrails

- Landing, login, shell, and dashboard are lazy-loaded route components.
- Heavy visual behavior uses CSS/SVG instead of a runtime animation library.
- Only transform and opacity are animated for reveal/floating effects.
- IntersectionObserver unobserves a section after its first reveal.
- Keep future charts and large data views behind lazy routes and skeleton states.
''