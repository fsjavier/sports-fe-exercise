import { EventSport, EventStatus } from "../types";

export const EVENT_STATUS_OPTIONS: { value: EventStatus; label: string }[] = [
  { value: EventStatus.All, label: "All" },
  { value: EventStatus.Scheduled, label: "Scheduled" },
  { value: EventStatus.Played, label: "Played" },
  { value: EventStatus.Cancelled, label: "Cancelled" },
];

export const EVENT_SPORT_OPTIONS: { value: EventSport; label: string }[] = [
  { value: EventSport.All, label: "All" },
  { value: EventSport.Football, label: "Football" },
  { value: EventSport.Basketball, label: "Basketball" },
  { value: EventSport.Hockey, label: "Hockey" },
  { value: EventSport.Rugby, label: "Rugby" },
  { value: EventSport.AmericanFootball, label: "American Football" },
  { value: EventSport.Other, label: "Other" },
];
