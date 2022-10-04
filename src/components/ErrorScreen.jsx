import React from "react";
import './styles/errorScreen.css'

const ErrorScreen = () => {
  return (
    <div className="errorContainer">
      <h2>This location is not found 😢</h2>
      <h1>ERROR 404</h1>
      <h3>Try to write another place or number valid between 1 and 126</h3>
    </div>
  );
};

export default ErrorScreen;
