import { Link } from 'react-router';

export default function Footer() {
  return (
    <div>
      This is the Footer content
      <br />
      <Link to={'/'} className="bg-blue-300">
        Go back home
      </Link>
    </div>
  );
}
