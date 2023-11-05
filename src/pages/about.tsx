import { enumTextSizes, enumTextTags } from '@/constants/types'
import { TextComponent } from '../components/general/text/TextComponent'
import { UserIcon } from '@heroicons/react/20/solid'
import {
  BriefcaseIcon,
  TrophyIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import { LayoutAccess } from '@/layouts/LayoutAccess'
import Image from 'next/image'

// se crea un tipo de dato para poder iterar los skills y mostrarlos en pantalla
type Skill = {
  name: string
  icon: string
}

// se crea un tipo de dato para poder iterar los datos de contacto y mostrarlos en pantalla
type Contact = {
  icon: string
  data: string
  heroicon?: boolean
  heroiconComponent?: JSX.Element
}

// se crea un array de objetos de tipo skill para poder iterarlos y mostrarlos en pantalla

const skills: Skill[] = [
  {
    name: 'HTML',
    icon: '/icons/Html.svg'
  },
  {
    name: 'CSS',
    icon: '/icons/Css.svg'
  },
  {
    name: 'Javascript',
    icon: '/icons/logo-javascript.svg'
  },
  {
    name: 'Typescript',
    icon: '/icons/devicon_typescript.svg'
  },
  {
    name: 'React js',
    icon: '/icons/React.svg'
  },
  {
    name: 'Next js',
    icon: '/icons/Nextjs-white.svg'
  },
  {
    name: 'Node js',
    icon: '/icons/vscode-icons_file-type-node.svg'
  },
  {
    name: 'Docker',
    icon: '/icons/logo-docker.svg'
  },
  {
    name: 'Postman',
    icon: '/icons/devicon_postman.svg'
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/devicon_tailwindcss.svg'
  },
  {
    name: 'MySQL',
    icon: '/icons/devicon_mysql.svg'
  },
  {
    name: 'Prisma',
    icon: '/icons/devicon_prisma.svg'
  },
  {
    name: 'Redux',
    icon: '/icons/devicon_redux.svg'
  },
  {
    name: 'Git',
    icon: '/icons/devicon_git.svg'
  },
  {
    name: 'Figma',
    icon: '/icons/logos_figma.svg'
  },
  {
    name: 'Selenium',
    icon: '/icons/skill-icons_selenium.svg'
  },
  {
    name: 'Sass',
    icon: '/icons/logos_sass.svg'
  },
  {
    name: 'Jest',
    icon: '/icons/skill-icons_jest.svg'
  },
]

// se crea un array de objetos de tipo contact para poder iterarlos y mostrarlos en pantalla

const contacts: Contact[] = [
  {
    icon: '/icons/flag-mexico.svg',
    data: 'Campeche, Mexico',
    heroicon: false
  },
  {
    icon: '',
    data: '+52 981-178-50-39',
    heroiconComponent: <DevicePhoneMobileIcon className='w-9 h-auto ml-8 drop-shadow-[2px_8px_4px_rgba(0,0,0,0.4)]' />,
    heroicon: true
  },
  {
    icon: '',
    heroiconComponent: <EnvelopeIcon className='w-9 h-auto ml-8 drop-shadow-[2px_8px_4px_rgba(0,0,0,0.4)]' />,
    data: 'enyaoficial001@gmail.com',
    heroicon: true
  },
  {
    icon: '/icons/icon-linkedin.svg',
    data: 'www.linkedin.com/in/yair-chan',
    heroicon: false
  },
  {
    icon: '/icons/github.svg',
    data: 'github.com/IYair',
    heroicon: false
  }
]

const about = () => {
  return (
    <LayoutAccess>
      <div>
        <div className='grid grid-cols-3 h-screen w-full px-40 py-24 rounded-2xl -z-100 gap-14 overflow-y-scroll'>
          <section
            id='sideLeft'
            className='flex flex-col col-span-1'>
            <div className='relative aspect-[9/16] h-[650px]'>
              <Image
                src='/images/profile_picture.png'
                alt='Imagen de perfil'
                fill
                sizes='100%'
                priority
                style={{ objectFit: 'cover' }}
                className='rounded-2xl'
              />
              <div className='absolute bottom-[6%] left-[15%] flex flex-col h-auto w-3/4 items-center bg-opacity-20 bg-white backdrop-blur-xl rounded-3xl border-x-[1px] border-t-[1px]'>
                <TextComponent
                  tag={enumTextTags.h1}
                  sizeFont={enumTextSizes.s36}
                  className='text-white text-2xl font-bold mt-4 tracking-[0.2em] block text-center'>
                  YAIR CHAN
                </TextComponent>
                <div className='flex w-full'>
                  <div className='w-[20%] mr-1 h-px mt-3 bg-gradient-to-l from-white to-transparent'></div>
                  <TextComponent
                    tag={enumTextTags.h2}
                    sizeFont={enumTextSizes.s18}
                    className='text-white w-full font-thin mb-4 w-fit block text-center tracking-widest'>
                    SOFTWARE DEVELOPER
                  </TextComponent>
                  <div className='w-[20%] ml-1 h-px mt-3 bg-gradient-to-r from-white to-transparent'></div>
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <TextComponent
                tag={enumTextTags.h2}
                sizeFont={enumTextSizes.s36}
                className='flex text-white font-thin m-3'>
                <TrophyIcon className='w-10 h-auto mr-4 drop-shadow-[2px_8px_4px_rgba(0,0,0,0.4)]' />
                HABILIDADES TÉCNICAS
              </TextComponent>
              <div className='grid grid-cols-4 gap-4 mt-10'>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center'>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      height={64}
                      width={64}
                      className='w-16 h-16'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s16}
                      className='text-white text-justify font-thin'>
                      {skill.name}
                    </TextComponent>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-10'>
              <TextComponent
                tag={enumTextTags.h2}
                sizeFont={enumTextSizes.s36}
                className='flex text-white font-thin m-3'>
                <RocketLaunchIcon className='w-10 h-auto mr-4 drop-shadow-[2px_8px_4px_rgba(0,0,0,0.4)]' />
                CONTACTAME
              </TextComponent>
              <div className='flex flex-col space-y-6'>
                {contacts.map((contact, index) => (
                  <div
                    key={index}
                    className='flex flex-row items-center'>
                    {contact.heroicon ? (
                      <>{contact.heroiconComponent}</>
                    ) : (
                      <>
                        <Image
                          src={contact.icon}
                          alt={contact.data}
                          width={24}
                          height={24}
                          className='w-8 h-auto ml-8'
                        />
                      </>
                    )}
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s18}
                      className='text-white text-justify font-thin ml-2'>
                      {contact.data}
                    </TextComponent>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className='flex flex-col flex-nowrap p-4 col-span-2 bg-white rounded-2xl '>
            <TextComponent
              tag={enumTextTags.h2}
              sizeFont={enumTextSizes.s36}
              className='flex text-vingateBlue font-bold m-3'>
              <UserIcon className='w-10 h-auto mr-4 drop-shadow-[2px_8px_4px_rgba(0,0,0,0.4)]' />
              SOBRE MI
            </TextComponent>
            <TextComponent
              tag={enumTextTags.h3}
              sizeFont={enumTextSizes.s22}
              className='text-vingateBlue m-3'>
              Software Developer | Web Developer | Full Stack Developer
            </TextComponent>
            <TextComponent
              tag={enumTextTags.p}
              sizeFont={enumTextSizes.s16}
              className='text-vingateBlue text-justify m-3 pr-10'>
              Como profesional en tecnologías web y desarrollo de software, me destaco por mi pasión por la innovación y el aprendizaje
              constante. Mi enfoque se centra en encontrar soluciones creativas a los desafíos del desarrollo de software, utilizando mis
              habilidades de resolución de problemas y mi capacidad para adaptarme a entornos cambiantes. Mi compromiso con la excelencia y
              la calidad me impulsa a entregar resultados sobresalientes en cada proyecto en el que participo. <br />
            </TextComponent>
            <div className='w-full h-px mt-4 bg-gradient-to-r from-vingateBlue to-transparent'></div>
            <div className='mt-10'>
              <section className='flex flex-row flex-nowrap w-full'>
                <div className='flex flex-col w-fit'>
                  <div className='flex flex-row mb-2'>
                    <BriefcaseIcon className='w-10 h-auto ml-8  text-vingateBlue' />
                    <TextComponent
                      tag={enumTextTags.h2}
                      sizeFont={enumTextSizes.s36}
                      className='flex text-vingateBlue font-light mx-3'>
                      Experiencia Laboral
                    </TextComponent>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-l-2 border-dashed border-l-vingateBlue h-full w-fit ml-[3.2rem]'></div>
                    <div className='flex flex-col'>
                      <div className='my-4'>
                        <TextComponent
                          tag={enumTextTags.h3}
                          sizeFont={enumTextSizes.s36}
                          className='text-vingateBlue mx-3 font-medium tracking-wider'>
                          Front-end Developer
                        </TextComponent>
                        <TextComponent
                          tag={enumTextTags.p}
                          sizeFont={enumTextSizes.s20}
                          className='text-acent-500 text-justify mx-3'>
                          Grupo Icarus S.A. de C.V.
                        </TextComponent>
                        <TextComponent
                          tag={enumTextTags.p}
                          sizeFont={enumTextSizes.s16}
                          className='text-black text-justify ml-4 mr-16'>
                          En Grupo Icarus S.A. de C.V., tuve el privilegio de formar parte de un equipo{' '}
                          <strong>integral de desarrollo</strong>. Mi rol principal fue el de <strong>frontend developer</strong>, donde
                          utilicé <strong>React.js</strong> para crear aplicaciones web modernas y atractivas. Además, también desempeñé un
                          papel importante en el área de <strong>control de calidad (QA)</strong>, donde me encargué de realizar pruebas
                          automáticas utilizando <strong>Selenium</strong>.<br />
                          <br />
                          Como <strong>frontend developer</strong>, fui responsable de traducir los diseños y requisitos en código
                          funcional, asegurándome de que la interfaz de usuario fuera <strong>intuitiva</strong>, <strong>receptiva</strong>{' '}
                          y cumpliera con los estándares de <strong>usabilidad</strong>. Trabajé en estrecha colaboración con diseñadores y
                          otros desarrolladores para implementar nuevas funcionalidades y mejorar la experiencia del usuario.
                          <br />
                          <br />
                          En el ámbito de <strong>QA</strong>, utilicé Selenium para desarrollar pruebas automáticas que ayudaron a
                          garantizar la <strong>calidad</strong> y <strong>estabilidad</strong> de las aplicaciones web. Realicé pruebas
                          exhaustivas para identificar y solucionar problemas antes de lanzar las aplicaciones al público.
                          <br />
                          <br />
                          Mi experiencia en Grupo Icarus S.A. de C.V. me permitió fortalecer mis habilidades en el desarrollo frontend con{' '}
                          <strong>React.js</strong>, así como adquirir conocimientos en pruebas automáticas utilizando{' '}
                          <strong>Selenium</strong>. Estoy orgulloso de haber sido parte de un equipo talentoso y comprometido, y de haber
                          contribuido al éxito de los proyectos de la empresa.
                        </TextComponent>
                      </div>
                      <div className='my-4'>
                        <TextComponent
                          tag={enumTextTags.h3}
                          sizeFont={enumTextSizes.s36}
                          className='text-vingateBlue mx-3 font-medium tracking-wider'>
                          Desarrollador Web
                        </TextComponent>
                        <TextComponent
                          tag={enumTextTags.p}
                          sizeFont={enumTextSizes.s20}
                          className='text-acent-500 text-justify mx-3'>
                          M&S SOLUCION S.A DE C.V
                        </TextComponent>
                        <TextComponent
                          tag={enumTextTags.p}
                          sizeFont={enumTextSizes.s16}
                          className='text-black text-justify ml-4 mr-16'>
                          En M&S Solucion S.A de C.V, tuve la responsabilidad de crear y gestionar su página web. Durante mi tiempo en la
                          empresa, utilicé mis habilidades en desarrollo web para diseñar y desarrollar un sitio web atractivo y funcional
                          que cumplía con los objetivos comerciales de la organización. Además, me encargué de la gestión y actualización
                          continua de la página para garantizar su rendimiento y relevancia.
                          <br />
                          <br />A través de esta experiencia, pude fortalecer mis habilidades en diseño web y adquirir un conocimiento más
                          profundo sobre la importancia de una presencia en línea efectiva para las empresas.
                        </TextComponent>
                      </div>
                      <div className='my-4'>
                        <TextComponent
                          tag={enumTextTags.h3}
                          sizeFont={enumTextSizes.s36}
                          className='text-vingateBlue mx-3 font-medium tracking-wider'>
                          Freelancer Software Developer
                        </TextComponent>
                        <TextComponent
                          tag={enumTextTags.p}
                          sizeFont={enumTextSizes.s20}
                          className='text-acent-500 text-justify mx-3'>
                          Fiverr
                        </TextComponent>
                        <TextComponent
                          tag={enumTextTags.p}
                          sizeFont={enumTextSizes.s16}
                          className='text-black text-justify ml-4 mr-16'>
                          Como freelancer en Fiverr, he ganado experiencia diversa en el campo de la tecnología y el desarrollo de software.
                          Trabajando en proyectos desafiantes, he perfeccionado mis habilidades de comunicación, gestión del tiempo y
                          satisfacción del cliente. Estoy orgulloso de haber brindado soluciones efectivas y de calidad a clientes de
                          diversas industrias y países. Busco constantemente nuevos desafíos y oportunidades para seguir creciendo
                          profesionalmente.
                        </TextComponent>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='flex flex-row flex-nowrap w-full'>
                <div className='flex flex-col w-fit'>
                  <div className='flex flex-row mb-2'>
                    <AcademicCapIcon className='w-10 h-auto ml-8  text-acent-500' />
                    <TextComponent
                      tag={enumTextTags.h2}
                      sizeFont={enumTextSizes.s36}
                      className='flex text-acent-500 font-light mx-3'>
                      Capacitación Académica
                    </TextComponent>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-l-2 border-dashed border-l-acent-500 h-full w-fit ml-[3.2rem]'></div>
                    <div className='flex flex-col'>
                      <div className='my-4'>
                        <TextComponent
                          tag={enumTextTags.h3}
                          sizeFont={enumTextSizes.s36}
                          className='text-vingateBlue mx-3 font-medium tracking-wider'>
                          Universidad Autonoma de Campeche
                        </TextComponent>
                        <TextComponent
                          tag={enumTextTags.p}
                          sizeFont={enumTextSizes.s20}
                          className='text-acent-500 text-justify mx-3'>
                          Ingenieria en Tecnologia de Software
                        </TextComponent>
                      </div>
                      <div className='my-4'>
                        <TextComponent
                          tag={enumTextTags.h3}
                          sizeFont={enumTextSizes.s36}
                          className='text-vingateBlue mx-3 font-medium tracking-wider'>
                          Centro de Estudios Cientificos y Tecnologicos Plantel Campeche
                        </TextComponent>
                        <TextComponent
                          tag={enumTextTags.p}
                          sizeFont={enumTextSizes.s20}
                          className='text-acent-500 text-justify mx-3'>
                          Especialidad en Mecatronica
                        </TextComponent>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className='w-full h-px mt-4 bg-gradient-to-r from-vingateBlue to-transparent'></div>
              <section className='ml-10'>
                <TextComponent
                  tag={enumTextTags.h2}
                  sizeFont={enumTextSizes.s36}
                  className='flex text-vingateBlue font-extralight m-3'>
                  CURSOS
                </TextComponent>
                <div className='flex flex-col'>
                  <div className='flex flex-row w-full'>
                    <Image
                      src='/icons/simple-icons_platzi.svg'
                      alt='Platzi'
                      width={46}
                      height={46}
                      className='drop-shadow-[2px_8px_2px_rgba(0,0,0,0.4)]'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s36}
                      className='text-vingateBlue text-justify ml-2 tracking-widest'>
                      PLATZI
                    </TextComponent>
                  </div>
                  <div className='flex ml-16 mt-6'>
                    <Image
                      src='/icons/Git.svg'
                      alt='Git'
                      width={24}
                      height={24}
                      className='drop-shadow-[1px_2px_1px_rgba(0,0,0,0.4)]'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s20}
                      className='text-vingateBlue text-justify ml-2 tracking-widest'>
                      Curso profesional de Git y GitHub
                    </TextComponent>
                  </div>
                  <div className='flex ml-16 mt-4'>
                    <Image
                      src='/icons/Html.svg'
                      alt='HTML'
                      width={24}
                      height={24}
                      className='drop-shadow-[1px_2px_1px_rgba(0,0,0,0.4)]'
                    />
                    <Image
                      src='/icons/Css.svg'
                      alt='CSS'
                      width={24}
                      height={24}
                      className='drop-shadow-[1px_2px_1px_rgba(0,0,0,0.4)]'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s20}
                      className='text-vingateBlue text-justify ml-2 tracking-widest'>
                      Curso Practico de HTML y CSS
                    </TextComponent>
                  </div>
                  <div className='flex ml-16 mt-4'>
                    <Image
                      src='/icons/mdi_responsive.svg'
                      alt='Responsive'
                      width={24}
                      height={24}
                      className='drop-shadow-[1px_2px_1px_rgba(0,0,0,0.4)]'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s20}
                      className='text-vingateBlue text-justify ml-2 tracking-widest'>
                      Curso de Responsive Desing: Maquetacion Mobile First
                    </TextComponent>
                  </div>
                  <div className='flex ml-16 mt-4'>
                    <Image
                      src='/icons/python.svg'
                      alt='Python'
                      width={24}
                      height={24}
                      className='drop-shadow-[1px_2px_1px_rgba(0,0,0,0.4)]'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s20}
                      className='text-vingateBlue text-justify ml-2 tracking-widest'>
                      Curso Basico de Python
                    </TextComponent>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row w-full mt-10 ml-4'>
                    <Image
                      src='/icons/udemy.svg'
                      alt='Udemy'
                      width={140}
                      height={60}
                      className='drop-shadow-[2px_4px_2px_rgba(0,0,0,0.4)]'
                    />
                  </div>
                  <div className='flex ml-16 mt-10'>
                    <Image
                      src='/icons/Nextjs.svg'
                      alt='Nexdtjs'
                      width={36}
                      height={36}
                      className='drop-shadow-[1px_2px_1px_rgba(0,0,0,0.4)]'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s20}
                      className='text-vingateBlue text-justify ml-2 tracking-widest'>
                      Next.js: El framework de React para producción
                    </TextComponent>
                  </div>
                  <div className='flex ml-16 mt-4'>
                    <Image
                      src='/icons/React.svg'
                      alt='React'
                      width={36}
                      height={36}
                      className='drop-shadow-[1px_2px_1px_rgba(0,0,0,0.4)]'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s20}
                      className='text-vingateBlue text-justify ml-2 tracking-widest'>
                      Curso React: De cero a experto (Hooks y MERN)
                    </TextComponent>
                  </div>
                  <div className='flex ml-16 mt-4 mb-10'>
                    <Image
                      src='/icons/Laravel.svg'
                      alt='Laravel'
                      width={36}
                      height={36}
                      className='drop-shadow-[1px_2px_1px_rgba(0,0,0,0.4)]'
                    />
                    <TextComponent
                      tag={enumTextTags.p}
                      sizeFont={enumTextSizes.s20}
                      className='text-vingateBlue text-justify ml-2 tracking-widest'>
                      Crea un Ecommerce con Laravel, Livewire, Tailwind y Alpine
                    </TextComponent>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </LayoutAccess>
  )
}

export default about
