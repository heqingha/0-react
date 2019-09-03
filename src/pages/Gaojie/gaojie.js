import React, { Component } from "react";

// const Gaojie = WrappedComponent => {
//   console.log("Gaojie");
//   return class Gaojie extends Component {
    
//     handleClick() {
//       console.log("click");
//     }
//     // componentDidMount() {
//     //   console.log("instanceComponent", this.instanceComponent);
//     // }
//     render() {
//       console.log("props", this.props);
//       // return (
//       //   <WrappedComponent
//       //     a={444}
//       //     ref={
//       //       instanceComponent =>
//       //       (this.instanceComponent = instanceComponent)
//       //     }
//       //     handleClick={this.handleClick}
//       //     {...this.props}
//       //   />
//       // );
//       return super.render();
//     }
//   };
// };
const Gaojie = WrappedComponent => class extends WrappedComponent {
  render() {
    console.log(11,this.state);
    return super.render();
  }
}



export default Gaojie;
