import { Link } from 'react-router';

export default function About() {
  return (
    <div>
      <h4>Hello from main About</h4>
      <Link to="/about/details" className="bg-blue-500">
        Move to AboutDetails
      </Link>
    </div>
  );
}
