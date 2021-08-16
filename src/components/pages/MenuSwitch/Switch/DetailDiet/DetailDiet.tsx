import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

function DetailDiet({ location: { state } }: RouteComponentProps) {
  console.log(state);
  return <div>detail</div>;
}

export default DetailDiet;
