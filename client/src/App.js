import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import theme from './theme';
import MainContent from './components/pages/MainContent';
import AuthPage from './components/pages/AuthPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';

function App() {
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
