import { useState, useEffect, useCallback } from 'react';
import { useUsers } from "../../hooks/useUsers";

// Debounce function
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const SearchBar = () => {
  const { search, setSearch, setPage } = useUsers();
  const [inputValue, setInputValue] = useState(search);
  const debouncedSearch = useDebounce(inputValue, 300);

  useEffect(() => {
    setInputValue(search);
  }, [search]);

  // Update context when debounced value changes
  useEffect(() => {
    setSearch(debouncedSearch);
    setPage(1);
  }, [debouncedSearch, setSearch, setPage]);

  // Clear button handler
  const handleClear = useCallback(() => {
    setInputValue("");
    setSearch("");
    setPage(1);
  }, [setSearch, setPage]);

  return (
    <div className="relative mb-3">
      <label htmlFor="search-input" className="mb-1 text-sm font-medium text-gray-700">
        Type to search
      </label>
      <div className="flex items-center">
        {/* Search Icon */}
        <div className="absolute left-3 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* Input */}
        <input
          id="search-input"
          type="text"
          placeholder="Search by name or email..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pl-10 pr-10 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-label="Search users"
        />
        
        {/* Clear Button */}
        {inputValue && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
    </div>
  );
};