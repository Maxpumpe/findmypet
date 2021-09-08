import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkAuthorization } from '../helpers/helpers';
import Header from '../components/Layouts/Private/Header';

const StandardRoutes = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
      return (
        <Route
          {...rest}
          render={props =>
            <div className="privateLayout">
              <Header />
              <Component {...rest} {...props} />
            </div>
          }
        />
      );
  }
  return (
    <Routes />
  );
};

StandardRoutes.defaultProps = { redirect: '/logind' };

StandardRoutes.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default StandardRoutes;