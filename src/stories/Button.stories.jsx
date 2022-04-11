import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Template = () => {
  return (
    <>
      <Button text="Hello, Marina" disabled={false} />
      <Button text="Ooops, Marina" disabled={true} />
    </>
  )
};
