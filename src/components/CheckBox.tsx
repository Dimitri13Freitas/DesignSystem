import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react' 
import { ReactNode } from 'react';

export interface CheckBoxProps {
  children: ReactNode;
}

export function CheckBox({}: CheckBoxProps) {
  return (
    <CheckboxPrimitive.Root 
    className=' w-6 h-6 p-[2px] bg-gray-800 rounded '>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='text-cyan-500 h-5 w-5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}