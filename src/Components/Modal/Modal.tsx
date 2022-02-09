import './modal.css'

export const Modal: React.FunctionComponent = () => {
  return (
    <div className={"modal"}>
      <div className={"modalOverlay"} />
      <div className={"modalBox"}>
          <p className="gameOver">GAME IS OVER</p>
      </div>
    </div>
  );
};
