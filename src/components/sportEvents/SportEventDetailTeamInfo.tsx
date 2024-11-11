import { Flag } from "lucide-react";
import EventDetailIconElement from "../ui/EventDetailIconElement";
import { capitalizeFirstLetterOfEachWord } from "../../utils/textHelper";

interface Team {
  officialName: string;
  teamCountryCode?: string;
}

interface TeamInfoProps {
  homeTeam: Team;
  awayTeam: Team;
}

export default function SportEventDetailTeamInfo({
  homeTeam,
  awayTeam,
}: TeamInfoProps) {
  const validatedHomeTeamName = capitalizeFirstLetterOfEachWord(
    homeTeam.officialName
  );
  const validatedAwayTeamName = capitalizeFirstLetterOfEachWord(
    awayTeam.officialName
  );
  const validatedHomeTeamCountryCode = homeTeam.teamCountryCode || "N/A";
  const validatedAwayTeamCountryCode = awayTeam.teamCountryCode || "N/A";

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Teams</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EventDetailIconElement
          icon={<Flag className="mr-2 text-muted-500" size={20} />}
          label="Home"
          value={`${validatedHomeTeamName} (${validatedHomeTeamCountryCode})`}
        />
        <EventDetailIconElement
          icon={<Flag className="mr-2 text-muted-500" size={20} />}
          label="Away"
          value={`${validatedAwayTeamName} (${validatedAwayTeamCountryCode})`}
        />
      </div>
    </div>
  );
}
