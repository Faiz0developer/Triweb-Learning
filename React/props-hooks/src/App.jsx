import { useState } from "react";
import ModalComponent from "./components/FirstComponent";

function App() {
  const [modalIsHidden, setModalIsHidden] = useState(false);

  const HideModalHandlere = () => {
    setModalIsHidden(true);
  };
  return (
    <>
      <h1>First React app</h1>
      <button
        onClick={() => {
          setModalIsHidden(false);
        }}
      >
        Open Modal
      </button>
      {modalIsHidden ? null : (
        <ModalComponent user="Faizan" onClick={HideModalHandlere} />
      )}
    </>
  );
}

export default App;
