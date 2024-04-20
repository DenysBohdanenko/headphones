import React from "react";
import "./main.scss";
import { Hero, About, Results, Contact, Footer, Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
