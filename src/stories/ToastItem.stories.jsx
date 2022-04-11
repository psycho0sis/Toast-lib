import React from 'react';

import { ToastItem } from "../components/ToastItem"
import { theme } from "../theme"

export default {
  title: 'ToastItem',
  component: ToastItem,
};

export const Template = () => {
  return (
    <>
      <ToastItem type="error" title="Error" description="Description"/>
    </>
  )
};


// export const Info = (args) => <ToastItem {...args} />;

// Info.args = {
//   toast: {
//     type: 'info',
//     title: 'Info',
//     description: 'Info example description',
//     animation: 'transform',
//     color: theme.colors['info'],
//     textColor: 'white',
//     autoHidden: false
//   }
// };