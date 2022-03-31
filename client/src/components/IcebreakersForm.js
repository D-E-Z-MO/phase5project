import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles/styles";
import "../components/FlipCard.css";

export default function IcebreakersForm({
  user,
  addIceBreaker,
  setIceBreakers,
}) {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/icebreakers/${user.id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        tags: tags,
        flames: 0,
      }),
    }).then((r) => {
      setIsLoading(false);
      console.log(r);
      if (r.ok) {
        history.push(`/icebreakers/${user.id}`);
        setIceBreakers(r);
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
            <h2>Create a new intro, also known as icebreakers</h2>
            <h4>Create tags and provide a question or activity.</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <Label>Tags: </Label>
              <Input
                category="string"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <FormField>
              <Label>Write your icebreaker:</Label>
              <Input
                category="string"
                value={content}
                onChange={(e) => setContent(e.target.value)}
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
              {/* {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))} */}
            </FormField>
          </form>
        </div>
      </WrapperChild>
      <div className="">
        <h1>{tags}</h1>
        <h3>{content}</h3>
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
