import {Meta, StoryObj} from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.root,
  args: {
    children: (
      <TextInput.input placeholder="Type your e-mail adress"/>
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