# AGENTS.md

# Agent Guidelines — Portfolio

## 1. Project Context

This repository contains a personal portfolio website focused on graphic design, digital design, UX/UI, software development and digital fabrication.

The website is a static, editorial-style portfolio. Its primary purpose is to present projects through carefully composed visual case studies, not to behave like a conventional corporate website.

Before making changes, inspect the existing implementation and visual references. Preserve established decisions unless there is a concrete reason to change them.

Use `ROADMAP.md` as the source of truth for architecture, scope, priorities and approved decisions.

## 2. Visual Direction

### Core concept

The visual identity follows an **editorial modular archive** concept.

The interface should feel like a combination of:
- An editorial publication.
- A technical archive.
- A graphic design portfolio.
- A carefully composed visual index.

Use strong typography, asymmetric layouts, compact grids, thin rules, labels, numbering and technical annotations.

The interface should frame and organize the work, never compete with it.

### Typography

- Display and general typography: Bricolage Grotesque.
- Technical labels, indexes, metadata and specifications: JetBrains Mono.
- Preserve the existing typographic hierarchy.
- Avoid introducing additional typefaces without a clear reason.

### Color palette

Preserve the approved palette:

- Paper: `#F1EDE4`
- Ink: `#17160F`
- Signal red: `#D6452B`
- Line: `#C9C2B1`

Use colors consistently and with restraint.

Project artwork may introduce its own colors. Do not modify the global interface palette to match individual projects.

### Layout and composition

- Prefer editorial composition over generic card-based layouts.
- Use asymmetric grids and varied module proportions.
- Maintain compact spacing and clear visual hierarchy.
- Allow important projects to occupy more visual space.
- Use inverted modules selectively to create rhythm.
- Avoid excessive rounded corners, shadows, gradients and decorative UI elements.
- Do not force every page into the same composition.

The home page is a curated project showcase. Individual project pages may have distinct editorial compositions while sharing the same visual language.

## 3. UX and Responsive Design

### General principles

- Prioritize readability, clarity and visual hierarchy.
- Keep navigation predictable and consistent.
- Make interactive elements recognizable and accessible.
- Avoid unnecessary animations and interactions.
- Do not add interface elements without a clear purpose.

### Responsive behavior

Responsive design is not simply a smaller desktop layout.

- Adapt compositions to available space.
- Reorganize modules when necessary.
- Preserve content hierarchy and reading order.
- Prevent horizontal overflow.
- Ensure images and typography remain legible.
- Test both navigation and content on mobile.

Use the existing responsive implementation as the starting point rather than introducing a separate design system.

### Accessibility and motion

- Preserve semantic HTML.
- Maintain visible keyboard focus.
- Provide meaningful alternative text for images.
- Respect `prefers-reduced-motion`.
- Never make essential content dependent on animation or JavaScript.

## 4. Implementation Guidelines

### Preserve the existing architecture

The approved stack is:

- HTML5
- CSS3
- Vanilla JavaScript

Do not introduce frameworks, component libraries, build tools, bundlers, CMSs or backend services.

Important architectural requirements:

- Each page is a complete, independent HTML document.
- Shared CSS and JavaScript are allowed.
- Some HTML duplication is intentional and acceptable.
- Pages must work through both `file://` and a simple local HTTP server.
- Use relative paths.
- Do not use JavaScript to load HTML partials or essential content.
- Keep the implementation simple and maintainable.

### CSS and components

- Inspect existing styles before creating new ones.
- Reuse established components and design tokens.
- Avoid unnecessary duplication.
- Avoid creating abstractions for isolated elements.
- Prefer extending existing components when appropriate.
- Keep project-specific styles separate when they genuinely require custom composition.
- Do not create empty or speculative CSS files.

### Internationalization

The website uses complete HTML documents in Portuguese and English.

- Portuguese is the primary version.
- English pages use the `.en.html` suffix.
- Language switching uses ordinary HTML links.
- Language switching must preserve the equivalent page.
- Keep technical identifiers in English.
- Translate all visible interface content and accessibility labels.
- Do not publish a page without its corresponding language version.

Follow the internationalization rules defined in `ROADMAP.md`.

## 5. Working With Project Content

The actual projects are the main visual content of this portfolio.

- Do not invent clients, results, dates, responsibilities, technologies or project details.
- Use explicit placeholders when real content is unavailable.
- Do not fabricate screenshots, logos, photographs or project artwork.
- Preserve the integrity of supplied artwork.
- Avoid unnecessary cropping or distortion.
- Use appropriate image formats and dimensions.
- Prefer clean, high-quality presentation over decorative mockups.

Different project categories may require different editorial structures. Do not force branding, illustration, software and print production into identical layouts.

## 6. Visual Change Workflow

Before modifying an existing page or component:

1. Inspect its current implementation.
2. Understand its role in the overall visual system.
3. Identify existing components and styles that can be reused.
4. Determine whether the requested change requires a local adjustment or a broader modification.

After implementing visual changes:

1. Review the result at desktop and mobile sizes.
2. Check spacing, alignment, typography and hierarchy.
3. Verify that existing pages and components were not unintentionally affected.
4. Check keyboard navigation and reduced-motion behavior when relevant.
5. Fix regressions before declaring the work complete.

Do not redesign approved components simply because another approach is possible.

If a visual change would alter an established design decision, explain the reason and discuss it before proceeding.

## 7. Scope and Decision Making

- Follow the current phase and its approved scope.
- Do not implement future roadmap features prematurely.
- Do not introduce unnecessary refactoring.
- Preserve existing functionality.
- Prefer small, verifiable changes.
- Ask before making significant architectural or visual decisions that have not been approved.
- Report limitations and unresolved issues honestly.

When in doubt, prefer the simplest solution that preserves the established visual identity and architecture.

## 8. Documentation

Keep documentation consistent with the actual implementation.

- `ROADMAP.md` defines decisions, scope and planned work.
- `README.md` explains the project and practical usage.
- This file defines permanent working guidelines for agents.

Update documentation when a meaningful decision or implementation change makes it outdated.

Avoid duplicating entire sections between documents.