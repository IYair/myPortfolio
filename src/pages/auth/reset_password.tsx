import { TextComponent } from '../../components/general/text/TextComponent'
import { enumTextSizes, enumTextTags } from '@/constants/types'
import { InputComponent } from '@/components/general/input/InputComponent'
import { useForm } from 'react-hook-form'
import { ButtonComponent } from '@/components/button/ButtonComponent'
import { LayoutAccess } from '@/layouts/LayoutAccess'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export const userDefaultValues = {
  email: ''
}

export type TLoginProps = {}

export const ResetPassword = (props: TLoginProps) => {

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
          classNames='text-center font-bold'>
          {'Recuperacion de contraseña!'}
        </TextComponent>

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
          <div className='my-5'>
            <TextComponent classNames='text-withe hover:text-cyan-500'>
              <Link href='/auth/signin'>{'Inicia sesión'}</Link>
            </TextComponent>
          </div>

          <div className='text-center my-3'>
            <ButtonComponent
              btnClasses='min-w-[112px]'
              key='btn-login'
              type='submit'
              primary>
              {'Enviar'}
            </ButtonComponent>
          </div>
        </form>
      </main>
    </LayoutAccess>
  )
}

export default ResetPassword
