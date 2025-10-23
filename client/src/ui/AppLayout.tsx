import { Outlet } from 'react-router';

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>header here</div>
      <main className="flex grow p-2">
        <Outlet />
      </main>
      <footer>footer here</footer>
    </div>
  );
}
