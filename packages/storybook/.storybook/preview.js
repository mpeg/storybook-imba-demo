import '@storybook-imba/component-library'

/** @type { import('@storybook/web-components').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: '^@.*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /date$/i
            }
        }
    }
}

export default preview
