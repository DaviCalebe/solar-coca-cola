import React from 'react';
import "./alert.css";

const Alert = ({ type, message }) => {
  let className;
  let icon;

  if (type === 'success') {
    className = 'alert-success';
    icon = '✔️';
  } else if (type === 'error') {
    className = 'alert-error';
    icon = '❌';
  }

  return (
    <div className={`alert ${className}`}>
      <span>{icon}</span>
      <p>{message}</p>
    </div>
  );
};

export default Alert;