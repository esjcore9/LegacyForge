# LegacyForge

> **Reviving the past. Rebuilding it for the present.**

LegacyForge is an AI-powered **retro-to-modern transformation engine** designed to make obsolete, inaccessible, or difficult-to-use legacy material usable again.

From handwritten documents to forgotten web experiences and legacy code, LegacyForge explores how modern AI can **understand, transform, and reconstruct the past into experiences designed for the present.**

---

## 🧩 What does LegacyForge do?

LegacyForge brings multiple transformation workflows together into one system.

### ✍️ Cursive → Searchable Knowledge

Handwritten information is often trapped inside photographs, scans, notebooks, and old documents.

LegacyForge explores a workflow where handwritten material can be transformed into structured, searchable digital information.

**Examples:**

- Handwritten recipes → structured recipes
- Handwritten shopping lists → searchable lists
- Old notes → machine-readable text
- Historical documents → digitally accessible information

---

### 🌐 Old Web → Modern Web

The early web contains thousands of experiences built around technologies and design patterns that are no longer supported or practical.

LegacyForge explores reconstructing these experiences into modern interfaces while preserving the character and information of the original.

---

### 💻 Legacy Code → Modern Understanding

Old code can become difficult to understand, execute, maintain, or adapt as technologies evolve.

LegacyForge explores an AI-assisted workflow for interpreting and transforming legacy code into cleaner, more understandable modern representations.

---

# 🧠 The Core Idea

The problem isn't that the information disappeared.

**Accessibility did.**

Old handwritten documents, obsolete websites, legacy code, and forgotten digital experiences can still contain valuable information — but the tools required to access and use them may no longer exist.

LegacyForge treats this as a transformation problem:

```text
             LEGACY MATERIAL
                    │
                    ▼
                 INGEST
                    │
                    ▼
                UNDERSTAND
                    │
                    ▼
                TRANSFORM
                    │
                    ▼
                 STRUCTURE
                    │
                    ▼
            MODERN EXPERIENCE
```

The goal isn't simply to **archive the past**.

It's to make the past **usable again**.

---

# ⚙️ How It Works

LegacyForge follows a common transformation pipeline across its different workflows:

### 01 — Ingest

Bring legacy material into the system through an appropriate input method.

### 02 — Understand

Use AI-assisted interpretation to identify the content, structure, and context.

### 03 — Transform

Convert the legacy material into a modern representation.

### 04 — Structure

Organize the transformed information into something searchable, understandable, and usable.

### 05 — Experience

Present the result through a modern interface rather than leaving it as raw extracted data.

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Frontend application |
| **TypeScript** | Type-safe development |
| **Vite** | Development & build tooling |
| **Google Gemini API** | AI-powered interpretation |
| **CSS** | Interface & visual design |

---

# 📂 Project Structure

```text
LegacyForge/
├── src/
│   ├── components/
│   │   ├── Breadcrumbs.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── screens/
│   │   ├── S01HomeDropImage.tsx
│   │   ├── S02HomeIngestLink.tsx
│   │   ├── S03HomePortCode.tsx
│   │   ├── S04HandwritingSearchableText.tsx
│   │   ├── S05HandwritingShoppingList.tsx
│   │   ├── S06HandwritingCookMode.tsx
│   │   ├── S07OldWebDesktop.tsx
│   │   ├── S08OldWebMobile.tsx
│   │   ├── S09OldWebDownloadModal.tsx
│   │   ├── S10CodeBeforeRun.tsx
│   │   ├── S11CodeAfterRun.tsx
│   │   └── S12CommandPaletteOverlay.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# 🚀 Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- A Google Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/esjcore9/LegacyForge.git
cd LegacyForge
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your Gemini API key

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_api_key_here
```

> **Never commit your `.env.local` file or expose your API key publicly.**

### 4. Start the development server

```bash
npm run dev
```

Open the local development URL shown in your terminal.

---

# 🔭 Roadmap

LegacyForge is currently an evolving prototype.

Future development may include:

- [ ] More robust handwriting recognition
- [ ] Multimodal document processing
- [ ] Automatic information extraction and categorization
- [ ] Legacy website reconstruction
- [ ] Broader legacy-format support
- [ ] Code modernization and analysis
- [ ] Transformation history and provenance
- [ ] Export into modern formats
- [ ] More AI-assisted editing capabilities
- [ ] Production-grade processing pipelines

---

# 🎯 Why LegacyForge?

Preserving information doesn't necessarily preserve **accessibility**.

A document can survive for decades and still become practically unusable.

A website can remain archived while its original technology disappears.

Code can remain stored while the ecosystem required to run it becomes obsolete.

LegacyForge explores a different approach:

> **What if we could preserve the value of old material by making it useful in the environments we use today?**

---

# 📌 Project Status

**Current stage:** Prototype / Proof of Concept

The current implementation focuses on the product experience, interaction flows, and demonstration of the intended transformation workflows.

Some workflows represented in the prototype are demonstrations of the intended product experience rather than fully production-ready processing pipelines.

---

# 🤝 Development

LegacyForge is being developed as an independent exploration of:

- AI-assisted transformation
- Multimodal information processing
- Legacy-data accessibility
- Modern web reconstruction
- AI-powered developer tooling
- Human-centered interfaces for obsolete information

---

<p align="center">
  <b>LegacyForge</b><br>
  Reviving the past. Rebuilding it for the present.
</p>