import Carts from "./Carts";
import Count from "./Count";
import Slider from "./Slider";
import WelcomeArea from "./WelcomeArea";
import Sale from "./Sale";
import "./Main.css";
import React, { useState, useEffect } from "react";
import Main from "./Main";

const Home = ({ query }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading(false), 10000);
  }, []);

  return (
    <div>
      <Main query={query} />
    </div>
  );
};

export default Home;
