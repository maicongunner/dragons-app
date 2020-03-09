import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';

export default function RouteWreapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().login;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWreapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWreapper.defaultProps = {
  isPrivate: false,
};
