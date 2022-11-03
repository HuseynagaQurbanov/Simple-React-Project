import React from "react";

class Collapse extends React.Component {
  state = {
    content: false,
  };

  showContent = () => {
    this.setState({ content: !this.state.content });
  };

  // componentDidMount(){
  //   console.log("component basladi");
  // }

  // componentDidUpdate(){
  //   console.log("component update olundu");
  // }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showContent}>
          {/* {this.props.children.props.cardTitle} */}

          {React.Children.map(this.props.children, children => children.props.cardTitle)}
        </button>

        {this.state.content ? (
          <div className="collapse show">
            {/* {this.props.children} */}

            {React.Children.map(this.props.children, children => children)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
