export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Sport Events Calendar.</p>
      </div>
    </footer>
  );
}