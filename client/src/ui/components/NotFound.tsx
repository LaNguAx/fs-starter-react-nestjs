import { Link, useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  function refreshPage() {
    navigate(0);
  }

  return (
    <section className="w-full flex flex-col items-center justify-center text-center gap-3 py-8">
      <h1 className="text-2xl font-semibold">Oops!</h1>
      <p className="text-gray-700">Page not found..</p>
      <div className="flex gap-3">
        <button className="px-3 py-1 rounded bg-blue-600 text-white" onClick={refreshPage}>
          Retry
        </button>
        <Link to="/" className="px-3 py-1 rounded bg-gray-200">
          Go Home
        </Link>
      </div>
    </section>
  );
}
