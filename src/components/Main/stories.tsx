import { Story, Meta } from '@storybook/react'

import { Main } from '.'

export default {
	title: 'Main',
	component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
	title: 'NextJS Styled Starter',
	description: 'TypeScript, NextJS e Styled Components'
}
