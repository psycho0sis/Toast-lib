import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorWrapper } from './style';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorWrapper>Opps...we got a mistake</ErrorWrapper>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
};
