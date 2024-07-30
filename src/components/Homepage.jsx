import Header from "./Header";
import HowTo from "./HowTo";
import Business from "./Business";
import styles from "@/style";
import Products from "./Products";
import Sub from "./Sub";
import Team from "./Team";
import Footer from "./Footer";
import WhatWeDo from "./HowToDo";

const Homepage = () => {
  return (
    <div>
      <Header />

      <div className={`bg-[#011730] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HowTo />
          <Team />
          <Sub />
          <WhatWeDo />
          <Products />
          <Business />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
