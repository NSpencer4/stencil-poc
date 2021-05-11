import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'poc-cta',
  styleUrl: 'cta.module.css',
  shadow: true,
})
export class CTA {
  @Prop() text: string = 'Default';
  @Prop() variant: string = "Primary";

  render() {
    return <button class={`btn-base ${this.variant}`}>{this.text}</button>;
  }
}
