import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.root,
  args: {
    children: (
      <>
        <TextInput.icon>
          <Envelope/>
        </TextInput.icon>
        <TextInput.input placeholder="Type your e-mail adress"/>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.input placeholder="Type your e-mail adress"/>
  }
}