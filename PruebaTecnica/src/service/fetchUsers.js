export async function fetchUsers() {
    const baseUrl = import.meta.env.SITE || "http://localhost:4321/";
    try {
      const response = await fetch(`${baseUrl}/dummy/mockData.json`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
  