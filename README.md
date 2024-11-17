# react-scomponent

A lightweight state management library for React that provides a simple event-driven approach to managing and synchronizing state across components. `react-scomponent` introduces an `EventHandler` class for global state management and an `sComponent` class that extends React components to seamlessly integrate with the global state.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
  - [EventHandler](#eventhandler)
  - [sComponent](#scomponent)
- [API Reference](#api-reference)
  - [EventHandler Class](#eventhandler-class)
  - [sComponent Class](#scomponent-class)
- [Examples](#examples)
  - [Counter Example](#counter-example)
- [Components Documentation](#components-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

`react-scomponent` is a minimalistic state management library designed to simplify state handling in React applications. It leverages an event-driven model to allow components to subscribe to state changes, ensuring that your UI stays in sync with your data without the complexity of larger state management solutions like Redux or MobX.

## Features

- **Event-Driven State Management**: Subscribe to specific state changes and react accordingly.
- **Global State Synchronization**: Share state across components without prop drilling.
- **Local Storage Integration**: Optionally persist state between sessions using `localStorage`.
- **Lightweight and Simple**: Minimal overhead and easy to integrate into existing projects.

## Installation

You can install `react-scomponent` via npm:

```bash
npm install react-scomponent
```

Or using yarn:

```bash
yarn add react-scomponent
```

## Getting Started

### EventHandler

The `EventHandler` class manages global state and allows components to subscribe to changes in specific state properties.

#### Importing EventHandler

```javascript
import { EventHandler } from 'react-scomponent';
```

#### Creating an EventHandler Instance

You can create a new instance of `EventHandler` to manage your application's state:

```javascript
const state = new EventHandler({
  count: 0,
}, true); // The second parameter enables localStorage persistence
```

- **Parameters:**
  - `data` (optional): An object containing initial state values.
  - `useLocalStorage` (optional): A boolean indicating whether to persist state in `localStorage`.

### sComponent

The `sComponent` class extends `React.Component` and integrates with the `EventHandler` to automatically synchronize component state with the global state.

#### Importing sComponent

```javascript
import { sComponent } from 'react-scomponent';
```

#### Creating an sComponent

```javascript
class Counter extends sComponent {
  state = {
    count: 0,
  };

  //__statemgr = state //you can also override the default state manager with your own, e.g. to make separate state objects.

  // Your component logic...
}
```

By extending `sComponent`, your component automatically subscribes to changes in the global state properties that match its local `state` keys.

## API Reference

### EventHandler Class

#### Methods

- **`constructor(data?, useLocalStorage?)`**
  - Initializes the state with the provided data and sets up localStorage if enabled.
- **`setState(updateObj)`**
  - Merges the `updateObj` into the current state and triggers events for changed properties.
- **`setValue(key, value)`**
  - Sets a single state property and triggers its event.
- **`subscribeEvent(key, onchange)`**
  - Subscribes to changes of a specific state property.
- **`unsubscribeEvent(key, sub?)`**
  - Unsubscribes from a state property change event.
- **`subscribeState(onchange)`**
  - Subscribes to all state changes.
- **`unsubscribeState(sub)`**
  - Unsubscribes from the state change subscription.
- **`getSnapshot()`**
  - Returns a shallow copy of the current state.
- **`updateLocalStorage()`**
  - Manually updates the `localStorage` with the current state.
- **`restoreLocalStorage(data?)`**
  - Restores state from `localStorage`.

#### Properties

- **`data`**
  - The internal state object.
- **`useLocalStorage`**
  - A boolean indicating if `localStorage` is used.
- **`onRemoved`**
  - A callback function invoked when a trigger is removed.

### sComponent Class

#### Methods

- **`constructor(props)`**
  - Initializes the component and subscribes to state changes.
- **`setState(s)`**
  - Overrides React's `setState` to synchronize with the global state.
- **`__subscribeComponent(prop, onEvent?)`**
  - Subscribes the component to a specific state property.
- **`__unsubscribeComponent(prop?)`**
  - Unsubscribes the component from state property changes.
- **`__setUseLocalStorage(bool)`**
  - Enables or disables `localStorage` usage.

#### Usage Notes

- The `sComponent` automatically subscribes to state properties that match its own state keys.
- Use `doNotSubscribe` in `props` to exclude specific state properties from automatic subscription.

## Examples

### Counter Example

#### Setting Up the Global State

```javascript
// state.js
import { EventHandler } from 'react-scomponent';

export const state = new EventHandler({
  count: 0,
}, true);
```

#### Creating the Counter Component

```javascript
// Counter.js
import React from 'react';
import { sComponent, state } from 'react-scomponent';

export class Counter extends sComponent {
  state = {
    count: 0,
  };

  componentDidMount() {
    setTimeout(()=>{
        this.setState({ count: 1 });
    },1000)
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

//subscribe in the script anywhere, and it will be synchronized with all sComponents tied to that state object
state.subscribeEvent('count',(ct)=>{
    console.log("Count: " + ct);
});

//e.g. you can interact with the state anywhere and propagate to components
setInterval(()=>{
    state.setState({ count: this.state.count + 1 });
},1000)
```

#### Using the Counter Component

```javascript
// App.js
import React from 'react';
import { Counter } from './Counter';

function App() {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter />
    </div>
  );
}

export default App;
```

## Components Documentation

For a detailed breakdown of each component and its use cases, refer to [./components.md](./components.md).

This file provides in-depth documentation for components like `StateAccordion`, `StateButton`, `StateCheckbox`, and more, explaining their purposes, features, and code examples.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

