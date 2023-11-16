import { newSpecPage } from '@stencil/core/testing';
import { StencilButton } from '../stencil-button';

// expect.extend(toHaveNoViolations)

describe('stencil-button', () => {
  it('renders the button', async () => {
    const page = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button></stencil-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-button label='' variant='' type='button'>
        <mock:shadow-root>
          <button class='stencil-button' aria-label='' type='button'>

          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
  });
  it('uses label as aria-label', async () => {
    const page = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button label='button-label'></stencil-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-button label='button-label' variant='' type='button'>
        <mock:shadow-root>
          <button class='stencil-button' aria-label='button-label' type='button'>
            button-label
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
  });
  it('uses label and aria-label', async () => {
    const page = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button label='button-label' aria-label='aria-label'></stencil-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-button label='button-label' aria-label='aria-label' variant='' type='button'>
        <mock:shadow-root>
          <button class='stencil-button' aria-label='aria-label' type='button'>
            button-label
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
  });
  it('has three type states', async () => {
    const buttonType = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button type='button'></stencil-button>`,
    });
    expect(buttonType.root).toEqualHtml(`
      <stencil-button label='' variant='' type='button'>
        <mock:shadow-root>
          <button class='stencil-button' aria-label='' type='button'>
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
    const submitType = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button type='submit'></stencil-button>`,
    });
    expect(submitType.root).toEqualHtml(`
      <stencil-button label='' variant='' type='submit'>
        <mock:shadow-root>
          <button class='stencil-button' aria-label='' type='submit'>
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
    const resetType = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button label='' type='reset'></stencil-button>`,
    });
    expect(resetType.root).toEqualHtml(`
      <stencil-button label='' variant='' type='reset'>
        <mock:shadow-root>
          <button class='stencil-button' aria-label='' type='reset'>
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
  });
  it('has four variants', async () => {
    const defaultVariant = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button type='button'></stencil-button>`,
    });
    expect(defaultVariant.root).toEqualHtml(`
      <stencil-button label='' variant='' type='button'>
        <mock:shadow-root>
          <button class='stencil-button' aria-label='' type='button'>
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
    const secondaryVariant = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button type='submit' variant='secondary'></stencil-button>`,
    });
    expect(secondaryVariant.root).toEqualHtml(`
      <stencil-button label='' variant='secondary' type='submit'>
        <mock:shadow-root>
          <button class='stencil-button stencil-button--secondary' aria-label='' type='submit'>
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
    const successVariant = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button label='' variant='success' type='reset'></stencil-button>`,
    });
    expect(successVariant.root).toEqualHtml(`
      <stencil-button label='' variant='success' type='reset'>
        <mock:shadow-root>
          <button class='stencil-button stencil-button--success' aria-label='' type='reset'>
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
    const errorVariant = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button label='' variant='error' type='reset'></stencil-button>`,
    });
    expect(errorVariant.root).toEqualHtml(`
      <stencil-button label='' variant='error' type='reset'>
        <mock:shadow-root>
          <button class='stencil-button stencil-button--error' aria-label='' type='reset'>
          </button>
        </mock:shadow-root>
      </stencil-button>
    `);
  });
  /*
  it('should demonstrate this matcher`s usage', async () => {
    const render = () => StencilButton

    // pass anything that outputs html to axe
    const html = render()

    expect(await axe(html)).toHaveNoViolations()
  })
  */
});
