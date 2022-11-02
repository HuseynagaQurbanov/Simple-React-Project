import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/card";
import Collapse from "./components/collapse";

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card-group">
            <div className="col-3">
              <Collapse id="first">
                <Card
                  cardDesc="UI/UX Designer"
                  updatedTime="12 hours ago online"
                  cardImg="https://picsum.photos/id/1/200/300"
                />
              </Collapse>
            </div>
            <div className="col-3">
              <Collapse id="second">
                <Card
                  cardTitle="Ferid"
                  cardDesc="Director"
                  updatedTime="3 hours ago online"
                  cardImg="https://picsum.photos/id/10/200/300"
                />
              </Collapse>
            </div>
            <div className="col-3">
              <Collapse id="third">
                <Card
                  cardTitle="Huseyn"
                  cardDesc="Front End Developer"
                  updatedTime="23 min ago online"
                  cardImg="https://picsum.photos/id/100/200/300"
                />
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
