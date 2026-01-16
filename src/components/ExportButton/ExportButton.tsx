import { useUsers } from "../../hooks/useUsers";
import type { User } from "../../types/user.types"; 

interface ExportButtonProps {
  className?: string;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ className = "" }) => {
  const { users, filteredUsers } = useUsers();

  const handleExportCSV = () => {
    const dataToExport = filteredUsers.length > 0 ? filteredUsers : users;
    
    const headers = ["ID", "Name", "Email", "Phone", "City", "Company"];
    const csvRows = [
      headers.join(","),
      ...dataToExport.map((user: User) => [ 
        user.id,
        `"${user.name}"`,
        `"${user.email}"`,
        `"${user.phone}"`,
        `"${user.address.city}"`,
        `"${user.company.name}"`
      ].join(","))
    ];

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    
    a.href = url;
    a.download = `users_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    
    window.URL.revokeObjectURL(url);
  };

  const handleExportJSON = () => {
    const dataToExport = filteredUsers.length > 0 ? filteredUsers : users;
    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    
    a.href = url;
    a.download = `users_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={handleExportCSV}
        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        title="Export as CSV"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Export CSV
      </button>
      
      <button
        onClick={handleExportJSON}
        className="flex items-center gap-2 px-4 py-2 bg-export-blue text-white rounded-lg hover:bg-export-blue-h transition"
        title="Export as JSON"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
        Export JSON
      </button>
    </div>
  );
};