import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      content: false,
    };
  }

  showContent = () => {
    this.setState({content: !this.state.content})
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showContent}>Collapse</button>

        {this.state.content ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
