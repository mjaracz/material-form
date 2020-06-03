import React from 'react';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Form} from './form';
import {Home} from './home'
import {Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Form}/>
        <Route path='/home' component={Home}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
