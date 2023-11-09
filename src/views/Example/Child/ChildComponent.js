import React, { Component } from "react";
class ChildComponent extends Component {
  state = {};
  render() {
    let { user, pass } = this.props;
    return (
      <>
        <div>
          This child have: {user} and {pass}
        </div>
      </>
    );
  }
}
export default ChildComponent;
