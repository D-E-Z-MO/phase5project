import { useEffect, useState } from "react";
import "../components/FlipCard.css";
import MoreButton from "../components/MoreButton.js";
import { IceCard } from "../components/IceCard.js";

function IcebreakerList() {
  let initialPage = 0;
  const [iceBreakers, setIceBreakers] = useState([]);
  const [currentPage, setPage] = useState(initialPage);

  //next set of cards per page
  const handleNextPage = () => {
    setPage(currentPage + 1);
  };

  // remove user icebreakers
  const removeIntro = (id) => {
    fetch(`icebreakers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setIceBreakers(
        iceBreakers.filter((i) => {
          return i.id !== id;
        }),
        window.location.reload()
      );
    });
  };

  // get all user icebreakers
  useEffect(() => {
    fetch(`/icebreakers`)
      .then((res) => res.json())
      .then((data) => setIceBreakers(data));
  }, []);
  console.log(iceBreakers);

  //update icebreakers
  const updateIcebreaker = (id, flames) => {
    //PATCH
    let flames_a = flames + 1;
    fetch(`/icebreakers/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ flames: flames_a }),
    }).then(() => {
      setIceBreakers(
        iceBreakers.map((ice) => {
          if (ice.id === id) {
            ice.flames = flames;
          }
          return ice;
        })
      );
    });
  };

  return (
    <>
      {iceBreakers && iceBreakers.length > 0 ? (
        <div className="card-container">
          {iceBreakers.map((ice) => (
            <div className="card-item-container" key={ice.id}>
              <IceCard
                content={ice.content}
                tags={ice.tags}
                flames={ice.flames}
                key={ice.id}
                id={ice.id}
                removeIntro={removeIntro}
                updateIcebreaker={() =>
                  updateIcebreaker(ice.id, ice.flames + 1)
                }
              />
            </div>
          ))}
          <div className="more-btn-primary">
            <div className="more-btn-container">
              <MoreButton nextPage={handleNextPage} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <h3>No IceBreakers</h3>
          <h3>to add click "New IceBreaker" </h3>
        </>
      )}
    </>
  );
}

export default IcebreakerList;
