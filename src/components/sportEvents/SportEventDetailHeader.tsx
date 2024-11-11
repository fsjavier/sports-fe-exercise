import GoBackToCalendar from "../ui/GoBackToCalendar";

interface SportEventDetailHeaderProps {
  homeTeam: string;
  awayTeam: string;
  competitionName: string;
}

export default function SportEventDetailHeader({
  homeTeam,
  awayTeam,
  competitionName,
}: SportEventDetailHeaderProps) {
  return (
    <>
      <GoBackToCalendar />
      <div className="bg-secondary-900 text-white p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold mb-2">
          {homeTeam} vs {awayTeam}
        </h2>
        <p className="text-sm">{competitionName}</p>
      </div>
    </>
  );
}
