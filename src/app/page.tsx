import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Navigation />
      <main className="flex-grow">
        <h1>Welcome to the homepage</h1>
        <Link href="/products" className="font-weight-500 underline">Go to products page</Link>
      </main>
      <Footer />
    </div>
  );
}
