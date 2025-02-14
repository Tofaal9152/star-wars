import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <span className="text-blue-500 hover:underline">Go to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
