# TORQ two-site audit — summary of changes

Branch: `claude/audit-expand-torq-content-8J4aU`

## Problem

The TORQ Business Solutions website (torqbusinesssolutions.com) positions the
business around consulting, quantified value, UDE elimination, and Critical Path
Methodology. The TORQ Console landing page (torq-site-pi.vercel.app) positions
TORQ Console narrowly as "Your autonomous financial intelligence agent."

The real story is bigger than either page tells: TORQ Console is the system that
emerged from Critical Path Methodology so advisory work could scale beyond human
bandwidth. Both sites were under-selling it.

## What changed in this repo (Vercel landing page)

### Hero (`components/Hero.tsx`)

- Eyebrow: `Meet TORQ AI` → `Meet TORQ Console`
- Headline: `Your autonomous financial intelligence agent` →
  `Governed intelligence for business, finance, and strategic decisions`
- Subline rewritten to reference Barry Flowers, real advisory work, and Critical
  Path Methodology, and to position TORQ as a governed system that works across
  financial, operational, and strategic decisions.
- Console mockup bottom bar: `6 WORKSPACES` → `8 WORKSPACES`,
  `TORQ AI v2.0` → `TORQ CONSOLE v2.0`.

### Use Cases (`components/UseCases.tsx`)

- Fixed the credibility bug: heading said "Six workspaces" but rendered eight
  cards. Heading is now `One governed system. Eight workspaces. Every decision
  you face.`
- Intro paragraph rewritten. Old copy led with classifier speed and routing
  plumbing. New copy leads with the governed-system story, business outcomes,
  and continuity across finance, strategy, documents, and execution.
- Added a one-line bridge above the cards:
  `Each workspace is part of the same governed system — not a separate app,
  assistant, or silo.`
- Tightened card copy on Business Advisory ("Not chat. A board-ready
  deliverable.") and Document Review.
- Renamed `Draft & Publish` → `Drafting & Reports` (and tag `Content` →
  `Output`) so it reads as executive, not content-marketing.
- Reframed `Multi-Agent Execution` description so it does not scare non-technical
  buyers.

### New section: The TORQ System (`components/TorqSystem.tsx`)

New section inserted between `HowItWorks` and `Features`. Anchor id: `#system`.

Shows the five integrated layers that make TORQ Console a system rather than a
wrapped LLM:

- **Memory** — persistent system state (Dream Memory), not chat history
- **Routing** — deterministic 8-stage intent classifier, pre-LLM
- **Workspaces** — purpose-built execution surfaces (Advisory, Market
  Intelligence, Document Review, Draft Workshop, Execution Runs)
- **Governance** — L21 runtime enforcement, L24 cost routing, L25 risk
  classification, append-only audit
- **Output & Evolution** — PDF/DOCX/Markdown/Slack exports, feedback loops,
  continuous improvement with thresholds and rollback

Headline: `Not a wrapped LLM. A governed operating system.`

### Navigation (`components/Nav.tsx`)

Added `System` link (to the new section) and reordered so structure-first links
appear before feature and pricing.

### Metadata (`app/layout.tsx`)

Title and description rewritten to match the broader positioning — governed
intelligence across advisory, finance, document review, drafting, and execution,
rather than a financial-only agent.

### Social Proof (`components/SocialProof.tsx`)

`6 specialized workspaces` → `8 specialized workspaces` to match the actual
workspace count rendered on the page.

### How It Works (`components/HowItWorks.tsx`)

Intro count updated from `Six workspaces. Nine intelligence layers` to
`Eight workspaces. Five governance layers` to match the rest of the page and the
existing L21–L25 callout.

## What did NOT change

- Proof elements on `BuildStory`, `SocialProof`, and `Features`
  (288K+ lines, 1,770+ conversations, L21–L25 stack, fine-tuned model, prompt
  caching metrics) were deliberately preserved — they are the strongest
  credibility signals on the page.
- Pricing, Footer, and the persona section (`WhoItsFor`) were left alone.
- The financial-advisor console mockup on the hero was kept — it is a concrete
  demonstration, not a positioning claim.

## Companion doc

`docs/torqbusinesssolutions-about-page-additions.md` contains ready-to-paste
copy for the About page at https://www.torqbusinesssolutions.com/about. That
site is not in this repo, so the copy is delivered as a document. It adds a
`TORQ Console` bridge section directly after `The Critical Path Methodology`,
followed by a `How TORQ Works` five-layer block and an `Explore TORQ Console`
CTA that links to the Vercel landing page.

## Unified narrative after these changes

- **Business site** → why TORQ exists → operator credibility → methodology →
  business results → TORQ Console as the systemized extension of that work
- **Product site** → what TORQ Console is (governed system) → how it works
  (five layers) → why it is different (proof) → use cases → conversion

The two sites now tell one story instead of three.
