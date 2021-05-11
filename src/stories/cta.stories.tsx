import { CTAProps, CTAVariant } from '../components/cta/cta.types';
import { html } from "lit-html";

export default {
  title: 'Components/CTA',
  component: 'poc-cta',
};

const Template = (args: CTAProps) => {
  return html`
    <poc-cta variant="${args.variant}" text="${args.text}"></poc-cta>
  `;
};

export const Default = Template.bind({});

Default.args = {
  variant: CTAVariant.Primary,
  text: 'Primary',
};
