import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';
import Input, { Props } from '../components/Input';

export default {
  title: 'Input',
  component: Input,
  parameters:{
      docs:{
        escription: {
            component: 'some component _markdown_',
          },
      },
  },
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Primary1 = Template.bind({});
Primary1.args = {
  cor: 'red',
};

export const Secondary = Template.bind({});
Secondary.args = {
    cor: 'pink',
  };
