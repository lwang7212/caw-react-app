import React from 'react'
import {withBus} from 'react-suber'


class WarningBanner extends React.Component {

    state = {
        warning: null
    };
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //take 返回一个 unsubcrible 退订回调
        this.stop = this.props.bus.take('SHOW_WARNING', (msg) => {
            this.setState({warning: msg.warning})
        })
    }

    componentWillUnmount() {
        this.stop()
    }

    render() {

        if (!this.state.warning) return null;
        return <blink>{this.state.warning}</blink>
    }
}
const SenderButton = ({bus, children}) => {
    const onClick = () => bus.send('SHOW_WARNING', {warning: 'Hacking detected!'})
    return <button onClick={onClick}>{children}</button>
};
export const WarningBannerWithBus = withBus(WarningBanner);
export const SenderButtonWithBus = withBus(SenderButton);


