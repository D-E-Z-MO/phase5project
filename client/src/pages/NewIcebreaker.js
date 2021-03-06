import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/FlipCard.css";
import MoreButton from "../components/MoreButton.js";
import { FlipCard } from "../components/FlipCard.js";

function NewIcebreakerList({ user }) {
  let initialPage = 0;
  const [seeIceBreakers, setIceBreakers] = useState([]);
  const [currentPage, setPage] = useState(initialPage);

  const handleNextPage = () => {
    setPage(currentPage + 1);
  };

  const removeIntro = (id) => {
    fetch(`newicebreakers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setIceBreakers(
      seeIceBreakers.filter((i) => {
        return i.id !== id;
      })
    );
  };

  // get all NewIcebreakers
  useEffect(() => {
    fetch("/newicebreakers")
      .then((res) => res.json())
      .then((data) => setIceBreakers(data));
  }, []);

  //update icebreakers
  const updateIcebreaker = (id, flames) => {
    //PATCH
    let flames_a = flames + 1;
    fetch(`/newicebreakers/${id}`, {
      method: "POST",
      body: JSON.stringify({ flames: flames_a }),
    }).then(() => {
      setIceBreakers(
        seeIceBreakers.map((ice) => {
          if (ice.id === id) {
            ice.flames = flames;
          }
          return ice;
        })
      );
    });
  };
  const intros = seeIceBreakers.slice(currentPage * 3, (currentPage + 1) * 3);

  return (
    <div className="card-container">
      {Array.from(intros).map((ice) => (
        <div className="card-item-container" key={ice.id}>
          <FlipCard
            content={ice.content}
            tags={ice.tags}
            flames={ice.flames}
            key={ice.id}
            id={ice.id}
            user={user}
            removeIntro={removeIntro}
            seeIceBreakers={seeIceBreakers}
            updateIcebreaker={() => updateIcebreaker(ice.id, ice.flames + 1)}
          />
        </div>
      ))}
      <div className="more-btn-primary">
        <div className="more-btn-container">
          <MoreButton nextPage={handleNextPage} />
        </div>
      </div>
    </div>
  );
}

export default NewIcebreakerList;
