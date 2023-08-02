### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Promises and async await

- What is a Promise?

The Promise object is used for asynchronous computations. A Promise represents a value which may be available now, or in the future, or never.

- What are the differences between an async function and a regular function?

an async function does not block the execution loop as it completes.

- What is the difference between Node.js and Express.js?

Node.js is a runtime environment. Express.js is a framework based on node.js

- What is the error-first callback pattern?
  
Error-First Callback in Node.js is a function which either returns an error object or any successful data returned by the function.

- What is middleware?

Middleware is software designed to facilitate communication between multiple softwares.

- What does the `next` function do?

The next function moves to the next middleware function.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

Naming convention for consts is usually CAPS
The repeated parts of the URL could be put in a const
Promsise.all would be a more eloquent solution
There's no error handling.