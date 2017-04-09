# Homework #2

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* arrow functions
	** more efficient way to write anonymous functions
	* state
	** allows component to be updated/interactive, similar to clicking Like on Facebook(tm).
	* constructor
	** First needs super(props), or things will break. This is where you initialize states
	* setState - setState with a callback function and setState with an object passed in
	** allows for making changes on the page without needing to refresh the entire page (shallow merge)
	* .bind
	** allows you to specifically say "this" is context.
	* functional components vs class components
	** functional components are functional, that is, they do one thing, where as class components have more features.
  	* onClick
  	** gives a hook for react to do something when something happens (interactivity)


2. Fork and clone this repo.  When you need to commit use the following commands.
		
	* Run: `npm install -g create-react-app`
	* Create a boilerplate React app called clock. `create-react-app clock`
	* Navigate into /clock and run the command: `npm start`
	* Your `<App />` component will render a `<NavBar />` and a `<Clock />` component.
	* Create a file called `NavBar.js` and a file called `Clock.js`
	* `<NavBar />` and `<Clock />` will both be React components.  `<NavBar />` should display the title of your page in a larger font.
	* `<Clock />` will display a clock that updates every second.  (You will need to use the `Date` object.)
  	* `Date` example: `const now = new Date(); now.getHours(); now.getDay(); now.getMinutes(); now.getSeconds(); etc.`
	* Create a clock that updates every second. JavaScript's `setInterval(cb, miliseconds)` function allows you to specify code that runs after a set time.
	* Style `<Clock />` and try to make it look nice.



#### Congratulations on finishing Homework #2!

For more information about our other courses visit: https://www.lambdaschool.com
