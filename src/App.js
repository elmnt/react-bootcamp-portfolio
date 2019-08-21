import React, { Component } from 'react';

/*
class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);
*/

class App extends Component {

   constructor(){
      super();
      this.state = { displayBio: false };

      // allow the helper method to access the 'this' of the Component
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
   }

   // setState is a helper method in the Component class
   // its input is an object
   toggleDisplayBio() {
      this.setState({ displayBio: !this.state.displayBio });
   }

   render(){

      // option, remove this as a const and just put the whole thing
      // in place of the bio variable, below, in the JSX
      /*
      const bio = this.state.displayBio ? (
         <div>
            <p>I am a robot.</p>
            <p>I will race you.</p>
            <p>My skin is very shiny.</p>
         </div>
      ) : null;
      */

      // this can be replaced with a ternary expression, shown above
      // and then change bio from let to const, since it's never reassigned?
      /*
      if (!this.state.displayBio){
         bio = null;
      }
      */

      return (
         <div>
            <h1>Hello</h1>
            <p>All your base are belong to me.</p>
            {
               this.state.displayBio ? (
                  <div>
                     <p>I am a robot.</p>
                     <p>I will race you.</p>
                     <p>My skin is very shiny.</p>
                     <button onClick={this.toggleDisplayBio}>Show Less</button>
                  </div>
               ) : (
                  <button onClick={this.toggleDisplayBio}>Read More</button>
               )
            }
         </div>
      )
   }

}

export default App;
