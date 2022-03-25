import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";
import "../components/FlipCard.css";

export default function IcebreakersForm({
  user,
  seeIceBreakers,
  setIceBreakers,
}) {
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const history = useHistory();
  const flames = 0;
  const addIceBreaker = (i) => {
    setIceBreakers((icebreakers) => [...icebreakers, i]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/icebreakers", {
      method: "POST",
      headers: {
        "Content-category": "application/json",
      },
      body: JSON.stringify({
        content: { content },
        category: { category },
        flames: 0,
        user: user,
        response: { response },
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
        addIceBreaker(r);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <div>
          <div className="new-intro-container">
            <h2>Create New Intro, also known as icebreakers</h2>
            <h4>Create tags to search by and give a question or activity. </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <Label>Category: </Label>
              <select
                category="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Activity">Activity</option>
                <option value="Question">Question</option>
              </select>
            </div>
            <FormField>
              <Label>Write your icebreaker:</Label>
              <Input
                category="string"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Label>
                Give your response to the question or outcome of the activty
                here:
              </Label>
              <Input
                category="string"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
              />
            </FormField>
            <cite>
              By {user.username} {Date().toLocaleString()}
            </cite>
            <FormField>
              <Button color="primary" category="submit">
                {isLoading ? "Loading..." : "Submit Intro"}
              </Button>
            </FormField>
            <FormField>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField>
          </form>
        </div>
      </WrapperChild>
      <div className="">
        <h1>{content}</h1>
        <h3>{category}</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;
