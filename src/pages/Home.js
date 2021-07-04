import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // scrolls page to the top when rerendered
    window.scroll(0, 0);
  }, []);

  return <div>Home Page</div>;
};

export default Home;
