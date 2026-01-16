import { useUsersContext } from "../context/UsersContext";

export const useUsers = () => {
  return useUsersContext();
};
