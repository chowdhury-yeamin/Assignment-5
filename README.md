####Answer the following questions clearly:

1]What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS:
getElementById => Gets one element by its ID.
getElementsByClassName => Gets all elements with a class name (returns a collection).
querySelector => Gets the first element that matches a CSS selector.
querySelectorAll => Gets all elements that match a CSS selector (returns a NodeList).


2]How do you create and insert a new element into the DOM?
ANS:
const li = document.createElement("li"); 
li.textContent = "New Item";             
document.body.appendChild(li);   


3]What is Event Bubbling and how does it work?
ANS:
Event bubbling means that when an event (like click) happens on a child element, it also triggers on its parent and then its parent's parent and so on.


4]What is Event Delegation in JavaScript? Why is it useful?
ANS:
Event delegation means adding an event listener to a parent element instead of each child. It's useful when:
You have many child elements (like buttons inside cards).
You add/remove elements dynamically.
It makes the code faster and easier to manage.


5]What is the difference between preventDefault() and stopPropagation() methods?
ANS:

