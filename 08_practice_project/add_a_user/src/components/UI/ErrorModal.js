import React from "react";

import Card from "./Card";
import Button from "./Button";

import errorModalStyles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={errorModalStyles.backdrop} onClick={props.onConfirm} />
      <Card className={errorModalStyles.modal}>
        <header className={errorModalStyles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={errorModalStyles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={errorModalStyles.actions}>
          <Button type="button" onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
