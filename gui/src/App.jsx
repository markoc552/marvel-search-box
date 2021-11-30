import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import { IntlProvider } from "react-intl";
import en from "./i18n/en.json";
import cro from "./i18n/cro.json";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

const App = ({ store }) => {
  let lang = useSelector((state) => state.lang);

  const messages = {
    en: en,
    cro: cro,
  };

  store.subscribe(() => {
    lang = store.getState().lang;
  });

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route
            path="/dashboard"
            exact
            component={() => <Home store={store} />}
          />
        </Switch>
      </Router>
    </IntlProvider>
  );
};

export default App;
