import { TextComponent } from '../../components/general/text/TextComponent'
import { enumTextSizes, enumTextTags } from '@/constants/types'
import { InputComponent } from '@/components/general/input/InputComponent'
import { useForm } from 'react-hook-form'
import { ButtonComponent } from '@/components/button/ButtonComponent'
import { LayoutAccess } from '@/layouts/LayoutAccess'
import { store } from '@/store/store'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react'

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  
  return {
    props: {}
  };
}

export const userDefaultValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: ''
}

export type TLoginProps = {}

export const Register = (props: TLoginProps) => {
  // TODO: change the functionality of userNotFound
  const router = useRouter()

  const form = useForm({ defaultValues: userDefaultValues })

  const onSubmitForm = async (data: any) => {
    if (data.password !== data.passwordConfirm) {
      return
    }
    console.log(data)
    const reponse = await store.dispatch.auth.register(data)
    if (reponse?.message === 'User created successfully') {
      router.push('/auth/signin')
    }
    console.log(reponse)
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
          className='text-center font-bold m-8'>
          {'Registrate!'}
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
            labelText={'Nombre' + '*'}
            name='name'
            type='text'
            placeholder={'Username'}
            wrapperClasses='my-4'
            useRegister
            register={form.register}
            validationSchema={{
              required: `${'El nombre es requerido'}`
            }}
            hasError={!!form.formState.errors.name || false}
            errorMessage={form.formState.errors.name?.message}
          />

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
            name='passwordConfirm'
            type='password'
            placeholder={'Contraseña'}
            wrapperClasses='my-4'
            useRegister
            register={form.register}
            validationSchema={{
              required: `${'La contraseña es requerida'}`
            }}
            hasError={!!form.formState.errors.passwordConfirm || false}
            errorMessage={form.formState.errors.passwordConfirm?.message}
          />

          <InputComponent
            labelText={'Confirma contraseña' + '*'}
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

          <div className='my-5'>
            <TextComponent className='text-withe hover:text-cyan-500'>
              <Link href='/auth/signin'>{'Inicia sesión'}</Link>
            </TextComponent>
          </div>

          <div className='text-center my-3'>
            <ButtonComponent
              btnClasses='min-w-[112px]'
              key='btn-login'
              type='submit'
              primary>
              {'Registrarse'}
            </ButtonComponent>
          </div>
        </form>
      </main>
    </LayoutAccess>
  )
}

export default Register
