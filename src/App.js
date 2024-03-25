import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 3;
  const [step, setStep] = useState(1);
  //const [test] = useState({ name: "Jonas" });
  const [isOpen, setIsOpen] = useState(true);

  function updatePrevous() {
    if (step > 1) setStep((s) => s - 1);
  }
  function updateNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={updatePrevous}
            >
              Step {step}
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={updateNext}
            >
              Step {step}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
