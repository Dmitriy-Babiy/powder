const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchUsers() {
  const res = await fetch(`${baseUrl}/users`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
