import { Link } from '../components';

export default function Home(): JSX.Element {
  return (
    <main>
      <h1>Rooms</h1>
      <div>
        <div>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vercel
          </Link>
        </div>
      </div>
    </main>
  );
}
