import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store  from 'store';
import { App } from 'containers';

import './index.css'; //contains a resets css
import * as serviceWorker from './serviceWorker';

import {I18nextProvider} from 'react-i18next';
import i18n from "./translations/i18next"

const entryNode = document.getElementById('root')

if(entryNode) {
  ReactDOM.render(
    <Provider store={store()}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>,
    entryNode
  );

  serviceWorker.unregister();
}
