import GoBackToCalendar from "../components/ui/GoBackToCalendar";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-secondary-900 mt-4">
      <h2 className="text-2xl mb-8">Oops!</h2>
      <p className="text-lg mb-8 text-center max-w-md text-primary-900">
        The page you are looking for might have been removed, has changed or is
        unavailable.
      </p>
      <GoBackToCalendar />
    </div>
  );
}
