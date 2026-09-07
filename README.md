# AYUNDA HEALTH CARE SERVICES

This repository contains the frontend-only scaffold for the AYUNDA HEALTH CARE SERVICES hospital management system.

Note: The API/backend has been intentionally removed from this branch as requested. This branch provides a minimal frontend scaffold (Vite + React + TypeScript) you can extend or connect to any API later.

Quick start
1. Clone the repo and checkout the branch:

   git clone https://github.com/mrofflinedev/ayunda-healthcare-centre-.git
   cd ayunda-healthcare-centre-
   git checkout scaffold/initial

2. Install dependencies and start the dev server:

   cd frontend
   npm install
   npm run dev

3. Open the URL printed by Vite (usually http://localhost:5173)

Project structure (this branch)
- frontend/ - Vite + React app
  - index.html
  - src/
    - main.tsx
    - App.tsx
    - styles.css

What's removed
- The backend / API code has been removed from this branch per request. If you want the API restored or a different setup (Django, Node, etc.), tell me and I can add it back or scaffold a backend in a separate branch.

How I can help next
- Connect this frontend to an existing API (I can scaffold API calls and environment config)
- Add authentication (JWT) and role-based UI flows
- Build specific modules (Patient registration, Appointments, Billing)
- Create a deployable Docker setup

