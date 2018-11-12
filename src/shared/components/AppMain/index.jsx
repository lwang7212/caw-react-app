import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './configureStore';
import {createBus} from 'suber';
import {BusProvider} from 'react-suber';
import {StyledMainTabWrap, StyledWrapper} from "./styled";
import Sidebar from "../Sidebar";
import FrameMain from "../widgets/FrameTemplate";
// Create suber bus
const bus = createBus();

/**
 * 应用入口
 */
  class AppMain extends Component {
    state = {};
    constructor(props) {
        super(props);
    }
    render() {
        let {onNavClick, topNavItems, bottomNavItems,...rest} = this.props;
        let siderProp={onNavClick,topNavItems,bottomNavItems};
        return (
            <Provider store={store}>
                <BusProvider bus={bus}>
                    <StyledWrapper>
                        <Sidebar {...siderProp}></Sidebar>
                        <StyledMainTabWrap>
                            <FrameMain {...rest}>FrameTemplate</FrameMain>
                        </StyledMainTabWrap>
                    </StyledWrapper>
                </BusProvider>
            </Provider>
        );
    }
}

export default  AppMain