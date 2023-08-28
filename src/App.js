
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Allroute from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div >
      {location.pathname !== "/admin" ? (
        <Navbar />
      ) : (
        ""
      )}

      <div style={{ width: "80%", margin: "auto" }}>
        <Allroute />
      </div>
      {location.pathname !== "/admin" ? <Footer /> : ""}
    </div>
  );
}

export default App;
