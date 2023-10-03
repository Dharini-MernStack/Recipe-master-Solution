import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import server from "./server";

if (process.env.NODE_ENV === "development") {
  server();
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
