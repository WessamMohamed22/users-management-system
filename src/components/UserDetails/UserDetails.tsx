import { useUsers } from "../../hooks/useUsers";
import { useEffect } from "react"; 

export const UserDetails = () => {
  const { selectedUser, setSelectedUser } = useUsers();
  

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedUser(null);
      }
    };
    
    if (selectedUser) {
      document.addEventListener('keydown', handleEsc);

      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [selectedUser, setSelectedUser]);
  
  if (!selectedUser) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={() => setSelectedUser(null)} // Close when clicking backdrop
    >
      <div 
        className="bg-white p-6 max-w-lg w-full rounded-lg shadow-xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedUser.name}</h2>
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>{selectedUser.email}</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Info
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> {selectedUser.phone}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Website:</span> 
                  <a href={`http://${selectedUser.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    {selectedUser.website}
                  </a>
                </p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>{selectedUser.address.street}</p>
                <p>{selectedUser.address.suite}</p>
                <p>{selectedUser.address.city}, {selectedUser.address.zipcode}</p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Company
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">{selectedUser.company.name}</h4>
              <p className="text-sm text-gray-600 italic mb-3">"{selectedUser.company.catchPhrase}"</p>
              <p className="text-sm text-gray-500">{selectedUser.company.bs}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            User ID: {selectedUser.id}
          </p>
        </div>
      </div>
    </div>
  );
};