import GoBackToCalendar from "../ui/GoBackToCalendar";
import AlertMessage from "../ui/AlertMessage";

export default function SportEventNotFound() {
  return (
    <>
      <GoBackToCalendar />
      <AlertMessage
        header="Event not found."
        message="The requested event could not be found."
      />
    </>
  );
}
