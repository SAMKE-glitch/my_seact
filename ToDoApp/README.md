## Hands-on Lab: React Todo List Application

Objective:

After completing this lab, you will be able to:

Use an event handler for creating add todo task.

Deleting the completed task from todo list using the filter method.

Toggle function and checkbox is added to check completed or not completed task.

Edit an added Todo task and submit it using map function.

UseEffect hook will be used to save new todos into localstorage

Set-up : Fork and Clone the repository
Go to the git repository https://github.com/ibm-developer-skills-network/uqwxd-react_labs.git that contains all the labs folder. You will be able to view todo-list for this lab which contains the starter code.

Create a fork of the repository into your own. You will need to have a github account of your own to do so.Go to your repository and copy the clone url.

In the lab environment, open a terminal window by choosing Terminal > New Terminal from the menu.

Change to your project folder, if you are not in the project folder already.
cd /home/project

Clone your forked Git repository into the lab environment, if it doesn’t already exist. Please replace your GitHub username in the space provided, before running the command.
git clone https://github.com/<your Github username>/uqwxd-react_labs.git

Change to the directory uqwxd-react_labs/todo_list/ to start working on the lab.
cd uqwxd-react_labs/todo_list/

List the contents of this directory to see the artifacts for this lab.
ls

Installing and running the server for React Application
Click on the button below or in the file Explorer go to App.js file under the src folder and view it. It would appear like this.

When you initialize the variable for the input field using the useState Hook, you define a getter, to get the value of the state and a setter, to set the value of the state.
In the code in App.js, todos is the state, which maintains list of all todo tasks, and setTodos is the function that sets the value of the state.

const [todos, setTodos] = useState([]);

In the terminal, ensure you are in the uqwxd-react_labs/todo_list directory and run the below command to set the NODE_OPTIONS environment variable with the –openssl-legacy-provider flag.
export NODE_OPTIONS=--openssl-legacy-provider

This ensures that the specified OpenSSL provider is used when running your Node.js application, potentially resolving certain cryptographic issues.

Run the following command to install all the packages that are required for running the server.
npm install --save -s react react-dom react-scripts web-vitals

This will install all the required packages as defined in packages.json.

Click here for instructions to do this on your Windows system.
If you are running this lab outside the lab environment, in your own system and you are using Windows system, please make the following changes in package.json.

Replace, the following lines in package.json
    "start": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
    "build": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
with
    "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
    "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",

Start the server using the below command in the terminal.
npm start

To verify that the server is running, click the button below or click on the Skills Network button on the left to open the Skills Network Toolbox. Then click Other. Choose Launch Application and enter the port number 3000 on which the server is running and click the launch icon.

The todoapp UI will appear on the browser as seen in the image below.

You cannot add any task to it yet. We will be adding the functionality to do this, in the next part of the lab.

To stop the server, go to the terminal in the lab environment and press ctrl + c


Exercise 1: Create and Implement code to add task.

In App.js file there is a placeholder where you need to add the handleSubmit function. Now, give the application the power to add a new task for the to-do list app. You will add a handleSubmit function that can will add the task to the list.
The handleSubmit handler will prevent the default action that would normally be taken on the form and add a new Task using the latest value that is in the input field. The user input is validated to ensure the input is non-empty and doesn’t have preceeding or succeeding spaces.

  function handleSubmit(e) {
    e.preventDefault();

    let todo = document.getElementById('todoAdd').value
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo));
    } else {

        alert("Enter Valid Task");
    }
    document.getElementById('todoAdd').value = ""
  }


On click of the Add Todo button, the form is submitted and the task is added to the todo list. The code uses the map to iterate through the todo list, and renders each task as a list item. Using useState, this component registers a state with value todo and a function for updating it setTodo.
Paste the below code inside the return function of App, replacing the existing content.
<div id="todo-list">
    <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              id = 'todoAdd'
            />
            <button type="submit">Add Todo</button>
        </form>
        {todos.map((todo) =>
            <div className="todo" key={todo.id}>
                <div className="todo-text">{todo.text}</div>
            {/* insert delete button below this line */}
            </div>)}
</div>

Click here to view the complete code.
import React,{useState} from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let todo = document.getElementById('todoAdd').value
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo));
    } else {

        alert("Enter Valid Task");
    }
    document.getElementById('todoAdd').value = ""
  }

    return (
      <div id="todo-list">
        <h1>Todo List</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id = 'todoAdd'
            />
            <button type="submit">Add Todo</button>
        </form>
        {todos.map((todo) => <div className="todo" key={todo.id}>
            <div className="todo-text">{todo.text}</div>

        </div>)}
        </div>
  );
};

export default App;

3.Start the server and enter the valid task inside the input box where you can see “Add a new task “. You will see the ouput as below:




Exercise 2: Delete a completed task from the list.

Delete task can be handled in many ways. Now you will write the code using the filter method that filters out the task to be deleted based on the id, and returns the rest of the tasks. Placeholder is added in the App.js file where you need to add the delete to do function.
function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

Add a button to delete the task, which will call the method deleteTodo passing the id of the todo item, on click. A placeholder has been provided to add the button.
<button onClick={() => deleteTodo(todo.id)}>Delete</button>

Start the server, add the task to-do list, and then try to delete it by pressing the delete button. The task must be removed from the list.



Exercise 3: Adding Checkbox and Toggle function.

You will now add a checkbox to mark task completion. Create a new function, toggleComplete function that uses the map method to iterate through the task and mark them complete inside App.js.
function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }


Add the following code to add the checkbox component, next to {todo.text}, inside the same div tag.
<input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>


Start the server, add the task to-do list, and then use the checkbox if the task is completed.
