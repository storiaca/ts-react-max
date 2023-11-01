import { type FormEvent } from "react";

const NewGoal = () => {
  function handleSumbit(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSumbit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
