import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import NewIcebreaker from "./NewIcebreaker.js";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SignUpForm from "../components/SignupForm";
import IcebreakerList from "./IcebreakerList.js";
import IcebreakersForm from "../components/IcebreakersForm.js";

function App() {
  const [user, setUser] = useState(null);
  const [seeIceBreakers, setIceBreakers] = useState([]);
  const history = useHistory();

  // handle auth
  const onAuth = (user) => {
    setUser(user);
  };

  const addIceBreaker = (i) => {
    setIceBreakers((icebreakers) => [...icebreakers, i]);
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((u) => setUser(u));
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <div>
          <NavBar user={user} setUser={setUser} />
          <main>
            <Switch>
              <Route exact path="/">
                <Home user={user} />
              </Route>
              <Route path="/me">
                <Home user={user} />
              </Route>
              <Route path="/newicebreakers">
                <IcebreakersForm
                  user={user}
                  addIcebreaker={addIceBreaker}
                  setIceBreakers={setIceBreakers}
                />
              </Route>
              <Route path="/icebreakers">
                <IcebreakerList
                  user={user}
                  setIceBreakers={setIceBreakers}
                  addIcebreaker={addIceBreaker}
                />
              </Route>
            </Switch>
          </main>
        </div>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUpForm user={user} />
          </Route>
          <Route path="/">
            <Login onLogin={onAuth} history={history} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
