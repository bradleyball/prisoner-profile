import React, { useState } from "react";
import Prisoner from "./Prisoner";

const Prisoners = props => {
  const [prisonerPosts, setPrisonerPosts] = useState(props.prisonerPost);
  const [editing2, setEditing2] = useState(false);
  return (
    <section>
      {props.prisonerPost.map(post => (
        <Prisoner {...post} editing2={editing2} setEditing2={setEditing2} />
      ))}

      {console.log(prisonerPosts)}
    </section>
  );
};

export default Prisoners;
