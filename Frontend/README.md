# NoBroker UI Replica

A pixel-perfect UI replica of the NoBroker property search results page built with Next.js 14 (App Router) and Tailwind CSS.

## Features

- **3-Column Desktop Layout**: Left sidebar (filters), center content (property cards), right sidebar (quick links)
- **Responsive Design**: 
  - Desktop: Full 3-column layout
  - Tablet: Hides right sidebar
  - Mobile: Single column with slide-out filter drawer
- **Interactive Components**:
  - Header with search bar and navigation
  - Filter sidebar with BHK type, price range, property status, etc.
  - Property cards with images, details, and CTAs
  - Quick links and builder projects sections

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
Frontend/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Header component
│   ├── LeftSidebar.tsx  # Filter sidebar
│   ├── CenterContent.tsx # Main content area
│   ├── PropertyCard.tsx # Property card component
│   └── RightSidebar.tsx # Right sidebar
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: Local state management

## Notes

- This is a frontend-only implementation with no API calls
- All data is hardcoded for demonstration purposes
- The UI is designed to match the NoBroker property search page as closely as possible

