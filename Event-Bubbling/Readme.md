# Event Bubbling

- After we click a child element in the DOM tree, the event gets bubble out up the hierarchy and the parent element also experience the same event.

- This phenomenon is known as `Event Bubbling`

- In order to prevent this we can use `event.stopPropagation()` method in the element prior to the element in which we don't want it to occur.

- `Event Bubbling` travels from inwards to outwards whereas `Event Capturing` travels from outwards to inward.

- For example: If we click the child element in the DOM hierarchy the code present in the parent elements will run like this:
    `grandparent element -> parent element -> child element`

- We can stop `Event Capturing` by introducing a boolean flag of `false` after the callback function added to the  `.addEventListener` method.