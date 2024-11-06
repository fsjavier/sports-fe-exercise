const API_URL = "http://localhost:3000";

export async function fetchSportEvents() {
  const response = await fetch(`${API_URL}/data`);
  // React Query expects a promise
  return response.json();
}
