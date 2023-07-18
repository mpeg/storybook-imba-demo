import imbaPlugin, { vitePluginEnvironment } from 'imba/plugin'
import { mergeConfig } from 'vite'

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|ts)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: {
        name: '@storybook/web-components-vite',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    },
    core: {
        disableTelemetry: true
    },
    async viteFinal(viteConfig) {
        const extensions = ['.web.imba', '.imba', '.imba1', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.mdx']
        return mergeConfig(viteConfig, {
            worker: {
                plugins: [imbaPlugin(), vitePluginEnvironment('all')]
            },
            plugins: [imbaPlugin(), vitePluginEnvironment('all')],
            resolve: {
                conditions: ['imba'],
                extensions,
                dedupe: ['imba']
            },
            build: {
                manifest: true,
                target: ['chrome88', 'edge79', 'safari15'],
                ssrManifest: true,
                rollupOptions: {}
            },
            define: {
                'import.meta.vitest': undefined
            },
            envPrefix: 'VITE_'
        })
    }
}

export default config
