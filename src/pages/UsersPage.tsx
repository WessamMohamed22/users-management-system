import { useUsers } from "../hooks/useUsers";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { CityFilter } from "../components/CityFilter/CityFilter";
import { UsersTable } from "../components/UsersTable/UsersTable";
import { UserDetails } from "../components/UserDetails/UserDetails";
import { Pagination } from "../components/Pagination/Pagination";
import { ExportButton } from "../components/ExportButton/ExportButton";

export const UsersPage = () => {
  const { loading, error, totalUsers, users, setSearch, setCity, search, city } = useUsers();

  // Loading State
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading users data...</p>
        <p className="text-sm text-gray-500">Please wait a moment</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="p-6">
        <div className="max-w-lg mx-auto bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">!</span>
              </div>
            </div>
            <h3 className="ml-3 text-lg font-medium text-red-800">Error Loading Data</h3>
          </div>

          <p className="text-red-700 mb-4">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  if (!totalUsers && (search || city)) {
    return (
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-primary">Users Management</h1>
          </div>
          <ExportButton />
        </div>

        <SearchBar />
        <CityFilter />

        <div className="mt-8 text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
          <div className="mb-4">
            <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">No users found</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            No users match your search criteria. Try adjusting your filters.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setCity("");
            }}
            className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear All Filters
          </button>
        </div>

        <UserDetails />
      </div>
    );
  }

  // Normal State
  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Users Management</h1>
            <p className="text-sm text-gray-600">
              Total: {totalUsers} users • Showing: {users.length} users
            </p>
          </div>
        </div>
        
        <ExportButton />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <SearchBar />
        <CityFilter />
      </div>

      {/* Table و Pagination */}
      {users.length > 0 ? (
        <>
          <UsersTable />
          <Pagination />
        </>
      ) : (
        <div className="mt-8 text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No users in current page</p>
        </div>
      )}

      <UserDetails />
    </div>
  );
};