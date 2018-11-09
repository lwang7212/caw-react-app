import React from 'react'
import ReactDOM from 'react-dom';
import {createBus } from 'suber';
import { BusProvider } from 'react-suber';
import  {WarningBannerWithBus,SenderButtonWithBus} from "./WithBusComponents";
const bus = createBus();

ReactDOM.render(
    <BusProvider bus={bus}>
        <WarningBannerWithBus />
        <SenderButtonWithBus>Click me!!!</SenderButtonWithBus>
    </BusProvider>
    , document.getElementById('root')
);


