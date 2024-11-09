import CreateSportsEventForm from "../components/form/CreateSportsEventForm";

export default function AddSportEventPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-5">Add New Sport Event</h2>
      <CreateSportsEventForm />
    </div>
  );
}
