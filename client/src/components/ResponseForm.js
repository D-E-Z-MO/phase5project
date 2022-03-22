import React, { useState } from "react";
import { Button, Input, FormField, Label } from "../styles";

function ResponseForm({ user, icebreaker, history, addIcebreaker }) {
  const [response, setResponse] = useState("");
  const [errors, setErrors] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        response,
      }),
    }).then((r) => {
      if (r.ok) {
        history.push("/");
        addIcebreaker(r);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label>Description:</Label>
        <Input
          type="text-area"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
      </FormField>
      <cite>
        created by: {user} {Date().toLocaleString("en-US")}
      </cite>
      <FormField>
        <Button color="primary" type="submit">
          Submit Response
        </Button>
      </FormField>
    </form>
  );
}

export default ResponseForm;
