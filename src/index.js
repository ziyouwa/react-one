import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import HostInformation from './HostInformation/HostInformation';
import GridListExample from './GridListExample/GridListExample';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <div>
            <HostInformation></HostInformation>
            <GridListExample />
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);