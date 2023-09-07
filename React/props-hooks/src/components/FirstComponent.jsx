/* eslint-disable react/prop-types */
const ModalComponent = (props) => {
  return (
    <div className="modal">
      <p>It is an modal</p>
      <h1>{props.user}</h1>
      <button onClick={props.onClick}>Close</button>
    </div>
  );
};
export default ModalComponent;
