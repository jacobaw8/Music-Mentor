import { registerRootComponent } from 'expo';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import HomeScreen from './screens/MainScreens/HomeScreen';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import RecordScreen from './screens/TransposeScreens/RecordScreen';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<HomeScreen />} />
      </Route>
    )
  );

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
