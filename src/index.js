import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// shortened below: ReactDOM.render(<App></App>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

/*
class Animal {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   // add another custom method
   speak(){
      console.log('I am', this.name, 'and I am', this.age, 'years old.');
   }
}

// create instances of the Animal class (these class instances are objects)
// ------------------------ invoke the constructor of the Animal class
const animal1 = new Animal('Simba', 3);
// call its speak method
animal1.speak();

// log the animal1 object
console.log(animal1);

class Lion extends Animal {
   constructor(name, age, furColor, speed) {
      // 'super' keyword invokes the constructor of the parent class
      super(name, age);
      this.furColor = furColor;
      this.speed = speed;
   }

   // new custom method
   roar() {
      console.log(
         'ROAR! I have', 
         this.furColor, 
         'fur, and I can run', 
         this.speed, 
         'miles per hour!'
         );
   }
}

// make an instance of the Lion class
const lion1 = new Lion('Mufasa', 20, 'golden', 25);
// we have access to the speak method, since it's extended from Animal
lion1.speak();
// call the new roar method
lion1.roar();
console.log(lion1);
*/