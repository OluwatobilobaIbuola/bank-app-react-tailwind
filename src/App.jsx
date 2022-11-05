import React, { useContext, useEffect } from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import { EventValues } from "./context/context";
import styles from "./styles";

const App = () => {
  const { mode, setMode } = useContext(EventValues);
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      setMode(mode.toLowerCase());
    }
  }, []);
  return (
    <div className={mode === "true" ? "dark" : ""}>
      <div className="dark:bg-primary w-full overflow-hidden relative transition ease-in-out duration-400">
        <div
          className={`fixed right-0 left-0 top-0 filter transition ease-in-out duration-400 h-[110px] ${styles.paddingX} ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div
          className={`mt-[110px] transition ease-in-out duration-400 dark:bg-primary ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div
          className={`dark:bg-primary transition ease-in-out duration-400 ${styles.paddingX} ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
            <Clients /> <CTA /> <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
