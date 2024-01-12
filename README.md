# Asynchronous Operations and Promises

## Async Function:

When a function is marked as `async`, it means it will always return a promise. The use of the async keyword simplifies the syntax for working with promises and allows you to use the await keyword inside the function.

Here are some key points about async functions:

Return Type: An async function always returns a `Promise`. If the function returns a value, the promise will be resolved with that value. If the function `throws` an exception, the promise will be rejected with the thrown value.

`Await`: The `await` keyword can only be used inside an async function. It is used to wait for the resolution of a promise. When await is used, it pauses the execution of the async function until the promise is resolved, allowing asynchronous code to be written in a more synchronous style.

Error Handling: Inside an async function, you can use a `try-catch` block to handle errors. If a promise is rejected inside the async function, the control will jump to the nearest catch block.

### Promise and Reject:
A `Promise` in JavaScript represents the eventual completion or failure of an asynchronous operation. The `getStudent` function in the code down below returns a Promise object. The Promise constructor takes two arguments: resolve and reject. The resolve function is used to fulfill the promise with a result, and the reject function is used to reject the promise with a reason.

If a student is found during the asynchronous operation inside the getStudent function, the promise is resolved with the student as the result. On the other hand, if no student is found, the promise is rejected with the reason 'Student not found'.