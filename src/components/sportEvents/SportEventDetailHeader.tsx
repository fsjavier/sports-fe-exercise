import GoBack from "../ui/GoBack";

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
  const validatedCompetitionName = competitionName || "N/A";

  return (
    <>
      <GoBack title="Calendar" />
      <div className="bg-blue-500 text-white p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold mb-2">
          {homeTeam} vs {awayTeam}
        </h2>
        <p className="text-sm">{validatedCompetitionName}</p>
      </div>
    </>
  );
}
