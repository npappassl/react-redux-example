/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import ApplicationList from 'components/ApplicationList';


import messages from './messages';


export default class ApplicationsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div>
            <h1>
                <FormattedMessage {...messages.header} />
            </h1>
            <a href="#/createapplication"> + Create application</a>
        </div>
    );
  }
}
