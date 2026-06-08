# Bhai Ki Chai × Grand Food Fest 2026 — Proposal Site

## Original Problem Statement
Build a bold, minimal, visually explosive scroll-based sponsorship and franchise partnership proposal website for Bhai Ki Chai × Grand Food Fest Hyderabad 2026. White bg, saffron orange (#FF6B00), black, gold (#B8960A). Minimal text, maximum visual impact.

## User Choices
- Free Google Fonts (Anton + Manrope + Playfair Display) instead of Monument Extended
- Custom SVG India map (no Mapbox)
- NO CTA buttons (purely informational)
- No backend (static frontend only)

## Architecture
- React 19 + CRA/craco frontend only
- Framer Motion + GSAP ScrollTrigger animations
- Custom SVG India map with animated pin drops + ripples
- Custom animated chai-cup cursor with steam trail (desktop only)
- 12 scroll sections, all with data-testid attributes

## What's Implemented (Dec 2026)
- Loading screen with progress bar + chai cup tip-out exit
- Hero (75,000 CHAI Lovers. typography drop)
- One Line (word-by-word reveal)
- Audience Truth (animated 75,000+ counter)
- FOCO Moment (full saffron section)
- India Map (SVG with 1 gold Hyderabad + 7 orange pins)
- Numbers (6 animated counters: 75K+, 10M+, ₹1Cr+, 3, 1, ∞)
- Competitor Reality (grey-faded vs bold-orange columns)
- What You Get (8 benefit cards, GSAP horizontal pin-scroll on desktop, vertical stack on mobile)
- Chai Conversation (cream section with Playfair Display italic)
- The Ask (full saffron section with Habeeb Ali contact)
- Footer (black, both logos, festival details)

## Files
- /app/frontend/src/App.js
- /app/frontend/src/components/{CustomCursor,LoadingScreen,IndiaMap}.jsx
- /app/frontend/src/sections/{Hero,OneLine,AudienceTruth,FocoMoment,MapSection,Numbers,CompetitorReality,WhatYouGet,ChaiConversation,TheAsk,SiteFooter}.jsx

## Backlog (P1/P2)
- Add subtle WhatsApp/Open Graph share image (currently uses BKC logo)
- Real geographically-accurate India SVG map (current is stylized)
- Optional: lazy-load below-the-fold sections for faster LCP on slow devices
