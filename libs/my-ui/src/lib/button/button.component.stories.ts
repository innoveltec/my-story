import { ButtonComponent } from './button.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';

export const buttonVariantData = {
  table: {
    type: {
      summary: 'string',
      detail: '"primary | secondary | tertiary | secondary-alt | warning"',
    },
    defaultValue: { summary: 'warning' },
  },
  options: ['primary', 'secondary', 'tertiary', 'secondary-alt', 'warning'],
  control: { type: 'select' },
};

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div style="margin: 40px 0; display: flex; align-items: center; justify-content: center">${story}</div>`
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
      source: {
        state: 'open',
      },
    },
  },
  excludeStories: /.*Data$/,
  title: 'AG Style Guide/Components/Button',
  argTypes: {
    variant: buttonVariantData,
    text: {
      type: { name: 'string', required: false },
      description: 'button description',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'action' },
      },
    },
  },
} as Meta;

export const actionsData = {
  click: action('onClickButton'),
};

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: { ...args, onClickButton: actionsData.click },
});

export const Button = Template.bind({});
Button.args = {
  text: 'action',
  variant: 'warning',
};
