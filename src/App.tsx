import { Lock } from 'phosphor-react'
import { Envelope } from 'phosphor-react'
import { TextInput } from './components/TextInput'
import { Text } from './components/Text'
import { Heading } from './components/Heading';
import { Logo } from './Logo';
import { CheckBox } from './components/CheckBox';
import './styles/global.css';
import { Button } from './components/Button';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo className='mb-4'/>

        <Heading size='lg'>Ignite Lab</Heading>

        <Text size='lg' className='text-gray-400 mt-1 '>Faça login para começar a usar!</Text>
      </header>

      <form className='flex flex-col items-stretch w-full gap-4 max-w-sm mt-10'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>
            <TextInput.input type='email' placeholder='Digite seu e-mail' />
          </TextInput.root>
        </label>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>
            <TextInput.input placeholder='********' id='password' type='password' />
          </TextInput.root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <CheckBox id='remember' />
          <Text size='sm' className='' >Lembrar de mim por 30 dias</Text>
        </label>
        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col mt-8 items-center gap-4'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie um agora.</a>
        </Text>
      </footer>

    </div>
  )
}
