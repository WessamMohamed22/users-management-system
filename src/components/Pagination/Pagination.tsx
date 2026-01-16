import { useUsers } from "../../hooks/useUsers";
import type { PaginationProps } from "../../types/components.types";

export const Pagination: React.FC<PaginationProps> = ({ 
  className = "",
  showPageNumbers = true,
  showInfo = true,
  'data-testid': testId,
  'aria-label': ariaLabel
}) => {
  const { page, setPage, pageSize, totalUsers } = useUsers();
  const pagesCount = Math.ceil(totalUsers / pageSize);
  
  if (pagesCount <= 1) return null;

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < pagesCount) setPage(page + 1);
  };

  return (
    <div className={`mt-4 flex flex-col sm:flex-row items-center justify-between ${className}`}>
      {showInfo && (
        <div className="mb-3 sm:mb-0 text-sm text-gray-600">
          Showing page {page} of {pagesCount} • {totalUsers} users
        </div>
      )}
      
      <div className="flex items-center gap-2" data-testid={testId} aria-label={ariaLabel}>
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className={`px-3 py-1 rounded ${
            page === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Previous page"
        >
          &larr;
        </button>
        
        {/* Page Numbers */}
        {showPageNumbers && (
          <div className="flex gap-1">
            {Array.from({ length: pagesCount }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                disabled={page === i + 1}
                className={`px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label={`Go to page ${i + 1}`}
                aria-current={page === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
        
        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={page === pagesCount}
          className={`px-3 py-1 rounded ${
            page === pagesCount
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Next page"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};