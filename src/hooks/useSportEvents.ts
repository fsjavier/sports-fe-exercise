import { useQuery } from "@tanstack/react-query";
import { fetchSportEvents } from "../services/apiMock";

export default function useSportEvents() {
  return useQuery({
    queryKey: ["sportEvents"],
    queryFn: () => fetchSportEvents(),
  });
}
