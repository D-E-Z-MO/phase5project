import React, { useState, useEffect, createRef } from "react";
import "../components/FlipCard.css";
import IcebreakerList from "./IcebreakerList";

function Home({ user }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <h2 className="title">
        Hi <span className="title-span">{user.username}</span>!
      </h2>
      <h3>
        Starting conversations (or breaking the ice) can be difficult. Flip a
        card and reveal an introduction to make it a little easier.{" "}
        <h3>
          Click "More Intros" for the next set of six cards.{" "}
          <h3>
            If you like the intro, leave a response to save it to your
            favorites.
          </h3>
        </h3>
      </h3>
      <IcebreakerList />
    </>
  );
}

export default Home;
