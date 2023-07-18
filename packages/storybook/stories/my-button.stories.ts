import type { Meta, StoryObj } from '@storybook/web-components'
import { render_component, imba_source_transform } from '../meta.imba'

const options: Meta = {
    title: 'Components/my-button',
    tags: ['autodocs'],
    render: ({ label, ...args }) => render_component('my-button', args, label),
    argTypes: {
        label: { control: 'text' },
        variant: { options: ['primary', 'secondary'], control: 'select' },
        'background-color': { control: 'color' },
        color: { control: 'color' },
        '@click': {}
    },
    parameters: {
        docs: {
            source: {
                transform: imba_source_transform
            }
        }
    }
}
export default options

export const Primary: StoryObj = {
    args: {
        label: 'Click Me',
        variant: 'primary'
    }
}

export const Secondary: StoryObj = {
    args: {
        label: 'Click Me',
        variant: 'secondary'
    }
}

export const Fancy: StoryObj = {
    args: {
        label: 'Click Me',
        color: 'hotpink',
        'background-color': 'lavender'
    }
}
