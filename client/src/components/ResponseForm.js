import React, { useState } from "react";
import { Button, Input, FormField, Label } from "../styles/styles";

function ResponseForm({ user, id, handleFetchList }) {
  const [response, setResponse] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/responses/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        new_ice_breaker_id: id,
        response: response,
        user_id: user.id,
      }),
    }).then((r) => {
      if (r.ok) {
        handleFetchList();
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label>Leave a response:</Label>
        <Input
          type="text-area"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
      </FormField>
      <cite>
        created by: {user.username} 🌐{Date().toLocaleString("en-US")}
      </cite>
      <FormField>
        <Button color="primary" type="submit">
          Submit Response
        </Button>
      </FormField>
      <div>
        {errors.map((err) => (
          <p>error: {err.message}</p>
        ))}
      </div>
    </form>
  );
}

export default ResponseForm;
