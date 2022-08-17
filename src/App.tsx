import { FC } from "react";
import Header from "./components/common/Header";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen App ">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
