import { html } from "lit";
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  // this creates a ‘Components’ folder and a ‘JhButton’ subfolder
  title: 'Components/UI/StencilButton',
  tags: ['autodocs'],
  decorators: [
    withActions,
    (story) => html`
      <div>
        ${story()}
      </div>
    `
  ],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        excludeDecorators: true,
      },
    },
    design: {
      type: "figma",
      url: ""
    },
    actions: {
      handles: ['click'],
    }
  },
  args: {
    label: 'Button Label',
    variant: 'default',
    disabled: false,
    ariaLabel: 'AriaLabel'
  },
  argTypes: {
    label: {
      control: 'text',
      table: { defaultValue: { summary: 'undefined' } },
      name: 'Label'
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "success", "error"],
      table: { defaultValue: { summary: 'default' } },
      name: 'Variant'
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
      name: 'Disabled'
    },
    ariaLabel: {
      control: 'text',
      table: { defaultValue: { summary: 'Label'}},
      description: "Required for Accessibility",
      name: 'Aria Label'
    }
  }
};

const Template = (args) => html`
  <stencil-button
    label="${args.label}"
    variant='${args.variant}'
    disabled="${args.disabled}"
  />`;


export const Default = Template.bind({});
Default.args = {
  label: 'Change for ph-pages test v2',
  variant: 'default'
};
