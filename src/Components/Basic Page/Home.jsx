import Carts from "./Carts";
import Count from "./Count";
import Slider from "./Slider";
import WelcomeArea from "./WelcomeArea";
import Sale from "./Sale";
import "./Main.css";
import React, { useState, useEffect } from "react";

const Home = ({ query }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading(false), 10000);
  }, []);
  
  return (
    <div>
      <Slider />
      {loading ? (
        <div class="spinner-border m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          {" "}
          (
          <Carts query={query} />
          <WelcomeArea />
          <Count />
          <Sale />
        </div>
      )}
    </div>
  );
};

export default Home;
