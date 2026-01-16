# 🎯 Users Management Module - ERP System

## 📋 Scenario

Building a small module inside an ERP system that displays, filters, and manages users data.

---

## ✅ Core Requirements Implemented

### 1. Users List

* **API**: `https://jsonplaceholder.typicode.com/users`
* **Table Columns**:

  * **Name** - User's full name
  * **Email** - User's email address
  * **Company** - Company name
  * **City** - User's city

### 2. Search & Filter

* **Real-time search** by:

  * **Name** (case-insensitive)
  * **Email** (case-insensitive)
* **Filter** by:

  * **City** (dynamic dropdown from API data)
* **Features**:

  * 300ms debounced search for performance
  * No page refresh required
  * Auto-reset pagination on search/filter

### 3. User Details

* **Modal** opens on user click showing:

  * Full user information (name, email, phone, website)
  * Complete address details (street, suite, city, zipcode)
  * Company details (name, catchphrase, business)
* **Modal UX**:

  * Close with ESC key
  * Click outside to close
  * Responsive design
  * Custom scrollbar

### 4. State Management

* **Context API** for global state
* **Custom Hook**: `useUsers()` for easy consumption
* **Well-structured** state organization:

  * Users data and loading/error states
  * Search and filter states
  * Pagination state
  * Selected user for modal
* **No props drilling** - Clean component hierarchy

### 5. UX & Error Handling

* **Loading State**: Animated spinner with descriptive message
* **Error State**: User-friendly error display with retry button
* **Empty States**:

  * Initial empty state
  * No results after search/filter
  * Empty pagination page
* **Clear All Filters** button in empty state

---

## ⭐ Bonus Features

### Pagination

* Client-side pagination (5 users per page)
* Dynamic page calculation based on filtered results
* Previous/Next navigation buttons
* Page number buttons with current page highlight
* Page info display (e.g., "Showing page 2 of 5")

### Memoization

* **`useMemo`** for:

  * `filteredUsers`: Search and filter calculations
  * `paginatedUsers`: Pagination slicing
  * `allCities`: Unique city extraction and sorting
* **`useCallback`** for stable function references
* Optimized re-renders and performance

### Responsive Design

* **Mobile-first** approach
* Breakpoints for tablet and desktop
* Flexible grid layouts
* Touch-friendly buttons and inputs
* Responsive table with horizontal scroll

### Clean Folder Structure

```
src/
├── api/             # API services layer
│   └── users.api.ts # Fetch users function
├── components/      # Reusable UI components
│   ├── CityFilter/     # Dynamic city dropdown
│   ├── ExportButton/   # CSV/JSON export buttons
│   ├── Pagination/     # Pagination controls
│   ├── SearchBar/      # Debounced search input
│   ├── UserDetails/    # User info modal
│   └── UsersTable/     # Users data table
├── context/         # Global state management
│   └── UsersContext.tsx
├── hooks/           # Custom hooks
│   └── useUsers.ts  # Main application hook
├── pages/           # Page components
│   └── UsersPage.tsx # Main page
├── types/           # TypeScript interfaces
│   ├── user.types.ts
│   └── components.types.ts
└── utils/           # Utility functions
```

### Reusable Components

* `SearchBar` - Debounced search with clear button
* `CityFilter` - Dynamic dropdown with loading state
* `UsersTable` - Responsive table with clickable rows
* `UserDetails` - Feature-rich modal component
* `Pagination` - Complete pagination controls
* `ExportButton` - Data export functionality

### Additional Features

* Export filtered data as CSV or JSON
* Custom scrollbars
* Keyboard navigation (ESC to close modal)
* Accessibility with ARIA labels
* SVG icons for better UX

---

## 🛠️ Technical Stack & Constraints

* **React 18** (functional components only)
* **Hooks only** (`useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`)
* **TypeScript** (full type safety)
* **No UI library** (Tailwind CSS only)

**Other tools:**

* Vite for fast development
* Fetch API for data fetching
* Context API for state management

---

## 🚀 Setup & Installation

### Prerequisites

* Node.js (v16+)
* npm or yarn

### Installation Steps

```bash
git clone https://github.com/WessamMohamed22/users-management-system.git
cd users-management-system
npm install
npm run dev
```

* Development server: [http://localhost:5173](http://localhost:5173)
* Production build: `npm run build`
* Preview build: `npm run preview`

---

## 📋 Technical Decisions & Architecture

1. **State Management**

   * Context API chosen for small/medium project scope
   * Avoids Redux/Zustand boilerplate
   * Prevents props drilling

2. **Performance Optimizations**

   * 300ms debounce for search
   * `useMemo` and `useCallback` for performance
   * Pagination reduces DOM nodes
   * Conditional rendering to avoid unnecessary renders

3. **Component Architecture**

   * Separation of concerns for each component
   * Custom hooks for logic abstraction
   * Type safety with interfaces
   * Reusable components

4. **UX/UI Decisions**

   * Modal for details instead of separate page
   * Real-time feedback on interactions
   * Clear loading, error, and empty states
   * Progressive enhancement for JS-disabled users

5. **Code Quality**

   * ESLint for consistent code
   * TypeScript strict mode
   * Clear naming and strategic comments

---

## 🤔 Assumptions Made

* API is static, read-only (JSONPlaceholder)
* Client-side filtering sufficient for ≤1000 users
* Modal interface is intuitive
* Export functionality is optional bonus
* Modern browsers only (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

---

## 🔄 Architecture Flow

```
API Request → Context State → Filtering → Pagination → UI Components
    ↓            ↓            ↓            ↓            ↓
fetchUsers() → users[] → filteredUsers → paginatedUsers → Table/Modal
```

* **Data Layer**: fetchUsers() gets data from API
* **State Layer**: Context stores all app state
* **Business Logic**: Filtering & pagination calculations
* **UI Layer**: Components display data & handle interactions

---

## ✉️ Author

Wessam Mohamed - [GitHub](https://github.com/WessamMohamed22)
