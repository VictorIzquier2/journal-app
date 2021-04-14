import React from 'react';
import PropTypes from 'prop-types';

import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component
})