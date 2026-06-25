import React from "react";
import ReactDOM from "react-dom/client";

function SignPanel() {
  return (
    <div>
      <h1>Alfabeto em sinais</h1>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200">
          <rect width="100" height="100" fill="lightgray" />
        </svg>
      </div>

      <p>Teste</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignPanel />
  </React.StrictMode>
);