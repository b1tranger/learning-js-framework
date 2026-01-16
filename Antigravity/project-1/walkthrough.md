# Project Walkthrough: Gamified Productivity Tool

## Overview
This project is a full-stack "Gamified Productivity Tool" built with the MERN stack (MongoDB, Express, React, Node.js). It features a modern, dark-themed UI with glassmorphism effects and green/blue gradients.

## Features Implemented
1.  **Dashboard**:
    -   Welcome screen with "Quote of the Day" fetched from the backend.
    -   Visual progress bar.
2.  **Activity Tracking**:
    -   Create new activities via the "Activities" tab.
    -   Toggle completion status (Gamified "Done/Undo").
    -   Visual feedback (strikethrough, border colors).
3.  **Theming**:
    -   Custom Green/Blue color palette.
    -   Glassmorphism card styles.
    -   Responsive Sidebar navigation.

## How to Run

### 1. Backend
Navigate to the backend directory and start the server:
```bash
cd Antigravity/project-1/backend
# npm install (if needed)
node server.js
```
*Server runs on http://localhost:5000*

### 2. Frontend
Navigate to the frontend directory and start the Vite dev server:
```bash
cd Antigravity/project-1/frontend
# npm install (if needed)
npm run dev
```
*Frontend runs on http://localhost:5173*

## Remaining Tasks
- [ ] Create Section Documentation Components (Educational overlays).

## Verification Results
-   **Dashboard**: Verified random quote loading from MongoDB.
-   **Activities**: Verified Add/Toggle functionality persisting to MongoDB.
-   **Navigation**: Verified switching between Dashboard and Activities.
