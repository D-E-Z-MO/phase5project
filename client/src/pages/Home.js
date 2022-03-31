import React from "react";
import "../components/FlipCard.css";
import NewIcebreakerList from "./NewIcebreaker";

function Home({ user }) {
  return (
    <>
      <h2 className="title">
        Hi <span className="title-span">{user.username}</span>!
      </h2>
      <h3>
        Starting conversations (or breaking the ice) can be difficult. Flip a
        card and reveal an introduction to make it a little easier.{" "}
      </h3>
      <h3>Click "More Intros" for the next set of cards. </h3>
      <h3>
        If you like the intro, leave a response to save it to "Show my
        icebreakers".
      </h3>

      <NewIcebreakerList user={user} />
    </>
  );
}

export default Home;
