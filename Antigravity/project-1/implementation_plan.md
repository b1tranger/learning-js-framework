# Productivity Management Tool Implementation Plan

## Goal Description
Create a "gamified" productivity management tool in `project-1`.
Stack: React (Frontend), Node.js (Backend), MongoDB (Database).
Theme: Gamified Green and Blue with gradients.
Key Feature: Dashboard with progress tracking, Quote of the Day, and educational sections explaining the web dev concepts used.

## User Review Required
None. Standard MERN stack setup.

## Proposed Changes

### Project Structure
- Create `project-1` directory.
- `project-1/backend`: Node.js + Express server.
- `project-1/frontend`: React + Vite application.

### Backend (`project-1/backend`)
#### [NEW] `package.json`
- Dependencies: `express`, `mongoose`, `cors`, `dotenv`.
#### [NEW] `server.js`
- Setup Express app.
- Connect to MongoDB.
- Define routes.
#### [NEW] `models/Activity.js`
- Mongoose model for tracked activities (name, status, score/points).
#### [NEW] `models/Quote.js`
- Mongoose model for quotes.
#### [NEW] `routes/api.js`
- API endpoints for getting/adding activities and fetching quotes.

### Frontend (`project-1/frontend`)
#### [NEW] `src/App.jsx`
- Main layout with Sidebar and Content Area.
#### [NEW] `src/components/Sidebar.jsx`
- Navigation links.
#### [NEW] `src/components/Dashboard.jsx`
- Hero section.
- "Quote of the Day" display.
- Visual summary of progress (e.g., progress bar, points).
#### [NEW] `src/components/ActivityList.jsx`
- List of activities.
- "Add Activity" form.
- Gamified checkboxes/interactions.
#### [NEW] `src/components/ConceptSection.jsx`
- Reusable component to display the "documentation" part (explaining the concept used).
#### [NEW] `src/index.css`
- Global styles.
- CSS Variables for Green/Blue theme and gradients.

## Verification Plan

### Automated Tests
- None planned for this demo scope.

### Manual Verification
1.  **Backend Start**: Run `npm start` in `backend`. Verify connected to MongoDB.
2.  **Frontend Start**: Run `npm run dev` in `frontend`.
3.  **UI Check**:
    -   Open `http://localhost:5173`.
    -   Verify Green/Blue theme.
    -   Check "Quote of the Day" loads.
    -   Add an activity -> specific API call works.
    -   Mark activity done -> Visual update (points/progress).
    -   Check sidebar navigation.
