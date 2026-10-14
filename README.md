# FoodGo — Food Ordering & Delivery Platform

**FoodGo** is a modern, full-stack food ordering and delivery web application built with a separate React frontend and Java Spring Boot backend.

---

## 🏗️ Project Architecture

```text
sheik_fooddelivery/
├── frontend/             # React.js + Vite + Tailwind CSS Frontend
└── backend/              # Java Spring Boot + Maven REST Backend
```

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js 18
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Icons**: Lucide React

### Backend
- **Framework**: Java 17 / Spring Boot 3.x
- **Build Tool**: Apache Maven
- **Modules**: Spring Web, Spring Data JPA, Spring Boot DevTools
- **Database**: Supabase PostgreSQL Driver (Configurable via environment variables)

---

## 🚀 Quick Start Guide

### 1. Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at: `http://localhost:5173`

### 2. Running the Backend

Ensure Java 17 is installed on your system.

```bash
cd backend
./mvnw spring-boot:run
```
*(On Windows: `mvnw.cmd spring-boot:run`)*

The Spring Boot backend will start at: `http://localhost:8080`

Health Check API:
- `GET http://localhost:8080/api/health`

---

## 🔗 Environment Variables Configuration

Backend database parameters can be set in `backend/.env` or system environment variables:

| Variable Name | Default / Example Value | Description |
| :--- | :--- | :--- |
| `DB_URL` | `jdbc:postgresql://db.supabase.co:5432/postgres` | PostgreSQL / Supabase connection URL |
| `DB_USERNAME` | `postgres` | Database user |
| `DB_PASSWORD` | `<your-supabase-password>` | Database password |

---

## 📌 Phase 1 Status
- [x] Independent Frontend & Backend Project Setup
- [x] React Router Navigation & Responsive Navbar
- [x] Page Placeholders: Home, Login, Register, Restaurants, Cart, Profile
- [x] Spring Boot Layered Architecture (`controller`, `service`, `repository`, `model`, `dto`, `config`)
- [x] Spring Web & Health Check Endpoint (`/api/health`)
- [x] CORS Configuration for local frontend communication
- [x] Supabase PostgreSQL environment variables configuration
