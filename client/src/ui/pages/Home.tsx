import { Link } from 'react-router';

export default function Home() {
  return (
    <div>
      home
      <br />
      <Link to={'/todos'} className="bg-green-400">
        Go to todos
      </Link>
    </div>
  );
}
