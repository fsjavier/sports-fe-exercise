import { SportEvent } from "../types";

const API_URL = "http://localhost:3000";

export async function fetchSportEvents() {
  const response = await fetch(`${API_URL}/data`);
  if (!response.ok) {
    throw new Error("Failed to fetch sport events");
  }
  // React Query expects a promise
  return response.json();
}

export async function createSportEvent(newEvent: SportEvent) {
  const response = await fetch(`${API_URL}/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  });

  if (!response.ok) {
    throw new Error("Failed to add sport event");
  }

  return response.json();
}
