import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
	console.log("This is inside the constructor")
    }
    componentDidMount = () => {
        console.log("inside component did mount")
    }
    render(){
        console.log("inside render method")
	return(
	    <div>
		The compoent is rendered
	    </div>
	);
    }
}

export default App;
