import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Footer />
    </div>
  );
}
