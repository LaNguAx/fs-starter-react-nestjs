import { Link, Outlet } from 'react-router';

export default function AboutLayout() {
  return (
    <div>
      <Outlet />
      <Link to="/" className="bg-blue-500">
        Move to home
      </Link>
    </div>
  );
}
