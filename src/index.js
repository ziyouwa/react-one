import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import HostInformation from './HostInformation/HostInformation';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <HostInformation></HostInformation>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);