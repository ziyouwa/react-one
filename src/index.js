import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

import HostInformation from './HostInformation/HostInformation';
import GridListExample from './GridListExample/GridListExample';

injectTapEventPlugin();

const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <HostInformation />
        <GridListExample />
      </div>
    </MuiThemeProvider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
