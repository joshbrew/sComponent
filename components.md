# Comprehensive Overview of State Components in React

The following components leverage a global state management utility (`sComponent`) to facilitate seamless state synchronization across various components in a React application. This document provides a detailed breakdown of each component, including its functionality, code implementation, and potential use cases.

## Table of Contents

1. [StateAccordion.tsx](#stateaccordiontsx)
2. [StateButton.tsx](#statebuttontsx)
3. [StateCheckbox.tsx](#statecheckboxtsx)
4. [StateCounter.tsx](#statecountertsx)
5. [StateInput.tsx](#stateinputtsx)
6. [StateList.tsx](#statelisttsx)
7. [StateLoader.tsx](#stateloadertsx)
8. [StateModal.tsx](#statemodaltsx)
9. [StateProgressBar.tsx](#stateprogressbartsx)
10. [StateSelect.tsx](#stateselecttsx)
11. [StateToggle.tsx](#statetoggletsx)
12. [TaskManagerExample.tsx](#taskmanagerexampletsx)

## StateAccordion.tsx

- **Purpose**: Displays an accordion-style UI where only one section is expanded at a time.
- **Features**:
  - Tracks the currently active section using a state key (`stateKey`).
  - Expands or collapses sections based on user interactions.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateAccordion extends sComponent<{
      stateKey: string;
      items: { title: string; content: string }[];
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          const activeIndex = this.state[this.props.stateKey] || 0;
          return (
              <div>
                  {this.props.items.map((item, index) => (
                      <div key={index}>
                          <h4
                              onClick={() => this.setState({ [this.props.stateKey]: index })}
                              style={{ cursor: 'pointer' }}
                          >
                              {item.title}
                          </h4>
                          {activeIndex === index && <p>{item.content}</p>}
                      </div>
                  ))}
              </div>
          );
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateAccordion stateKey='accordionState' items={items} />
  ```

## StateButton.tsx

- **Purpose**: Renders a button that can toggle a boolean value in the global state.
- **Features**:
  - Displays either `trueText` or `falseText` based on the current state.
  - Allows customization of style and class.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateButton extends sComponent<{stateKey:string, style?:CSSStyleDeclaration, className?:string, trueText:string, falseText:string}> {
      stateKey: string;

      constructor(props:{stateKey:string, style?:CSSStyleDeclaration, className?:string, trueText:string, falseText:string}) {
          super(props);
      }

      componentDidMount(): void {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount(): void {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          return (<>
              {
                  this.state[this.props.stateKey] ? 
                  <button
                      onClick={() => { this.setState({ [this.props.stateKey]: false }) }}
                      style={this.props.style as any} className={this.props.className}
                  >{this.props.trueText ? this.props.trueText : 'Set False'}</button> 
                      :
                  <button
                      onClick={() => { this.setState({ [this.props.stateKey]: true }) }}
                      style={this.props.style as any} className={this.props.className}
                  >{this.props.falseText ? this.props.falseText : 'Set True'}</button>
              }
          </>)
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateButton stateKey='buttonState' trueText='Enabled' falseText='Disabled' />
  ```

## StateCheckbox.tsx

- **Purpose**: A checkbox input that controls a boolean value in the global state.
- **Features**:
  - Can include a label.
  - The checked state is synchronized with the global state.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateCheckbox extends sComponent<{
      stateKey: string;
      label?: string;
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          const checked = !!this.state[this.props.stateKey];
          return (
              <label>
                  <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => this.setState({ [this.props.stateKey]: !checked })}
                  />
                  {this.props.label}
              </label>
          );
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateCheckbox stateKey='checkboxState' label='Enable feature' />
  ```

## StateCounter.tsx

- **Purpose**: A counter component that allows users to increment or decrement a value.
- **Features**:
  - Accepts a `step` property to determine increment/decrement steps.
  - Synchronizes the value with the global state.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateCounter extends sComponent<{
      stateKey: string;
      step?: number;
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          const count = this.state[this.props.stateKey] || 0;
          const step = this.props.step || 1;
          return (
              <div>
                  <button onClick={() => this.setState({ [this.props.stateKey]: count - step })}>-</button>
                  <span>{count}</span>
                  <button onClick={() => this.setState({ [this.props.stateKey]: count + step })}>+</button>
              </div>
          );
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateCounter stateKey='counterState' step={2} />
  ```

## StateInput.tsx

- **Purpose**: An input field that updates the global state with its value.
- **Features**:
  - Allows optional placeholder text.
  - Triggers an external callback on value change.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateInput extends sComponent<{
      stateKey: string;
      placeholder?: string;
      onChange?: (value: string) => void;
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          return (
              <input
                  type="text"
                  value={this.state[this.props.stateKey] || ''}
                  placeholder={this.props.placeholder}
                  onChange={(e) => {
                      const newValue = e.target.value;
                      this.setState({ [this.props.stateKey]: newValue });
                      if (this.props.onChange) {
                          this.props.onChange(newValue);
                      }
                  }}
              />
          );
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateInput stateKey='inputState' placeholder='Enter text here' />
  ```

## StateList.tsx

- **Purpose**: Renders a list of items from the global state.
- **Features**:
  - Dynamically updates based on the global state.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateList extends sComponent<{
      stateKey: string;
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          const items = this.state[this.props.stateKey] || [];
          return (
              <ul>
                  {items.map((item, index) => (
                      <li key={index}>{item}</li>
                  ))}
              </ul>
          );
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateList stateKey='listState' />
  ```

## StateLoader.tsx

- **Purpose**: Displays a loading indicator based on the global state.
- **Features**:
  - Shows a "Loading..." message if the state value is `true`.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateLoader extends sComponent<{
      stateKey: string;
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          return this.state[this.props.stateKey] ? <div>Loading...</div> : null;
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateLoader stateKey='loadingState' />
  ```

## StateModal.tsx

- **Purpose**: A modal dialog that can be triggered by updating the global state.
- **Features**:
  - Displays a title, body, and a close button.
  - Can execute an `onClose` callback.
- **Code**:
  ```tsx
  import React from 'react';
  import Button from 'react-bootstrap/Button';
  import M from 'react-bootstrap/Modal';
  import { sComponent } from '../util/state.component';

  export class StateModal extends sComponent<{
      stateKey: string;
      title?: any;
      body?: any;
      style?: React.CSSProperties;
      onClose?: Function;
      defaultShow?: boolean;
  }> {
      state = {}
      showing = false;

      constructor(props: {
          stateKey: string;
          title?: any;
          body?: any;
          style?: React.CSSProperties;
          onClose?: Function;
          defaultShow?: boolean;
      }) {
          super(props);
          this.showing = props.defaultShow ? props.defaultShow : (this.__statemgr.data[props.stateKey] == true);
      }

      componentDidMount(): void {
          let callback = (res) => {
              if (res == true) {
                  this.showing = true;
              } else if (res) {
                  this.showing = true;
              } else {
                  this.showing = false;
              }
              this.setState({});
          }
          this.__subscribeComponent(this.props.stateKey, callback);
      }

      componentWillUnmount(): void {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          return (
              <M centered show={this.showing} onHide={() => {
                      this.showing = false; 
                      this.setState({}); 
                      if (this.props.onClose) this.props.onClose(); 
                  }} backdrop={false} style={this.props.style ? this.props.style : undefined}
              >
                  <M.Header closeButton>
                      {this.props.title && <M.Title>{this.props.title}</M.Title>}
                  </M.Header>
                  <M.Body>
                      { this.props.body }
                  </M.Body>
                  <M.Footer>
                      <Button 
                          variant="secondary" 
                          onClick={() => {
                              this.showing = false; 
                              this.setState({}); 
                              if (this.props.onClose) this.props.onClose(); }}
                          >Close
                      </Button>
                  </M.Footer>
              </M>
          )
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateModal stateKey='modalState' title='Modal Title' body='This is a modal body' />
  ```

## StateProgressBar.tsx

- **Purpose**: Displays a progress bar with a value controlled by the global state.
- **Features**:
  - Accepts a `max` value to indicate the completion threshold.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateProgressBar extends sComponent<{
      stateKey: string;
      max: number;
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          const value = this.state[this.props.stateKey] || 0;
          return (
              <div>
                  <progress value={value} max={this.props.max}></progress>
                  <span>{Math.round((value / this.props.max) * 100)}%</span>
              </div>
          );
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateProgressBar stateKey='progressState' max={100} />
  ```

## StateSelect.tsx

- **Purpose**: Renders a dropdown/select input that controls a value in the global state.
- **Features**:
  - Allows users to choose from a list of options.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateSelect extends sComponent<{
      stateKey: string;
      options: string[];
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          return (
              <select
                  value={this.state[this.props.stateKey] || ''}
                  onChange={(e) => this.setState({ [this.props.stateKey]: e.target.value })}
              >
                  {this.props.options.map((option, index) => (
                      <option key={index} value={option}>
                          {option}
                      </option>
                  ))}
              </select>
          );
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateSelect stateKey='selectState' options={['Option 1', 'Option 2', 'Option 3']} />
  ```

## StateToggle.tsx

- **Purpose**: A button that toggles a boolean value in the global state.
- **Features**:
  - Accepts an optional `onToggle` callback.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';

  export class StateToggle extends sComponent<{
      stateKey: string;
      onToggle?: (state: boolean) => void;
  }> {
      componentDidMount() {
          this.__subscribeComponent(this.props.stateKey);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(this.props.stateKey);
      }

      render() {
          const isActive = !!this.state[this.props.stateKey];
          return (
              <button
                  onClick={() => {
                      const newState = !isActive;
                      this.setState({ [this.props.stateKey]: newState });
                      if (this.props.onToggle) this.props.onToggle(newState);
                  }}
              >
                  {isActive ? 'On' : 'Off'}
              </button>
          );
      }
  }
  ```
- **Usage Example**:
  ```tsx
  <StateToggle stateKey='toggleState' />
  ```



### TaskManagerExample.tsx

- **Explanation**: Demonstrates a task management app that uses the global state to synchronize multiple components.
- **Components**:
  - `TaskCounter`: Displays the count of total, completed, and incomplete tasks.
  - `TaskFilter`: Allows filtering tasks by their completion status.
  - `TaskList`: Displays a list of tasks filtered by their status.
  - `TaskInput`: Provides an input field to add new tasks.
  - `TaskDetailsModal`: Shows detailed information about a selected task.
- **Code**:
  ```tsx
  import React from 'react';
  import { sComponent } from '../util/state.component';
  import { StateInput } from './StateInput';
  import { StateButton } from './StateButton';
  import { StateModal } from './StateModal';
  import { state } from '../util/state.component';

  interface Task {
      id: number;
      text: string;
      completed: boolean;
  }

  const TASK_STATE_KEY = 'tasks';
  const FILTER_STATE_KEY = 'filter';
  const SELECTED_TASK_KEY = 'selectedTask';

  state.setState({
      [TASK_STATE_KEY]: [
          { id: 1, text: 'Complete project documentation', completed: true },
          { id: 2, text: 'Review pull requests', completed: false },
          { id: 3, text: 'Prepare for the team meeting', completed: false },
      ],
      [FILTER_STATE_KEY]: 'all',
      [SELECTED_TASK_KEY]: null,
  });

  export class TaskCounter extends sComponent<{}> {
      componentDidMount() {
          this.__subscribeComponent(TASK_STATE_KEY);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(TASK_STATE_KEY);
      }

      render() {
          const tasks: Task[] = this.state[TASK_STATE_KEY] || [];
          const completedCount = tasks.filter((task) => task.completed).length;
          return (
              <div>
                  <p>Total Tasks: {tasks.length}</p>
                  <p>Completed: {completedCount}</p>
                  <p>Incomplete: {tasks.length - completedCount}</p>
              </div>
          );
      }
  }

  export class TaskFilter extends sComponent<{}> {
      render() {
          return (
              <div>
                  <button onClick={() => this.setState({ [FILTER_STATE_KEY]: 'all' })}>All</button>
                  <button onClick={() => this.setState({ [FILTER_STATE_KEY]: 'completed' })}>Completed</button>
                  <button onClick={() => this.setState({ [FILTER_STATE_KEY]: 'incomplete' })}>Incomplete</button>
              </div>
          );
      }
  }

  export class TaskList extends sComponent<{}> {
      componentDidMount() {
          this.__subscribeComponent(TASK_STATE_KEY);
          this.__subscribeComponent(FILTER_STATE_KEY);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(TASK_STATE_KEY);
          this.__unsubscribeComponent(FILTER_STATE_KEY);
      }

      render() {
          const tasks: Task[] = this.state[TASK_STATE_KEY] || [];
          const filter = this.state[FILTER_STATE_KEY] || 'all';

          const filteredTasks = tasks.filter((task) => {
              if (filter === 'completed') return task.completed;
              if (filter === 'incomplete') return !task.completed;
              return true;
          });

          return (
              <ul>
                  {filteredTasks.map((task) => (
                      <li key={task.id}>
                          <span
                              style={{
                                  textDecoration: task.completed ? 'line-through' : 'none',
                                  cursor: 'pointer',
                              }}
                              onClick={() => this.setState({ [SELECTED_TASK_KEY]: task })}
                          >
                              {task.text}
                          </span>
                          <StateButton
                              stateKey={`${TASK_STATE_KEY}_${task.id}_completed`}
                              trueText="Mark Incomplete"
                              falseText="Mark Complete"
                          />
                      </li>
                  ))}
              </ul>
          );
      }
  }

  export class TaskInput extends sComponent<{}> {
      addTask = (text: string) => {
          const tasks: Task[] = this.state[TASK_STATE_KEY] || [];
          const newTask: Task = {
              id: Date.now(),
              text,
              completed: false,
          };
          this.setState({ [TASK_STATE_KEY]: [...tasks, newTask] });
      };

      handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
              const newTaskText = this.state.newTaskText || '';
              if (newTaskText.trim()) {
                  this.addTask(newTaskText);
                  this.setState({ newTaskText: '' });
              }
          }
      };

      render() {
          return (
              <div>
                  <StateInput
                      stateKey="newTaskText"
                      placeholder="Enter new task"
                      onChange={(value) => this.setState({ newTaskText: value })}
                  />
                  <input
                      type="text"
                      placeholder="Hit Enter to add task"
                      value={this.state.newTaskText || ''}
                      onChange={(e) => this.setState({ newTaskText: e.target.value })}
                      onKeyDown={this.handleKeyDown}
                  />
              </div>
          );
      }
  }

  export class TaskDetailsModal extends sComponent<{}> {
      componentDidMount() {
          this.__subscribeComponent(SELECTED_TASK_KEY);
      }

      componentWillUnmount() {
          this.__unsubscribeComponent(SELECTED_TASK_KEY);
      }

      render() {
          const selectedTask: Task = this.state[SELECTED_TASK_KEY];
          if (!selectedTask) return null;

          return (
              <StateModal
                  stateKey="taskDetailsModal"
                  title="Task Details"
                  body={
                      <div>
                          <p>Task: {selectedTask.text}</p>
                          <p>Status: {selectedTask.completed ? 'Completed' : 'Incomplete'}</p>
                      </div>
                  }
                  onClose={() => this.setState({ [SELECTED_TASK_KEY]: null })}
              />
          );
      }
  }

  const TaskManagerApp = () => {
      return (
          <div style={{ padding: '20px' }}>
              <h1>Task Manager</h1>
              <TaskCounter />
              <TaskFilter />
              <TaskInput />
              <TaskList />
              <TaskDetailsModal />
          </div>
      );
  };
  ```
- **Usage**: This example demonstrates how components interact through a shared global state, creating a cohesive application.
  ```tsx
  const TaskManagerApp = () => {
      return (
          <div style={{ padding: '20px' }}>
              <h1>Task Manager</h1>
              <TaskCounter />
              <TaskFilter />
              <TaskInput />
              <TaskList />
              <TaskDetailsModal />
          </div>
      );
  };
  ```

---

The components presented here can be used independently or combined to create dynamic, stateful applications that utilize a shared global state. This approach simplifies the process of managing complex interactions between UI elements.

