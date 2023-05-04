import React from 'react';


const Blog = () => {
   
    return (
        <div className='container'>
            <h2>1. Tell us the differences between uncontrolled and controlled components.</h2>
            <p>Ans: An uncontrolled component is a component where the form data is handled by the DOM instead of the component itself. This means that the component does not have access to the current value of the input field or form data. Instead, the value of the input field is managed by the DOM, and can be accessed using the ref attribute.</p>
            <h2>2.How to validate React props using PropTypes</h2>
            <p>Ans: React PropTypes is a library that allows you to validate the props of your React components. It's used to catch bugs early by providing an easy way to validate the data types of the props passed to a component</p>
            <h2>3.Tell us the difference between nodejs and express js.</h2>
            <p>Ans: Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser. It provides an event-driven, non-blocking I/O model that makes it ideal for building scalable, high-performance network applications. Express.js, on the other hand, is a web framework for Node.js that provides a set of features for building web applications, such as routing, middleware, and template rendering. It allows you to define routes for handling HTTP requests, and provides a middleware system that allows you to modify and process requests and responses.</p>
            <h2>4.What is a custom hook, and why will you create a custom hook?</h2>
            <p>Ans: A custom hook in React is a JavaScript function that starts with the word "use" and allows you to reuse stateful logic across multiple components. Custom hooks provide a way to encapsulate common logic that can be shared across different components without the need for duplicating code.</p>
        </div>
    );
};

export default Blog;