import React from 'react';

const Blogs = () => {
    return (
        <div className='px-16 mt-10'>
            <div tabIndex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p className='text-justify'>There are a number of ways in which React Application Permalink can be extended. And it doesn't depend on just one method. Many methods can be used to increase the parpommance of a react up. One of its uses is Using Immutable Data Structures to complete it depending on the programmer who developed the application. And a developer can easily use it in font-end and it has no side-effects. The best part of this is that the React app offers a lot of libary for optimization for exmple: Immutability Helper: This is a good library when it comes to mutating a data copy without changing the source. Immutable.js: This is my favorite library. As it provides a lot of persistent immutable data structures, including: List, Stack, Map, OrderedMap, Set, OrderedSet, and Record. Another efficient way to optimize the React application is to use function components.
                        function components with potentially faster updates.
                        Another efficient way is to use the pure components of React. Dependency optimization is another most efficient way to improve your React app and so many oye to improve your React app performance for example: CSS Animations Instead of JS Animations, Using a CDN, Using Web Workers for CPU Extensive Tasks, Analyzing and Optimizing Your Webpack Bundle Bloat, Avoid Async Initialization in, Spreading props on DOM elements.</p>
                </div>
            </div>
            <div tabIndex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p className='text-justify'>React component is basically a built-in state object. And the state is basically encapsulated data store assets that are persistent between component renderings. Redux is one of the most popular inside it. Redux was created to resolve this particular issue. it provides a central store that holds all states of your application. Each component can access the stored state without sending it from one component to another. And the reason Redux is so popular is that there was no serious alternative when it launched and it provided separation between state and actions. MobX is another popular component. In MobX, you create a JavaScript class with a makeObservable call inside the constructor that is your observable store (you can use @observable decorator if you have the appropriate loader) .Recoil is another latest popular component. Recoil is a relative newcomer, the latest brainchild of the React team. The basic idea behind it is a simple implementation of missing React features like shared state and derived data. Taking every advantage and disadvantage into account, and considering my personal experience, I hope Redux as the best option.</p>
                </div>
            </div>
            <div tabIndex="2" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p className='text-justify'>In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is named prototype.If an object has an own property and an inherited property with the same name, then JavaScript always picks the own property.When we read a property from object, and it's missing, JavaScript automatically takes it from the prototype. In programming, this is called "prototypal inheritance". And soon we’ll study many examples of such inheritance, as well as cooler language features built. So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                </div>
            </div>
            <div tabIndex="3" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React?
                </div>
                <div class="collapse-content">
                    <p className='text-justify'>There are some reasons not to set the state directly in React. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. If you update it directly, calling the setState () afterward may just replace the update you made.</p>
                </div>
            </div>
            <div tabIndex="4" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2">
                <div class="collapse-title text-xl font-medium ">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p className='text-justify'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. Unit testing is performed during the coding stage of a software development project to test individual units of the application. It’s designed to test that each unit of the software code performs as required. A unit might be a class or class method in object-oriented languages and a procedure or function in procedural and functional software languages.
                        Unit tests need to run quickly, so they run in isolation without external processes or systems. Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;