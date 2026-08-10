import { useState } from "react";

function Form() {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //prevent the reload/navigate during form submission
    if(!desc) return;

    const newIntem = {id: Date.now() ,desc, quantity, packed: false};
    console.log(newIntem)

    setDesc("")
    setQuantity(1)
  }
  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}> 
      <h3>What do you need for your trip? 😍</h3>
        
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input  //controlled element
        type="text" 
        placeholder="Item..."
        value={desc}  //e.target refers to the element that triggered the event.
        onChange={(e) => setDesc(e.target.value)} //e is the event object
      />

      <button>add</button>
    </form>
  );
}

export default Form;
