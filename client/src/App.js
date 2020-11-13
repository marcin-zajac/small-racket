import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import theme from './theme';
import MainContent from './components/pages/MainContent';
import AuthPage from './components/pages/AuthPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import {LOGOUT} from'./actions/types'

function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/user" />
          </Route>
          <Route path="/user">
            <MainContent />
          </Route>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
