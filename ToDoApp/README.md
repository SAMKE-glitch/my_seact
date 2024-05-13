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
