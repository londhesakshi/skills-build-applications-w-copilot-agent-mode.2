# OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Architecture

- **Frontend**: React 19 with Vite (Port 5173)
- **Backend**: Node.js + Express + TypeScript (Port 8000)
- **Database**: MongoDB (Port 27017)

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/           # Express + TypeScript API
│   ├── src/
│   ├── dist/
│   ├── tsconfig.json
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- MongoDB running on localhost:27017

### Frontend Setup
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd octofit-tracker/backend
npm install
npm run dev
```

## Environment Configuration

Copy `.env.example` to `.env` and update values as needed.

## Ports

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- MongoDB: localhost:27017
