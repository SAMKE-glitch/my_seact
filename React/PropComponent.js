//component
class TestComponent extends React.component {
    render() {
        return <div> Hi {this.props.name}</div>
    }
// passing the props as example to the test component
<TestComponent name='John'/>
<TestComponent name='Jill'/>
}
