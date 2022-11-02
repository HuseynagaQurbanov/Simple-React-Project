import React from "react";

class Card extends React.Component {
  static defaultProps = {
    cardTitle: "Default Title",
  };

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.cardImg}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardDesc}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
