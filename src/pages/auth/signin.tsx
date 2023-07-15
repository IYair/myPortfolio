import { TextComponent } from '../../components/general/text/TextComponent'
import { enumTextSizes, enumTextTags } from '@/constants/types'
import { InputComponent } from '@/components/general/input/InputComponent'
import { useForm } from 'react-hook-form'
import { ButtonComponent } from '@/components/button/ButtonComponent'
import { LayoutAccess } from '@/layouts/LayoutAccess'
import { getSession, signIn } from 'next-auth/react'
import Link from 'next/link'

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export const userDefaultValues = {
  email: '',
  password: ''
}

export type TLoginProps = {}

export const Signin = (props: TLoginProps) => {
  // TODO: change the functionality of userNotFound

  const form = useForm({ defaultValues: userDefaultValues })

  const onSubmitForm = (data: any) => {
    signIn('credentials', { ...data, redirect: true, callbackUrl: '/' })
  }

  return (
    <LayoutAccess card={true}>
      <main
        className='
            min-h-[500px]
            min-w-[500px]
            p-5 
            flex
            flex-col
            justify-center
      '>
        <TextComponent
          tag={enumTextTags.h1}
          sizeFont={enumTextSizes.s21}
          className='text-center font-bold'>
          {'¡Bienvenido!'}
        </TextComponent>

        {/* 
        <AlertComponent
          type={enumStatus.error}
          wrapperClasses='mt-5 animate__animated animate__shakeX'
          message='Los datos que ingresaste son incorrectos. Verifica que los datos sean los correspondientes.'
          onClose={() => setUserNotFound(false)}
        /> */}

        <form onSubmit={form.handleSubmit(onSubmitForm)}>
          <InputComponent
            labelText={'E-mail' + '*'}
            name='email'
            type='text'
            placeholder={'ejemplo@empresa.com'}
            wrapperClasses='my-4'
            useRegister
            register={form.register}
            validationSchema={{
              required: `${'El correo es requerido'}`
            }}
            hasError={!!form.formState.errors.email || false}
            errorMessage={form.formState.errors.email?.message}
          />

          <InputComponent
            labelText={'Contraseña' + '*'}
            name='password'
            type='password'
            placeholder={'Contraseña'}
            wrapperClasses='my-4'
            useRegister
            register={form.register}
            validationSchema={{
              required: `${'La contraseña es requerida'}`
            }}
            hasError={!!form.formState.errors.password || false}
            errorMessage={form.formState.errors.password?.message}
          />
          <div className='flex flex-row justify-between'>
            <div className='my-5'>
              <TextComponent className='text-withe hover:text-cyan-500'>
                <Link href='/auth/reset_password'>{'Recuperar contraseña'}</Link>
              </TextComponent>
            </div>

            <div className='my-5'>
              <TextComponent className='text-withe hover:text-cyan-500'>
                <Link href='/auth/register'>{'Registrate'}</Link>
              </TextComponent>
            </div>
          </div>

          <div className='text-center my-3'>
            <ButtonComponent
              btnClasses='min-w-[112px]'
              key='btn-login'
              type='submit'
              primary>
              {'Entrar'}
            </ButtonComponent>
          </div>
        </form>
      </main>
    </LayoutAccess>
  )
}

export default Signin
