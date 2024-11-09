import AlertMessage from "../ui/AlertMessage";
import GoBackToCalendar from "../ui/GoBackToCalendar";

export default function SportEventMissingData() {
  return (
    <>
      <GoBackToCalendar />
      <AlertMessage
        header="Event data is missing important information."
        message="Please try again later."
      />
    </>
  );
}
