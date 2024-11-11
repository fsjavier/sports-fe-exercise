import CreateSportsEventForm from "../components/form/CreateSportsEventForm";

export default function AddSportEventPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-white bg-secondary-900 p-6 rounded-t-lg">
        Add New Sport Event
      </h2>

      <div className="p-6 rounded-b-lg shadow-md">
        <CreateSportsEventForm />
      </div>
    </div>
  );
}
