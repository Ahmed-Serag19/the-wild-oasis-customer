import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">Cant find this Cabin</h1>
      <Link
        href="/cabins"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go back to Cabins
      </Link>
    </main>
  );
};

export default NotFound;
