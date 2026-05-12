import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <section className="max-w-xl text-center space-y-6">
        <p className="text-primary font-semibold">404</p>
        <h1 className="text-4xl md:text-5xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you are looking for may have moved or no longer exists.
        </p>
        <Link to="/" className="cosmic-button inline-flex">
          Return home
        </Link>
      </section>
    </main>
  );
};
