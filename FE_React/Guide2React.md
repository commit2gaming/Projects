# Guide2React
Hello, lets get some things out of the way before you start reading:
> My goal is to provide a beginner tutorial on React from installation to development using code examples and explanations
* I'm learning React
* My mother language is not english, so I excuse myself in advance for any language errors
* Currently, this is mostly a short one page version of [react.js](https://reactjs.org/docs/hello-world.html) Docs tutorial, where I added some information from other ressources. You can find a References section in the bottom of this document
* As time goes by I'll be editing this document so it is more complete adding content from other sources
* You are more than welcome to contribute (file issue on [Github](https://github.com/commit2gaming/Projects/issues)) in a positive way to this document and my projects
* This is **not** a Javascript tutorial. You must be familiar with JS to understand the concepts in this document. Here are a few ressources to learning JS
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript),
[JavascriptInfo](http://javascript.info) and
[w3schools](https://www.w3schools.com/js/default.asp)
* Have fun

--------------------------------
## What is React

* React elements are plain objects

--------------------------------
## How to Use

--------------------------------
### Scripting
In order to use little react you can just add 2 script tags to your HTML code, before the ending body tag (Load React). Then you need to load it (Load our React component).
```html
<!-- Load React. -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<!-- Load our React component. -->
<script src="react-component.js"></script>
```
Then you need to define where in the HTML you want to place the React component. This can be done adding a new `<div>` tag anywhere inside the HTML body.
```html
<div id="insert-react-here"></div>
```
Finally, you need te create the actual React component. Create the file `react-component.js` besides the HTML file and write your React component to be inserted on the `<div>`.

--------------------------------
### Installing with NPM
[NPM](https://www.npmjs.com) (Node Package Manager) is the package manager for [Node.js](https://nodejs.org/en/). If you are developping more than a simple single page, you might want to consider this method.

1. Install [Node.js](https://nodejs.org/en/) using [Homebrew](https://brew.sh)
```bash
$ brew install node
```
2. Verify the installation of both Node.js and NPM
```bash
$ node -v
```
```bash
$ npm -v
```
3. Install React. `-g` (install as a global package). If you get permission ERROR, use `sudo` before the command.
```bash
$ npm install -g create-react-app
```
4. Finally, create the barebone file structure
```bash
$ create-react-app your-app-name
```


--------------------------------
## Coding

--------------------------------
### Element
An Element is the smallest React building blocks (objects) and it describes what is seen on the screen. Lets create an React element containing a Hello, world `h1` tag.
```javascript
const element = <h1>Hello, world</h1>;
```
Now, lets suppose we want to insert it inside a `<div id="hello-from-react">` element.
```javascript
ReactDOM.render(element, document.getElementById('hello-from-react'));
```
They can be DOM tags
```javascript
const element = <div />;
```
Or they can be user defined
```javascript
const element = <Welcome name="Sara" />;
```
This sintax is basically a call to the _Welcome_ function (namely React Component, as we will see in the [Function Components](#function-components) section below) passing an object with the attribute _name_ containing a String _Sara_.


--------------------------------
### Components
Components are like JS functions. They receive READ_ONLY parameters _props_ (which stands for properties) and return React elements describing what it should be displayed on the screen. Always start Component name with capital letter. Lower case tags are treated as DOM tags.


#### Function Components
It's a React component built from a JS function
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
It takes _props_ object and returns a React component.

Same with [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) Class
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

#### Nesting Components

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
Here, the _App_ component will be inserted into the root.
_App_ will return 3 Components, each containing a property with attribute _name_ with different value.

--------------------------------
### Props and State
**All React components must not change the value of props**. So if we have a Component (function) that requires to change the value of its argument we must use **State**.

Using the code below, for reference:
```javascript
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

**State**:
* allows Components to change their output in response to user action, network responses, etc.
* is private and fully controlled by the Component
* it requires that the component be declared as a Class

1. We need to convert the Component to a Class
	1. Create ES6 Class, that extends from _React.Component_
	2. It must have only one method _render()_, which is called everytime the Class is updated
	3. Move the body of the Component
	4. Replace _props_ with _this.props_
	5. Delete the remaining of the Component declaration

```javascript
//This is a Function Component
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
```javascript
//This is a Class
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
2. Add Local State to a Class
	1. Replace `this.props.date` with `this.state.date` in the render
	2. Add a _class constructor_ assigning initial `this.state`
	3. Remove the `date` prop from `<Clock />`

```javascript
class Clock extends React.Component {
  // Add Class Constructor
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  // Remove date prop
  <Clock />,
  document.getElementById('root')
);
```

--------------------------------
### Lifecycle Methods
\"mounting\": Whenever we render a Class to the DOM for the first time.

\"unmounting\": Whenever we remove a Class from the DOM.

1. We specify special methods `componentDidMount()` and `componentWillUnmount()`, which are called _lifecycle methods_ when a Component mounts and unmounts.
2. Rewrite `tick()` method using `this.setState()`

```javascript
class Clock extends React.Component {
  constructor(props) {
  super(props);
  this.state = {date: new Date()};
}

  //lifecycle methods
  componentDidMount() {
    // JS method that executes tick() method every 1000 ms
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // Stops setInterval() calls
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Rewrite tick using this.setState()
  tick() {
    this.setState({
      date: new Date()
    });
  }
	
  render() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
To recap:
1. `ReactDOM.render()` renders Clock into the DOM.
2. `render()` Clock method displays some text and the time, which will be determined by the `date` object inside `state`.
3. `componentDidMount()` runs after the Class is rendered for the first time on the DOM.
4. `setInterval(callBack, timems)` is a JS method and it will call `tick()` every `1000ms`.
5. `tick()` updates the `state`
6. Finally, `componentWillUnmount()` we can add an attribute to `this`.
After calling `clearInterval()`, `setInterval()` is no longer called.

**Important about state**
* Only modify state using `this.setState({obj})`
* The only place for assigning state is in the `constructor()`
* It should not be accessible other than to the class that owns it or created it
* It can be passed down as `props`
```javascript
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```
or
```javascript
<FormattedDate date={this.state.date} />

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```
In this case `FormatDate(props)` do not know how `props` was created. This method is called _Top-Down_ or _Uniderectional_ data flow.

--------------------------------
### Handling Events
* Handling events on React is similar to handling events on DOM, with some syntatic differences
* React events are named using camelCase
* When using [JSX](https://reactjs.org/docs/jsx-in-depth.html) you pass a function as the event hadler, like:
```html
<!-- HTML -->
<button onclick="activateLasers()">
  Activate Lasers
</button>

 <!-- React -->
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
* Generally, it's not necessary to call `addEventListener` to add listeners to a DOM element. Instead, provide a listener when the element is initially rendered.
* In JSX callbacks the `this` must be binded inside the class. Because when it is passed it is `undefined`
```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      // addEventListener not necessary
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```
* Passing arguments to Event Handlers
```html
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

--------------------------------
### Conditional Rendering

#### if

```javascript
if (condition) {
  // When condition holds, execute
  return <h1>Condition holds</h1>;
} else {
  // When condition do not hold, execute
  return <h1>Condition do not hold</h1>;
}
```

#### Inline If with logical &&
```javascript
condition &&
  return <h1>Condition holds</h1>
```
If condition holds the expression after `&&` will execute.

#### Inlide If-Else with conditional Operator
```javascript
condition ?
  return <h1>Condition holds</h1> :
  return <h1>Condition do not holds</h1>
```

#### Prevent from Rendering
When a function return `null` the Component will hide itself.

```javascript
function MyFunc (props) {
  // Code to execute
  return null;
}

render () {
  // This will not execute, because it returns null
  <MyFunc sendProps={this.state} />
}
```

--------------------------------
### Lists and Keys
We can use `map()` from JS to iterate an array and execute a function for each element.

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
But a key should be provided for list items when iterating through `map()`.
```html
<li key={number.toString()}>
````
Keys help React identify items and track changes.
Keys need to be unique inside a ginven list, but the same keys can be used in a different list.

Keys can not be passed as props.

--------------------------------
### Fomrs



--------------------------------
### Handling Events

--------------------------------
## Reference
* https://reactjs.org/docs/rendering-elements.html
