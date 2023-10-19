import Heading from "./Heading";
import Tile from "./Tile";
import Footer from "./footer";

export default function App() {
  return (
    <>
      <Heading />
      <div className="page-container">
        <Tile />
      </div>

      <Footer />
    </>
  );
}
