import { Calendar, Clock, Trophy, MapPin } from "lucide-react";
import { formatDate } from "../../utils/dateHelper";
import EventDetailIconElement from "../ui/EventDetailIconElement";
import { capitalizeFirstLetterOfEachWord } from "../../utils/textHelper";

interface SportEventDetailInfoProps {
  date: string;
  time: string;
  stage: string;
  stadium: string;
}

export default function SportEventDetailInfo({
  date,
  time,
  stage,
  stadium,
}: SportEventDetailInfoProps) {
  const formattedDate = formatDate(new Date(date), "MMMM d, yyyy");
  const validatedTime = time || "N/A";
  const validatedStage = capitalizeFirstLetterOfEachWord(stage);
  const validatedStadium = capitalizeFirstLetterOfEachWord(stadium);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <EventDetailIconElement
        icon={<Calendar className="mr-2 text-gray-500" size={20} />}
        label="Date"
        value={formattedDate}
      />
      <EventDetailIconElement
        icon={<Clock className="mr-2 text-gray-500" size={20} />}
        label="Time"
        value={validatedTime}
      />
      <EventDetailIconElement
        icon={<Trophy className="mr-2 text-gray-500" size={20} />}
        label="Stage"
        value={validatedStage}
      />
      <EventDetailIconElement
        icon={<MapPin className="mr-2 text-gray-500" size={20} />}
        label="Stadium"
        value={validatedStadium}
      />
    </div>
  );
}
