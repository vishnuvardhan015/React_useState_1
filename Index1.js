import { useState } from "react";

const Index1 = () => {
  const [count, setCount] = useState(true);
  const increment = () => {
    setCount(!count);
  };

  return (
    <section>
      <button onClick={increment}>{count ? "hide" : "show"}</button>
      {count ? (
        <div className="Data1">
          "orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        </div>
      ) : (
        <h3>Data Hidden</h3>
      )}
    </section>
  );
};

export default Index1;
