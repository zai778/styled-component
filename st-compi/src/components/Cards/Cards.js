import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./Cards.css";
function Cards() {
  return (
    <UncontrolledCarousel
      className="carousel"
      items={[
        {
          key: 1,
          src: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          key: 2,
          src: "https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1610&q=80",
        },
        {
          key: 3,
          src: "https://www.myglobalviewpoint.com/wp-content/uploads/2018/03/Best-Travel-Quotes-to-Fuel-Your-Wanderlust-1170x774.jpg",
        },
      ]}
    />
  );
}
export default Cards;
