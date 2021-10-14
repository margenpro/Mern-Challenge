import React from "react";

function ErrorMessage(props: any) {
  return (
    <div className="error-notice">
      <span>{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
}

export default ErrorMessage;
