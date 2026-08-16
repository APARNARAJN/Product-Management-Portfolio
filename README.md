# Product Management Portfolio — Aparna Raj N

> **"Good products solve problems. Great products make them feel simple."**
> 
> *My development experience taught me how products are built. My curiosity taught me to question if they are worth building.*

Welcome to my Product Management portfolio repository. This project showcases a collection of product case studies, design teardowns, and functional AI prototypes that demonstrate my approach to product strategy, user experience design, and technical system architecture.

---

## 📁 Repository Structure

The project is structured to keep assets modular and maintain a clean, organized root directory:

```bash
├── index.html                  # Main portfolio entry point (dynamically rendered)
├── main.js                     # Portfolio presentation logic and scroll animations
├── portfolio-data.js           # Central configuration file for all profile data
├── style.css                   # Core typography and monochrome grid layouts
├── case-studies.html           # Main archive of case studies
├── case-study-irctc.html       # IRCTC Tatkal teardown walkthrough
├── case-study-googlemaps.html  # Google Maps "Ride Along" feature proposal
├── case-study-intellidash.html # IntelliDash NL-to-SQL dashboard case study
├── case-study-jarvis.html      # Jarvis Agentic Assistant case study
├── case-study-concession.html  # Student Digital Concession card case study
├── asset1/                     # Google Maps case study slide images & official logo
├── asset2/                     # IRCTC Tatkal case study slide images & official logo
├── asset3/                     # IntelliDash case study slide images
├── asset4/                     # Jarvis case study slide images
└── assets/                     # General images (profile photo, product screenshots)
```

---

## 🚀 Case Studies Overview

### 1. [Jarvis: Agentic AI Assistant Re-Routing](case-study-jarvis.html)
* **Scope**: 75-Day solo build | 10+ automation modules.
* **The Problem**: Bouncing between separate tools (email, calendars, focus trackers) creates cognitive overhead and drains productivity.
* **Key Decisions**:
  * **Intent to Tool-Calling Refactor**: Re-engineered the routing core, moving away from brittle keyword pattern-matching to an LLM-based tool-calling registry pattern to support natural, varied phrasing and tool chaining.
  * **Safety UI Confirmation Gates**: Designed confirmation loops for destructive write actions (sending emails, updating calendar events) to prevent model execution errors.

### 2. [IntelliDash: Natural Language BI for SMBs](case-study-intellidash.html)
* **Scope**: AI Ingestion & SQL Generation | Working Prototype.
* **The Problem**: Small business owners collect valuable sales data but lack the analysts or budget for enterprise tools like Power BI/Tableau, leaving spreadsheets unopened.
* **Key Decisions**:
  * **Relational Schema Migration**: Migrated the datastore from MongoDB to PostgreSQL mid-build because the LLM generated structured relational SQL with 35% higher predictability than NoSQL aggregate commands.
  * **Inference Isolation**: Hosted Ollama (Llama 3.2) locally on a dedicated FastAPI wrapper to isolate compute-heavy execution from the Express API, providing zero-cost, secure queries.

### 3. [IRCTC Tatkal: High-Stakes Transaction Redesign](case-study-irctc.html)
* **Scope**: Product Design Teardown | Academic Case Study.
* **The Problem**: A high-stakes 30-second daily window where millions of users try to book train tickets under extreme time pressure, resulting in severe anxiety due to app freezes and payment-ticket sync failures.
* **Key Interventions**:
  * Re-framed the teardown around a **broken trust loop** instead of isolated bugs.
  * Mapped user psychology across pre-, during-, and post-booking friction triggers.
  * Proposed P0 solutions: simplified bot-detection, server auto-scaling, and instant refund payment-to-seat gates.

### 4. [Google Maps: Ride Along Travel Companion](case-study-googlemaps.html)
* **Scope**: Proposed Mobile Feature Layer.
* **The Problem**: Multi-vehicle travel convoys frequently get separated at forks and toll plazas, leading to unsafe phone calls and distracted driving.
* **Key Interventions**:
  * Designed a session-based navigation overlay inside the core map UI to broadcast live convoy locations without persistent friend lists.
  * Introduced one-tap status triggers (fuel stop, restroom break, fallen behind) to replace driving text calls.
  * Calculated real-time auto-regrouping ETAs.

---

## 🛠️ Tech Stack & Toolkit

* **Product Management**: User Research, Product Strategy, Feature Prioritization (MoSCoW), Success Metrics mapping, UX Wireframing.
* **Tools**: Figma, Git, VS Code.
* **Development**: Python, JavaScript (ES6+), React.js, Express, FastAPI, PostgreSQL, HTML5, CSS3, Ollama (Llama 3.2).

---

## 💻 Running Locally

To preview the portfolio website locally without browser file-caching issues, run a simple local HTTP server from the root folder:

```bash
# Using Python
python -m http.server 8085
```

Open your browser and navigate to **`http://localhost:8085`**.
