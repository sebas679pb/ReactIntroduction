function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

class StatusComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            status: ""
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.checkStatus(),
            5000
        );
    }

    checkStatus() {
        fetch("/status").then(res => res.json()).then(
            (result) => { this.setState({ isLoaded: true, status: result.status }); }, (error) => {
                this.setState({ isLoaded: true, error });
            })
    }

    render() {
        const { error, isLoaded, status } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h1>The server status is:</h1>
                    <p>
                        {status}
                    </p>
                </div>
            );
        }
    }
}

ReactDOM.render(<StatusComponent />, document.getElementById('status'));