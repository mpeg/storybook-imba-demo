import type { Meta, StoryObj } from '@storybook/web-components'
import { render_component, imba_source_transform } from '../meta.imba'

const options: Meta = {
    title: 'Components/my-counter',
    tags: ['autodocs'],
    render: (args) => render_component('my-counter', args),
    argTypes: {
        count: { control: 'number' },
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

export const Default: StoryObj = {
    args: {
        count: 0
    }
}

export const StartsAt10: StoryObj = {
    args: {
        count: 10
    }
}

export const Fancy: StoryObj = {
    args: {
        color: 'hotpink',
        'background-color': 'lavender'
    }
}
