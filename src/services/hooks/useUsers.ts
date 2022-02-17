import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number) {
  const { data, headers } = await api.get<GetUsersResponse>('users', {
    params: {
      page
    }
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt
    }
  });

  return {
    totalCount,
    users
  };
}

export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //10 minutes
    ...options
  }) as UseQueryResult<GetUsersResponse, unknown>
} 