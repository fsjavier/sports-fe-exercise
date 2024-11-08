interface Result {
  homeGoals: number;
  awayGoals: number;
  winner: string | null;
}

interface EventResultProps {
  result: Result | null;
}

export default function SportEventDetailResult({ result }: EventResultProps) {
  if (!result) return null;

  const checkedHomeGoals = result.homeGoals || "N/A";
  const checkedAwayGoals = result.awayGoals || "N/A";
  const checkedWinner = result.winner || "N/A";

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Result</h3>
      <p>
        <span className="font-semibold">Score:</span> {checkedHomeGoals} -{" "}
        {checkedAwayGoals}
      </p>
      {checkedWinner && (
        <p>
          <span className="font-semibold">Winner:</span> {checkedWinner}
        </p>
      )}
    </div>
  );
}
