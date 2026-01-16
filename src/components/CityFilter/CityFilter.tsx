import { useUsers } from "../../hooks/useUsers";
import type { CityFilterProps } from "../../types/components.types";

export const CityFilter: React.FC<CityFilterProps> = ({ 
  className = "",
  showLabel = true,
  'data-testid': testId,
  'aria-label': ariaLabel
}) => {
  const { city, setCity, setPage, allCities, loading } = useUsers();
  
  if (loading) {
    return (
      <select
        disabled
        className={`mb-4 p-2 border border-gray-300 rounded shadow-sm bg-gray-100 ${className}`}
        data-testid={testId}
        aria-label={ariaLabel}
      >
        <option>Loading cities...</option>
      </select>
    );
  }
  
  return (
    <div className="flex flex-col">
      {showLabel && (
        <label htmlFor="city-filter" className="mb-1 text-sm font-medium text-gray-700">
          Filter by City
        </label>
      )}
      <select
        id="city-filter"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setPage(1);
        }}
        className={`mb-4 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        data-testid={testId || "city-filter"}
        aria-label={ariaLabel || "Filter users by city"}
      >
        <option value="">All Cities ({allCities.length})</option>
        {allCities.map((cityName) => (
          <option key={cityName} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>
    </div>
  );
};