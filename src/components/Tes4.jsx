import React, { useState } from "react";

const Modal = ({ isOpen, setisOpen, title, description }) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              width: "100vw",
              height: "100vh",
              position: "absolute",
              zIndex: 50,
              top: 0,
              left: 0,
            }}
            onClick={() => setisOpen(false)}
          ></div>
          <div
            style={{
              zIndex: 51,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              width: "50%",
              height: "50%",
            }}
          >
            <div style={{ position: "relative" }}>
              <button
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
                onClick={() => setisOpen(false)}
              >
                X
              </button>

              <h1>{title}</h1>

              <p>{description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

function Tes4() {
  const [isOpen, setisOpen] = useState(false);
  const [Text, setText] = useState("");
  const [Desc, setDesc] = useState("");

  return (
    <div>
      <button onClick={() => setisOpen(true)}>Open Modal</button>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <input
          type="text"
          placeholder="title modal"
          onChange={(e) => setText(e.target.value)}
          value={Text}
        />

        <textarea
          name=""
          id=""
          placeholder="description modal"
          onChange={(e) => setDesc(e.target.value)}
          value={Desc}
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <Modal
        isOpen={isOpen}
        setisOpen={setisOpen}
        title={Text ? Text : "Default title"}
        description={Desc ? Desc : "Default description"}
      />
    </div>
  );
}

export default Tes4;
