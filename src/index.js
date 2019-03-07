import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store  from 'store';
import { App } from 'containers';

import './index.css'; //contains a resets css
import * as serviceWorker from './serviceWorker';

const entryNode = document.getElementById('root')

if(entryNode) {
  ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>,
    entryNode
  );

  serviceWorker.unregister();
}
