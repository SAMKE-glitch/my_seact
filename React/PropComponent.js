//component
class TestComponent extends React.component {
    render() {
        return <div> Hi {this.props.name}</div>
    }
<TestComponent name='John'/>
<TestComponent name='Jill'/>
}
