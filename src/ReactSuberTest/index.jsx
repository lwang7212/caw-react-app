import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { withBus } from 'react-suber'
import { createBus } from 'suber';
// Create a component that will listen on the 'SHOW_WARNING' channel
// It expects 'bus' as a prop
const bus = createBus();
debugger;

class WarningBanner extends React.Component {
    constructor (props) {
        super(props);
        debugger;
        this.state = {
            warning: null
        };
    }
    componentDidMount() {
        // Start listening for events on component mount
        // When something arrives, set component state to the warning message
       this.stop = this.props.bus.take('SHOW_WARNING', (msg) => {
            this.setState({ warning: msg.warning })
        })
    }
    componentWillUnmount() {
        // Stop listening on unmount
       this.stop()
    }
    render () {
        // Show the warning (if present)
        if (!this.state.warning) return null;
        return (<span>{ this.state.warning }</span>)
    }
}

// Create a component will can send on the 'SHOW_WARNING' channel
// when clicked. It expects 'bus' as a prop
const SenderButton = ({ bus, children }) => {
debugger
    const onClick = () => bus.send('SHOW_WARNING', { warning: 'Hacking detected!' })
    return <button onClick={ onClick }>{ children }</button>
};

// To automatically pass the bus to these components
// we wrap them with 'withBus'
;
debugger;
const WarningBannerWithBus = withBus(WarningBanner);
const SenderButtonWithBus = withBus(SenderButton);

// We use these wrapped components just as we
// would with the original components
const prop={a:"1"};
ReactDOM.render(
    <div>
        <WarningBannerWithBus />
        <SenderButtonWithBus>Click me!!!</SenderButtonWithBus>
    </div>
    , document.getElementById('root')
);