# 🎯 Users Management Module - ERP System

## 📋 Scenario
Building a small module inside an ERP system that displays, filters, and manages users data.

## ✅ Core Requirements Implemented

### 1. ✅ Users List
- Fetches users from: `https://jsonplaceholder.typicode.com/users`
- Displays users in a responsive table with:
  - **Name**
  - **Email**
  - **Company Name**
  - **City**

### 2. ✅ Search & Filter
- **Real-time search** by:
  - Name
  - Email
- **Filter** by:
  - City (dynamic from API data)
- Requirements met:
  - Real-time search with 300ms debounce
  - No page refresh needed

### 3. ✅ User Details
- Clicking on a user opens a **modal** showing:
  - Full user information
  - Complete address details
  - Company details
- Modal features:
  - Close with ESC key
  - Click outside to close
  - Responsive design

### 4. ✅ State Management
- **Context API** used for global state
- Well-structured state organization
- **Avoided** excessive props drilling
- Custom hook: `useUsers()` for easy consumption

### 5. ✅ UX & Error Handling
- **Loading state**: Animated spinner with message
- **Error state**: User-friendly error display with retry button
- **Empty state**: Clear message when no results found

---

## ⭐ Bonus Features (All Implemented)

### ✅ Pagination
- Client-side pagination (5 users per page)
- Page reset on search/filter change
- Previous/Next navigation

### ✅ Memoization
- `useMemo` for:
  - Filtered users calculation
  - Paginated users slicing
  - Cities extraction from data
- `useCallback` for stable function references

### ✅ Responsive Design
- Fully responsive across all devices
- Mobile-first approach
- Breakpoints for tablet and desktop

### ✅ Clean Folder Structure
