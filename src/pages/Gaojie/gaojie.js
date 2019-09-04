import React, { Component } from "react";

const Gaojie = WrappedComponent => {
  console.log("Gaojie");
  return class Gaojie extends Component {
    
    handleClick() {
      console.log("click");
    }
    // componentDidMount() {
    //   console.log("instanceComponent", this.instanceComponent);
    // }
    render() {
      console.log("this", this);
      return (
        <WrappedComponent
          // a={444}
          // ref={
          //   instanceComponent =>
          //   (this.instanceComponent = instanceComponent)
          // }
          handleClick={this.handleClick}
          {...this.props}
        />
      );
      return super.render();
    }
  };
};
// const Gaojie = WrappedComponent => class extends WrappedComponent {
//   render() {
//     console.log(11,super.render());
//     return super.render();
//   }
// }

// const hijackRenderHoc = config => WrappedComponent => 
// class extends WrappedComponent {
//   render() {
//     const { style = {} } = config;
//     const elementsTree = super.render();
//     console.log(elementsTree, 'elementsTree');
//     if (config.type === 'add-style') {
//       return <div style={{...style}}>
//         {elementsTree}
//       </div>;
//     }
//     return elementsTree;
//   }
// };

export default Gaojie;
