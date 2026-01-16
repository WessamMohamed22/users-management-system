# 🎯 Users Management Module - ERP System

## 📋 Scenario
Building a small module inside an ERP system that displays, filters, and manages users data.

---

## ✅ Core Requirements Implemented

### 1. ✅ Users List
- **API**: `https://jsonplaceholder.typicode.com/users`
- **Table Columns**:
  - **Name** - User's full name
  - **Email** - User's email address
  - **Company** - Company name
  - **City** - User's city

### 2. ✅ Search & Filter
- **Real-time search** by:
  - **Name** (case-insensitive)
  - **Email** (case-insensitive)
- **Filter** by:
  - **City** (dynamic dropdown from API data)
- **Features**:
  - 300ms debounced search for performance
  - No page refresh required
  - Auto-reset pagination on search/filter

### 3. ✅ User Details
- **Modal** opens on user click showing:
  - Full user information (name, email, phone, website)
  - Complete address details (street, suite, city, zipcode)
  - Company details (name, catchphrase, business)
- **Modal UX**:
  - Close with ESC key
  - Click outside to close
  - Responsive design
  - Custom scrollbar

### 4. ✅ State Management
- **Context API** for global state
- **Custom Hook**: `useUsers()` for easy consumption
- **Well-structured** state organization:
  - Users data and loading/error states
  - Search and filter states
  - Pagination state
  - Selected user for modal
- **No props drilling** - Clean component hierarchy

### 5. ✅ UX & Error Handling
- **Loading State**: Animated spinner with descriptive message
- **Error State**: User-friendly error display with retry button
- **Empty States**:
  - Initial empty state
  - No results after search/filter
  - Empty pagination page
- **Clear All Filters** button in empty state

---

## ⭐ Bonus Features (All Implemented)

### ✅ Pagination
- Client-side pagination (5 users per page)
- Dynamic page calculation based on filtered results
- Previous/Next navigation buttons
- Page number buttons with current page highlight
- Page info display (e.g., "Showing page 2 of 5")

### ✅ Memoization
- **`useMemo`** for:
  - `filteredUsers`: Search and filter calculations
  - `paginatedUsers`: Pagination slicing
  - `allCities`: Unique city extraction and sorting
- **`useCallback`** for stable function references
- Optimized re-renders and performance

### ✅ Responsive Design
- **Mobile-first** approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Touch-friendly buttons and inputs
-  Responsive table with horizontal scroll

### ✅ Clean Folder Structure
src/
├── api/ # API services layer
│ └── users.api.ts # Fetch users function
├── components/ # Reusable UI components
│ ├── CityFilter/ # Dynamic city dropdown
│ ├── ExportButton/ # CSV/JSON export buttons
│ ├── Pagination/ # Pagination controls
│ ├── SearchBar/ # Debounced search input
│ ├── UserDetails/ # User info modal
│ └── UsersTable/ # Users data table
├── context/ # Global state management
│ └── UsersContext.tsx
├── hooks/ # Custom hooks
│ └── useUsers.ts # Main application hook
├── pages/ # Page components
│ └── UsersPage.tsx # Main page
├── types/ # TypeScript interfaces
│ ├── user.types.ts # User data types
│ └── components.types.ts # Component props types
└── utils/ # Utility functions


### ✅ Reusable Components
- **`SearchBar`**: Debounced search with clear button
- **`CityFilter`**: Dynamic dropdown with loading state
- **`UsersTable`**: Responsive table with clickable rows
- **`UserDetails`**: Feature-rich modal component
- **`Pagination`**: Complete pagination controls
- **`ExportButton`**: Data export functionality (bonus)

### ✅ Additional Features
- **Export Data**: Export filtered results as CSV or JSON
- **Custom Scrollbars**: Styled scrollbars across the app
- **Keyboard Navigation**: ESC to close modal
- **Accessibility**: ARIA labels and semantic HTML
- **Icons**: SVG icons for better UX

---

## 🛠️ Technical Stack & Constraints

### ✅ Technical Constraints Met:
- **React 18** (functional components only ✅)
- **Hooks only** (useState, useEffect, useContext, useMemo, useCallback ✅)
- **TypeScript** (full type safety with interfaces ✅)
- **No UI library** (pure Tailwind CSS for styling ✅)

### Tech Stack:
- **React 18** with Vite (fast development)
- **TypeScript** (strict type checking)
- **Tailwind CSS** (utility-first styling)
- **Context API** (state management)
- **Fetch API** (data fetching)

---

## 🚀 Setup & Installation

### Prerequisites:
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps:
```bash
# 1. Clone the repository
git clone https://github.com/WessamMohamed22/users-management-system.git

# 2. Navigate to project directory
cd users-management-system

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

Build Commands:
bash
# Development server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

The application will be available at: http://localhost:5173

📋 Technical Decisions & Architecture
1. State Management Strategy
Chose Context API because:

Project scope is small/medium (10+ components)

Avoids Redux/Zustand boilerplate

Prevents props drilling through component tree

Simple and effective for this use case

Built-in React solution (no external dependencies)

2. Performance Optimizations
Debounced Search: 300ms delay prevents excessive filtering on every keystroke

Memoization: useMemo prevents expensive recalculations on every render

Pagination: Limits DOM nodes for better rendering performance

Conditional Rendering: Components only render when needed

3. Component Architecture
Separation of Concerns: Each component has a single responsibility

Custom Hooks: useUsers abstracts complex logic from components

Type Safety: Full TypeScript interfaces for all props and data

Reusability: Components designed to be reused in other parts of the app

4. UX/UI Decisions
Modal over Separate Page: Better flow for viewing details

Real-time Feedback: Immediate visual feedback during interactions

Clear Visual States: Distinct loading, error, and empty states

Progressive Enhancement: Works without JavaScript (basic functionality)

5. Code Quality
ESLint Configuration: Code quality rules enforced

TypeScript Strict Mode: Catch errors at compile time

Consistent Naming: Clear, descriptive variable and function names

Commenting: Strategic comments for complex logic

🤔 Assumptions Made
1. API & Data Assumptions:
Using JSONPlaceholder mock API (read-only, no authentication)

Data set is static (no real-time updates needed)

API returns consistent data structure

No server-side pagination or filtering required

2. Performance Assumptions:
Client-side filtering is sufficient for up to 1000 users

Users understand real-time search behavior

300ms debounce provides good balance of performance and responsiveness

3. User Experience Assumptions:
Modal interface is intuitive for viewing details

Export functionality is a valuable bonus feature

Users expect to clear filters when no results found

Keyboard shortcuts (ESC) are appreciated but not required

4. Browser Support:
Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

No IE11 support required

Responsive design works on mobile, tablet, and desktop

🔄 Architecture Flow
text
API Request → Context State → Filtering → Pagination → UI Components
    ↓            ↓            ↓            ↓            ↓
fetchUsers() → users[] → filteredUsers → paginatedUsers → Table/Modal
Data Layer: fetchUsers() gets data from API

State Layer: Context stores all application state

Business Logic: Filtering and pagination calculations

UI Layer: Components display data and handle interactions

✉️ Author
Wessam Mohamed - [GitHub](https://github.com/WessamMohamed22)

