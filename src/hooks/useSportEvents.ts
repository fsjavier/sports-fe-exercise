import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createSportEvent, fetchSportEvents } from "../services/apiMock";

export function useSportEvents() {
  return useQuery({
    queryKey: ["sportEvents"],
    queryFn: fetchSportEvents,
  });
}

export function useCreateSportEvent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createSportEvent,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["sportEvents"] });
      navigate(`/event/${data.id}`);
    },
    onError: (error: Error) => {
      console.error("Error adding sport event:", error);
    },
  });
}
