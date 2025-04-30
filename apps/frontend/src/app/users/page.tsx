/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchUsers } from "../lib/api";

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
