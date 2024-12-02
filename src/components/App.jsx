import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App(props) {
  return (
    <div>
      {contacts.map((contact, index) => (
        <Card
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
