import GoBackToCalendar from "./GoBackToCalendar";

interface ErrorMessageProps {
  header: string;
  message: string;
}

export default function ErrorMessage({ header, message }: ErrorMessageProps) {
  return (
    <>
      {location.pathname !== "/" && <GoBackToCalendar />}
      <div
        className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <h2 className="font-bold">{header}</h2>
        <p>{message}</p>
      </div>
    </>
  );
}
