import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchUsers } from "../api/users.api";
import type  { User } from "../types/user.types";

interface UsersContextType {
  users: User[];
  filteredUsers: User[]; 
  loading: boolean;
  error: string | null;

  search: string;
  setSearch: (value: string) => void;

  city: string;
  setCity: (value: string) => void;

  page: number;
  setPage: (value: number) => void;
  pageSize: number;

  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;

  totalUsers: number;
   allCities: string[];
}

const UsersContext = createContext<UsersContextType | null>(null);

export const UsersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

    const allCities = useMemo(() => {
    const uniqueCities = [...new Set(users.map(user => user.address.city))];
    return uniqueCities.sort();
  }, [users]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesCity = city ? user.address.city === city : true;

      return matchesSearch && matchesCity;
    });
  }, [users, search, city]);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, page]);

  return (
    <UsersContext.Provider
      value={{
        users: paginatedUsers,
        filteredUsers: filteredUsers,
        loading,
        error,
        search,
        setSearch,
        city,
        setCity,
        page,
        setPage,
        pageSize,
        selectedUser,
        setSelectedUser,
        totalUsers: filteredUsers.length,
        allCities,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsersContext must be used within UsersProvider");
  }
  return context;
};
