import { registerRootComponent } from 'expo';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
