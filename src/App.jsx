import React from "react";
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
import styles from "./styles";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden relative">
      <div
        className={`fixed right-0 left-0 top-0 filter h-[70px] ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`mt-[70px] bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
          <Clients /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
