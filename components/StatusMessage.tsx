import React from 'react';
import { StatusMessageStyles } from './styles/CardContainerStyles';

const StatusMessage = props => {
  return (
    <StatusMessageStyles>
      {props.children}
    </StatusMessageStyles>
  );
};

export default StatusMessage;
