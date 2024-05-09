class App extends React.Component {
    state = {
        user: "None Logged In"
    }
    componentDidMount() {
        const req = axios.get("<external server>");
	req.then(resp => {
           this.setState({user: resp.data.name});
	})
	.catch(err => {
	    this.setState({user: "Invalid User"});
	});
    }
    render() {
	return(
	    <div>
		current user - {this.state.user}
	    </div>
	);
    }
}
