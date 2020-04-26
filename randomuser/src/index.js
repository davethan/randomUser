import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {blue, yellow} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette:{
        primary: {
            main: blue[700],
            light:blue[500],
            dark: blue[900]
        },
        secondary: {
            main: yellow[700],
            light:yellow[500],
            dark: yellow[900]
        }
    }
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
