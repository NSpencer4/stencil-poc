import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import customElements from '../custom-elements.json';
import '../src/theme/theme.css';
import { extractComponentDescription, setStencilDocJson, extractArgTypes } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../docs.json';
if(docJson) setStencilDocJson(docJson);

export const parameters = {
}
setCustomElements(customElements);

addParameters({
  docs: {
    inlineStories: false,
    extractArgTypes,
    extractComponentDescription,
  },
  controls: { hideNoControlsWarning: true }
});

// force full reload to not reregister web components
const req = require.context('../src', true, /\.src\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
