# Blue Coast OS — Production & Fabrication Management System

<p align="center">
  <img src="./02_dashboard_overview.png" alt="Blue Coast OS Banner" width="100%" />
</p>

<p align="center">
  <strong>An advanced desktop application built for managing the industrial production, cut plan optimization, material inventory, and commercial quoting of aluminum windows and doors.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Electron-30.0-47848F?logo=electron&logoColor=white" alt="Electron" />
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/NestJS-Backend-E0234E?logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

---

## 📌 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
  - [1. Executive Analytics & Dashboard](#1-executive-analytics--dashboard)
  - [2. Compounds & Site Hierarchy](#2-compounds--site-hierarchy)
  - [3. Cut Plan Batches & Fabrication Optimization](#3-cut-plan-batches--fabrication-optimization)
  - [4. Technical Inventory & Master Data](#4-technical-inventory--master-data)
  - [5. Pricing, Quoting & Invoices](#5-pricing-quoting--invoices)
  - [6. System Settings & Localization](#6-system-settings--localization)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Getting Started](#-getting-started)

---

## 🔍 Overview

**Blue Coast OS** is an end-to-end manufacturing execution and financial planning platform engineered specifically for aluminum fabricators. It replaces manual spreadsheets and fragmented workflows with real-time analytics, automated bar cutting layouts that eliminate raw material waste, and an integrated pricing calculator tailored for architectural systems.

---

## 🚀 Key Features

### 1. Executive Analytics & Dashboard
The command center surfaces real-time metrics across raw material consumption, compound progress, and price fluctuations.

<p align="center">
  <img src="./02_dashboard_overview.png" alt="Executive Dashboard Overview" width="95%" />
</p>

- **Real-Time KPIs:** Linear meters of extrusion consumed, active compounds count, top profile codes, and leading hardware accessories.
- **Historical Price Trends:** Dual-trend visualization tracking market aluminum prices (EGP/ton) alongside flat glass rates (EGP/sqm).
- **Multi-Level Drill Downs:** Switch between global system views, specific compounds, or individual building structures.

<p align="center">
  <img src="./03_dashboard_compound.png" alt="Compound Analytics View" width="48%" />
  <img src="./04_dashboard_building.png" alt="Building Analytics View" width="48%" />
</p>

---

### 2. Compounds & Site Hierarchy
Structure manufacturing orders by project site, building blocks, and apartments.

<p align="center">
  <img src="./06_compounds_list.png" alt="Compounds Directory" width="48%" />
  <img src="./07_compound_details_muruj.png" alt="Compound Architectural Hierarchy" width="48%" />
</p>

- **Project Master Catalog:** Browse all ongoing compound developments with location mapping.
- **Detailed Unit Hierarchy:** Break down compounds into individual buildings, floor layouts, and opening schedules.

---

### 3. Cut Plan Batches & Fabrication Optimization
Minimize scrap with automated cutting layouts and track fabrication progress across production stages.

<p align="center">
  <img src="./08_production_batches.png" alt="Production Batches Overview" width="95%" />
</p>

- **Batch Overview:** Monitor all batches categorized by status (`In Fabrication`, `Scheduled`, `Completed`).
- **Profile Efficiency Analytics:** Detailed bar utilization stats per profile (Interlock, Flyscreen, Double Sash, Frame, Architrave).
- **Waste & Scrap Calculation:** Immediate visibility into used linear meters vs. residual scrap percentages.
- **Physical Metrics:** Automatic sum of glass area ($m^2$), window unit area ($m^2$), and overall aluminum weight ($kg$).

<p align="center">
  <img src="./09_batch_cutplan_details.png" alt="Cut Plan Bar Optimization Details" width="95%" />
</p>

<p align="center">
  <img src="./09b_batch_progress.png" alt="Batch Progress Tracking" width="48%" />
  <img src="./10_new_batch_form.png" alt="New Batch Configurator" width="48%" />
</p>

---

### 4. Technical Inventory & Master Data
Comprehensive catalogs maintaining engineering dimensions, cutting angles, and hardware specs.

<p align="center">
  <img src="./11_profiles_catalog.png" alt="Aluminum Profiles Catalog" width="95%" />
</p>

- **Profiles Catalog:** Extrusion library organized by system (e.g. *PS 4800*, *PS 6600*) with cutting angles ($45^\circ$, $90^\circ$).
- **Accessories Directory:** Comprehensive hardware inventory with standard units (`PCS`, `M`, `SET`, `KG`) and functional roles.
- **Profile Weights Matrix:** Maintain bar lengths (6.5m standard), linear weight per meter ($kg/m$), and individual bar weights.
- **Bulk Weight Matrix Entry:** High-speed bulk editor for updating profile weights across entire systems simultaneously.

<p align="center">
  <img src="./12_accessories_catalog.png" alt="Hardware Accessories Catalog" width="48%" />
  <img src="./13_profile_weights.png" alt="Profile Weights Table" width="48%" />
</p>

<p align="center">
  <img src="./13b_bulk_weights_entry.png" alt="Bulk Weights Matrix Entry" width="95%" />
</p>

---

### 5. Pricing, Quoting & Invoices
Automate quotations and manage commercial billing directly from technical window configurations.

<p align="center">
  <img src="./18_window_calculator.png" alt="Window Cost & Quotation Calculator" width="95%" />
</p>

- **Parametric Window Estimator:** Specify window models (Two Sash, Fixed, Double Glazed), width, height, quantity, and bead type to dynamically calculate manufacturing cost and selling price per square meter.
- **Configurable Global Cost Parameters:**
  - Fabrication & installation costs per $m^2$
  - Logistics, transport & operational overhead percentages
  - Profit margin adjustments
  - Scrap & waste allowance ratios for glass, aluminum, and hardware
- **Invoices Ledger:** Historical order repository with invoice numbers, customer names, pending/paid status, totals, and PDF export.

<p align="center">
  <img src="./14b_material_prices_detail.png" alt="Material Price History Log" width="31%" />
  <img src="./15_accessory_prices.png" alt="Accessories Price Book" width="31%" />
  <img src="./17_invoices_list.png" alt="Invoices Registry" width="31%" />
</p>

---

### 6. System Settings & Localization
Designed for industrial shop-floor and executive desktop environments alike.

<p align="center">
  <img src="./01_welcome_login.png" alt="Login Portal" width="48%" />
  <img src="./19_system_settings.png" alt="Settings & Localization" width="48%" />
</p>

- **Bilingual Support:** Complete localization in English and Arabic with native RTL (Right-to-Left) layout transitions.
- **Theme Adaptability:** Dark mode, light mode, and system-adaptive themes.
- **Role-Based Access Control:** Role boundaries for Admin, Owner, and Operators.

---

## 🛠️ Architecture & Tech Stack

### Frontend (Desktop Client)
- **Runtime:** [Electron 30](https://www.electronjs.org/)
- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5](https://vitejs.dev/) with `vite-plugin-electron`
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/) (shadcn/ui primitives)
- **State & Data Fetching:** [TanStack Query v5](https://tanstack.com/query) + [Zustand](https://github.com/pmndrs/zustand)
- **Routing:** [React Router v7](https://reactrouter.com/) (Hash-based navigation)
- **Charts:** [Recharts](https://recharts.org/)
- **Internationalization:** [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)

### Backend & Database
- **Server Framework:** [NestJS](https://nestjs.com/)
- **Database:** [PostgreSQL 16](https://www.postgresql.org/) with [TypeORM](https://typeorm.io/)
- **Optimization Algorithms:** Python cut plan calculation scripts integrated via child process pipelines
- **Deployment & Containers:** Docker, Docker Compose, Caddy Reverse Proxy

---

## 💻 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- Docker & Docker Compose (for backend and database services)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/0xZeyad11/Blue-Coast-Desktop-Appliction.git
   cd Blue-Coast-Desktop-Appliction
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Package for Production:**
   ```bash
   npm run build
   ```

---

<p align="center">
  Developed by <strong>Zeyad Hesham</strong> • Blue Coast Industries
</p>
