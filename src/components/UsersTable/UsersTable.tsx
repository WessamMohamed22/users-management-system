import { useUsers } from "../../hooks/useUsers";

export const UsersTable = () => {
  const { users, setSelectedUser } = useUsers();

  return (
    <div className="overflow-x-auto mt-4  table-scrollbar">
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Company</th>
            <th className="py-2 px-4 text-left">City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="cursor-pointer hover:bg-gray-100 transition"
            >
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.company.name}</td>
              <td className="py-2 px-4">{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
