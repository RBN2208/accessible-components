import { Component, Element, Host, h, Prop } from '@stencil/core';
import { StencilButtonType, StencilButtonVariant } from '../../../types/ui';

@Component({
  tag: 'stencil-button',
  styleUrl: 'stencil-button.scss',
  shadow: true,
})
export class StencilButton {
  @Element() buttonElement!: HTMLButtonElement;

  /**
   * Button label
   */
  @Prop({ reflect: true }) label: string = "";
  @Prop({ reflect: true}) adb: string = "";
  /**
   * theming variant
   */
  @Prop({ reflect: true }) variant: StencilButtonVariant = "";

  /**
   * type
   * @default buttons
   */
  @Prop({ reflect: true }) type: StencilButtonType = 'button';

  /**
   * disabled
   * @default false
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * required for accessibility
   * @default label
   */
  @Prop({ reflect: true }) ariaLabel: string;

  render() {
    const className = `stencil-button ${this.variant ? `stencil-button--${this.variant}` : ''} ${this.disabled ? 'disabled' : ''}`
    const ariaLabel = this.ariaLabel ? this.ariaLabel : this.label;

    return (
      <Host>
          <button class={className} disabled={this.disabled} aria-label={ariaLabel} type={this.type}>
            {this.label}
          </button>
      </Host>
  );
  }
}
