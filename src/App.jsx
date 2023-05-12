import { AllRoutes } from "./routes/AllRoutes";

import "./App.css";
import { Header } from "./components/Layout/Header";
import { Nav } from "./components";

function App() {
  return (
    <>
      <Nav />

      <main className="main">
        <Header />

        <AllRoutes />
      </main>
    </>
  );
}

export default App;
