import { ChangeEvent, FormEvent, useState } from "react";
import {
  EVENT_STATUS_OPTIONS,
  EVENT_SPORT_OPTIONS,
} from "../../utils/constants";
import ErrorMessage from "../ui/ErrorMessage";
import { EventSport, EventStatus, SportEvent } from "../../types";
import { useCreateSportEvent } from "../../hooks/useSportEvents";
import FormInputField from "./FormInputField";
import FormSelectField from "./FormSelectField";

export default function CreateSportsEventForm() {
  const [formData, setFormData] = useState({
    sport: "",
    status: "",
    timeVenueUTC: "",
    dateVenue: "",
    homeTeamName: "",
    homeTeamScore: "",
    awayTeamName: "",
    awayTeamScore: "",
    originCompetitionName: "",
  });

  const { mutate: addEvent, isPending, isError, error } = useCreateSportEvent();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sportEvent: SportEvent = {
      ...formData,
      sport: formData.sport as EventSport,
      status: formData.status as EventStatus,
      season: new Date(formData.dateVenue).getFullYear(),
      homeTeam: {
        name: formData.homeTeamName,
        officialName: formData.homeTeamName,
        slug: formData.homeTeamName.toLowerCase().replace(" ", "-"),
        abbreviation: formData.homeTeamName,
      },
      awayTeam: {
        name: formData.awayTeamName,
        officialName: formData.awayTeamName,
        slug: formData.awayTeamName,
        abbreviation: formData.awayTeamName,
      },
      result: {
        homeGoals: parseInt(formData.homeTeamScore),
        awayGoals: parseInt(formData.awayTeamScore),
      },
      id: new Date().toISOString(),
      originCompetitionId: formData.originCompetitionName
        .toLowerCase()
        .replace(" ", "-"),
    };

    addEvent(sportEvent);
  };
  // Score fields are not required
  function isFormComplete() {
    const requiredFields: (keyof typeof formData)[] = [
      "sport",
      "status",
      "timeVenueUTC",
      "dateVenue",
      "homeTeamName",
      "awayTeamName",
      "originCompetitionName",
    ];

    return requiredFields.every((field) => formData[field].trim() !== "");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="text-sm text-muted-900 mb-4">
        Fields marked with <span className="text-accent-900">*</span> are
        required.
      </div>
      <FormSelectField
        id="sport"
        name="sport"
        label="Sport"
        value={formData.sport}
        options={EVENT_SPORT_OPTIONS}
        onChange={handleChange}
        required
      />
      <FormInputField
        id="homeTeamName"
        name="homeTeamName"
        label="Home Team"
        type="text"
        value={formData.homeTeamName}
        onChange={handleChange}
        minLength={3}
        maxLength={100}
        required
      />
      <FormInputField
        id="homeTeamScore"
        name="homeTeamScore"
        label="Home Team Score"
        type="number"
        value={formData.homeTeamScore}
        onChange={handleChange}
        min={0}
        max={400}
      />
      <FormInputField
        id="awayTeamName"
        name="awayTeamName"
        label="Away Team"
        type="text"
        value={formData.awayTeamName}
        onChange={handleChange}
        minLength={3}
        maxLength={100}
        required
      />
      <FormInputField
        id="awayTeamScore"
        name="awayTeamScore"
        label="Away Team Score"
        type="number"
        value={formData.awayTeamScore}
        onChange={handleChange}
        min={0}
        max={400}
      />
      <FormInputField
        id="dateVenue"
        name="dateVenue"
        label="Date"
        type="date"
        value={formData.dateVenue}
        onChange={handleChange}
        required
      />
      <FormInputField
        id="timeVenueUTC"
        name="timeVenueUTC"
        label="Time (UTC)"
        type="time"
        value={formData.timeVenueUTC}
        onChange={handleChange}
        required
      />
      <FormInputField
        id="originCompetitionName"
        name="originCompetitionName"
        label="Competition"
        type="text"
        value={formData.originCompetitionName}
        onChange={handleChange}
        minLength={3}
        maxLength={100}
        required
      />
      <FormSelectField
        id="status"
        name="status"
        label="Status"
        value={formData.status}
        options={EVENT_STATUS_OPTIONS}
        onChange={handleChange}
        required
      />
      <div className="flex justify-center flex-col mt-10">
        <button
          type="submit"
          disabled={!isFormComplete() || isPending}
          className="w-full font-bold py-2 px-4 border rounded-md text-sm text-white bg-secondary-500 hover:bg-secondary-900 focus:ring-offset-1 focus:ring-1 focus:ring-secondary-500 disabled:bg-secondary-100 disabled:cursor-not-allowed"
        >
          {isPending ? "Adding..." : "Add Event"}
        </button>
        <div className="mt-8">
          {isError && (
            <ErrorMessage
              header="Error adding event"
              message={`${error}. Please try again later`}
            />
          )}
        </div>
      </div>
    </form>
  );
}
