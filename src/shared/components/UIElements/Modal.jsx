import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <header className="modal__header">
        <h2>{props.header}</h2>
      </header>

      <div className="modal__content">
        {props.children}
      </div>

      <footer className="modal__footer">
        <button className="modal__btn" onClick={props.onCancel}>
          Close
        </button>
      </footer>
    </div>
  );
};

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCancel}></div>;
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}

      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;