export async function fetchUsers() {
    const baseUrl = import.meta.env.PROD ? import.meta.env.BASE_URL : 'http://localhost:4322';
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
  