import React, {useState} from 'react';

import { ToastsList } from './ToastsList';
import { Button } from "./Button";
import * as ToastStories from './Toast.stories';

export default {
  title: 'ToastsList',
  component: ToastsList,
  argTypes: {
    position: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: {
        type: 'radio'
      }
    },
    margins: {
      control: {
        type: 'text'
      }
    },
  }
};

export const Template = (args) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type) => () => {
    const id = new Date().toLocaleString();
    const newToast = { ...ToastStories[type].args.toast, id: id};
    setToasts([...toasts, newToast])
  }
  return (
    <>
      <ToastsList toasts={toasts} {...args}/>
      <Button addToast={addToast} type="Success" text="Add Success toast"/>
      <Button addToast={addToast} type="Error" text="Add Error toast"/>
      <Button addToast={addToast} type="Warning" text="Add Warning toast"/>
      <Button addToast={addToast} type="Info" text="Add Info toast"/>
    </>
  )
}

Template.args = {
  position: 'bottom-right',
  margins: '30px'
};
