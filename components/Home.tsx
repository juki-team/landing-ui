'use client';

import {
  ArticleIcon,
  Button,
  FacebookIcon,
  Footer,
  GmailIcon,
  JukiCompleteLaptopImage,
  MainMenu,
  NavigateNextIcon,
  PlayCircleIcon,
  ProductSlide,
  ProductsMenu,
  T,
  TelegramIcon,
} from 'components';
import { ExpandMoreIcon, Popover } from 'components/index';
import { useJukiUser } from 'hooks';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { MenuViewMode } from 'types';
import blogs from '../public/blogs_jk.png';
import mockup_1 from '../public/mockup_1.svg';
import novedades from '../public/novedades_jk.png';
import { Language, ProfileSetting } from '../types';

export function Home() {
  
  const { user } = useJukiUser();
  const isEs = user.settings?.[ProfileSetting.LANGUAGE] === Language.ES;
  
  return (
    <>
      <Head>
        <title>Juki App</title>
        <meta name="description" content="Juki App" />
        <link rel="icon" href="/juki-head-ico.png" />
      </Head>
      <MainMenu
        onSeeMyProfile={() => {
        }}
        menu={[
          {
            icon: null,
            label: <div className="jk-row cr-pd fw-bd tx-m"><T>products</T><ExpandMoreIcon /></div>,
            selected: false,
            menuItemWrapper: ({ children }) => (
              <Popover
                content={
                  <ProductsMenu />
                }
                triggerOn="click"
                placement="bottomLeft"
                marginOfChildren={1}
              >
                <div>{children}</div>
              </Popover>
            ),
          },
          {
            icon: <ArticleIcon />,
            label: <T>news</T>,
            selected: false,
            menuItemWrapper: ({ children }) => (
              <div className="cr-pd">{children}</div>
            ),
          },
          {
            icon: <ArticleIcon />,
            label: <T>blog</T>,
            selected: false,
            menuItemWrapper: ({ children }) => (
              <div className="cr-pd">{children}</div>
            ),
          },
          {
            icon: <ArticleIcon />,
            label: <T>about us</T>,
            selected: false,
            menuItemWrapper: ({ children }) => (
              <div className="cr-pd">{children}</div>
            ),
          },
        ]}
        menuViewMode={MenuViewMode.HORIZONTAL}
      >
        <div className="jk-col top nowrap stretch" style={{ overflowY: 'scroll', maxHeight: '100%' }}>
          <div className="jk-col nowrap">
            <div className="jk-row extend">
              <div className="jk-col bc-w2 jk-pad-lg" style={{ width: 'var(--modal-width)' }}>
                <div className="jk-row extend">
                  <div className="jk-col flex-1 jk-pad-lg">
                    <div className="jk-col">
                      <p style={{ fontSize: '60px', lineHeight: '1' }}>
                        {
                          isEs ?
                            (<>El < span className="cr-at">hogar</span> para <span className="fw-bd">programadores</span>
                              <span className="fw-bd cr-py">competitivos</span></>) :
                            (<>The < span className="cr-at">home</span> for <span className="fw-bd">competitive</span>
                              <span
                                className="fw-bd cr-py"
                              >programmers</span></>)
                        }
                      </p>
                      <p className="tx-h cr-g3 pad-top-bottom">
                        <T>
                          Juki is an advanced platform designed to enhance programming skills. With its comprehensive
                          resources and interactive coding exercises, Juki provides an immersive environment for
                          individuals
                          to continuously develop and grow their programming expertise
                        </T>
                      </p>
                    </div>
                    <div className="jk-row left extend gap">
                      <div className="jk-row gap">
                        <Button
                          className="jk-border-radius bc-we cr-pd"
                          style={{ textTransform: 'none', border: '1px solid black', borderRadius: '5%' }}
                        >
                          <div className="jk-row nowrap jk-pad-sm"><PlayCircleIcon size="small" />
                            <div>Demo</div>
                          </div>
                        </Button>
                        <Button className="bc-py" style={{ textTransform: 'none', height: '100%', borderRadius: '5%' }}>
                          <div className="jk-row nowrap jk-pad-sm"><T>Sign up</T></div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="jk-row flex-1">
                    <div className="jk-row jk-pad-lg"><JukiCompleteLaptopImage /></div>
                  </div>
                </div>
                
                <div
                  className="jk-row center fw-nl pad-top-bottom"
                  style={{ width: 'calc(var(--modal-width) - 6 * var(--screen-col-width))' }}
                >
                  {isEs ?
                    <p className="tx-h cr-g3 ta-cr">
                      Hemos desarrollado tres productos
                      clave: <span className="cr-py">Juki Judge</span>, <span className="cr-py">Juki Couch</span> y <span
                      className="cr-py"
                    >Juki Utils</span>. Estos productos están diseñados meticulosamente para ofrecer a los usuarios una
                      experiencia integral de aprendizaje en programación. Cada producto está adaptado para satisfacer
                      diferentes necesidades, asegurando que los usuarios puedan mejorar sus habilidades de programación
                      de
                      manera integral
                    </p> :
                    <p className="tx-h cr-g3 ta-cr">
                      We have developed three key
                      products: <span className="cr-py">Juki Judge</span>, <span className="cr-py">Juki Couch</span>,
                      and <span className="cr-py">Juki Utils</span>. These products are meticulously designed to offer
                      users
                      a comprehensive learning experience in programming. Each product is tailored to meet different
                      needs,
                      ensuring that users can enhance their programming skills in a holistic manner
                    </p>
                  }
                
                </div>
              </div>
            
            </div>
            
            {
              /*
            <ProductSlide
              name="Juki Judge"
              description="Con Juki Judge, los programadores pueden competir con otros usuarios en línea y comparar sus resultados para motivarse a seguir mejorando."
              logoUrl="https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg"
              sections={[
                {
                  name: 'Concursos',
                  description: 'Para participar en un concurso de programacion en Juki Judge, los programadores deben registrarse en la plataforma y elegir el concurso en el que desean participar. Una vez que el concurso comienza, los programadores tienen un tiempo limitado para resolver los problemas de programacion utilizando un editor de codigo en linea',
                  image: mockup_1,
                },
                {
                  name: 'Problemas',
                  description: '',
                  image: mockup_1,
                },
                {
                  name: 'Posiciones',
                  description: '',
                  image: mockup_1,
                },
              ]}
              urlDescription="Explora Juki Judge"
            />  */
              products.map((product, index) => (
                <ProductSlide
                  key={index}
                  name={product.name}
                  description={product.description}
                  logoUrl={product.logoUrl}
                  sections={product.sections}
                  urlDescription={product.urlDescription}
                  even={index % 2 === 0}
                />
              ))
              
            }
            
            
            <div className="jk-row extend nowrap">
              
              <div className="jk-col bc-w2 pad-top" style={{ width: 'var(--modal-width)' }}>
                <div
                  className="jk-row pad-top"
                  style={{ width: 'calc(var(--modal-width) - 4 * var(--screen-col-width))' }}
                >
                  <h2 className="ta-cr">
                <span className="cr-bk fw-bd">
                  Unete a la comunidad hoy y comienza a mejorar tus habilidades en programacion
                </span>
                  </h2>
                </div>
                <div
                  className="jk-row pad-top-bottom"
                  style={{ width: 'calc(var(--modal-width) - 4 * var(--screen-col-width))' }}
                ><p className="tx-h ta-cr cr-g3">Juki es una plataforma diseñada para ayudar a las personas a mejorar
                  sus
                  habilidades de programacion y alcanzar sus objetivos de carrera.</p></div>
                <div className="jk-row jk-pad-lg">
                  <div className="jk-row jk-pad-lg bc-we jk-border-radius nowrap elevation-2">
                    <div className="jk-col flex-1">
                      <h1><span className="cr-sy fw-bd" style={{ fontSize: '45px' }}>10K+</span></h1>
                      <p className="fw-bd ta-cr">Miembros de la comunidad agregados cada mes</p>
                    </div>
                    <div className="jk-col flex-1">
                      <h1><span className="cr-py fw-bd" style={{ fontSize: '45px' }}>5K+</span></h1>
                      <p className="fw-bd ta-cr">Problemas resueltos cada mes</p>
                    </div>
                    <div className="jk-col flex-1">
                      <h1><span className="cr-ss fw-bd" style={{ fontSize: '45px' }}>1k+</span></h1>
                      <p className="fw-bd ta-cr">Problemas resueltos cada mes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="jk-row extend bc-we">
              
              <div className="jk-col nowrap" style={{ width: 'var(--modal-width)' }}>
                <div className="jk-row pad-top"><h1><span className="cr-py fw-bd">Comunidad</span></h1></div>
                <div className="jk-row extend gap jk-pad-lg nowrap">
                  <div
                    className="jk-col jk-pad-lg jk-border-radius elevation-3"
                    style={{ width: 'calc(var(--modal-width) - 9 * var(--screen-col-width))' }}
                  >
                    <div className="jk-row extend center pad-top"><h3>Blog</h3></div>
                    <div className="jk-pad-sm ta-cr"><p className="cr-g3">Accede a nuestra seccion de noticias donde
                      podra
                      encontrar informacion actualizada de nuestras actividades</p></div>
                    <div className="jk-row extend" style={{ position: 'relative', height: '200px' }}><Image
                      src={blogs} alt="Juki Logo" fill style={{ objectFit: 'contain' }}
                    /></div>
                    <a>
                      <div className="jk-row jk-pad-lg">Ir al blog <NavigateNextIcon /></div>
                    </a>
                  </div>
                  
                  <div
                    className="jk-col jk-pad-lg jk-border-radius elevation-3"
                    style={{ width: 'calc(var(--modal-width) - 9 * var(--screen-col-width))' }}
                  >
                    <div className="jk-row extend center pad-top"><h3>Novedades</h3></div>
                    <div className="jk-pad-sm ta-cr"><p className="cr-g3">Accede a nuestra seccion de noticias donde
                      podra
                      encontrar informacion actualizada de nuestras actividades</p></div>
                    <div className="jk-row extend" style={{ position: 'relative', height: '200px' }}><Image
                      src={novedades} alt="Juki Logo" fill style={{ objectFit: 'contain' }}
                    /></div>
                    <a>
                      <div className="jk-row jk-pad-lg">Ir a las novedades <NavigateNextIcon /></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="jk-row extend">
              <div className="jk-col bc-w2" style={{ width: 'var(--modal-width)' }}>
                <div className="jk-row pad-top"><h1><span className="cr-py fw-bd">Conoce a nuestro equipo</span></h1>
                </div>
                <div className="jk-row jk-pad-lg"><p className="tx-h ta-cr cr-g3" style={{ width: '70%' }}>Nuestra
                  filosofia
                  es simple: contrate un equipo de personas diversas y apasionadas y forme una cultura que lo capacite
                  para
                  hacer su mejor trabajo</p></div>
                <div className="jk-row jk-pad-lg">
                  {/* <div className="jk-col jk-pad-lg">
                <Image src="https://images.juki.pub/c/juki-head.svg" className="jk-user-profile-img huge elevation-1 bc-we" alt="Juki team" width={150} height={150} style={{ width: "150px", height: "150px" }} />
                <span className="tx-l fw-bd">Juan Perez</span>
                <span className="cr-py">Fundador & CEO</span>
                <span>Lider, Fundador y formador de Juki.</span>
                <span>Personal inicial en Juki</span>
                <div className="jk-row gap"><FacebookIcon /><TelegramIcon /></div>
              </div>

              <div className="jk-col jk-pad-lg">
                <Image src="https://images.juki.pub/c/juki-head.svg" className="jk-user-profile-img huge elevation-1 bc-we" alt="Juki team" width={150} height={150} style={{ width: "150px", height: "150px" }} />
                <span className="tx-l fw-bd">Juan Perez</span>
                <span className="cr-py">Fundador & CEO</span>
                <span>Lider, Fundador y formador de Juki.</span>
                <span>Personal inicial en Juki</span>
                <div className="jk-row gap"><FacebookIcon /><TelegramIcon /></div>
              </div>

              <div className="jk-col jk-pad-lg">
                <Image src="https://images.juki.pub/c/juki-head.svg" className="jk-user-profile-img huge elevation-1 bc-we" alt="Juki team" width={150} height={150} style={{ width: "150px", height: "150px" }} />
                <span className="tx-l fw-bd">Juan Perez</span>
                <span className="cr-py">Fundador & CEO</span>
                <span>Lider, Fundador y formador de Juki.</span>
                <span>Personal inicial en Juki</span>
                <div className="jk-row gap"><FacebookIcon /><TelegramIcon /></div>
              </div> */}
                  {
                    jukiTeam.map((member, index) => (
                      <div key={index} className="jk-col jk-pad-lg">
                        <Image
                          src={member.image} className="jk-user-profile-img huge elevation-1 bc-we" alt="Juki team"
                          width={150} height={150} style={{ width: '150px', height: '150px' }}
                        />
                        <span className="tx-l fw-bd">{member.name}</span>
                        <span className="cr-py">{member.title}</span>
                        <span>{member.roles.join(', ')}</span>
                        <span>{member.description}</span>
                        <div className="jk-row gap">
                          {
                            member.socialMedia.map((socialMedia, index) => (
                              <a key={index} href={socialMedia.url}>{
                                (() => {
                                  if (socialMedia.name === 'Facebook') return (<FacebookIcon />);
                                  if (socialMedia.name === 'Telegram') return (<TelegramIcon />);
                                  if (socialMedia.name === 'Gmail') return (<GmailIcon />);
                                })()
                              }</a>
                            ))
                          }
                        </div>
                      </div>
                    ))
                    
                  }
                </div>
              </div>
            </div>
            
            <Footer />
          </div>
        </div>
      </MainMenu>
    </>
  );
}

const jukiTeam = [
  {
    name: 'Oscar Gauss Carvajal Yucra',
    title: 'Fundador & CEO',
    roles: [ 'Frontend Developer', 'Backend Developer', 'SRE' ],
    description: 'Personal inicial en Juki',
    image: 'https://images.juki.pub/c/juki-head.svg',
    socialMedia: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/oscargauss',
      },
      {
        name: 'Telegram',
        url: 'https://t.me/OscarGauss',
      },
      {
        name: 'Gmail',
        url: 'mailto:oscargausscarvajal@gmail.com',
      },
    ],
  },
  {
    name: 'Carlos Fernando Torrez Alanoca',
    title: 'Backend Developer',
    roles: [ 'Backend Developer' ],
    description: 'Personal inicial en Juki',
    image: 'https://images.juki.pub/c/juki-head.svg',
    socialMedia: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/oscargauss',
      },
      {
        name: 'Telegram',
        url: 'https://t.me/OscarGauss',
      },
      {
        name: 'Gmail',
        url: 'mailto:oscargausscarvajal@gmail.com',
      },
    ],
  },
  {
    name: 'Rodrigo Javier Castillo Gúzman',
    title: 'UX',
    roles: [ 'UX' ],
    description: 'Personal inicial en Juki',
    image: 'https://images.juki.pub/c/juki-head.svg',
    socialMedia: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/oscargauss',
      },
      {
        name: 'Telegram',
        url: 'https://t.me/OscarGauss',
      },
      {
        name: 'Gmail',
        url: 'mailto:oscargausscarvajal@gmail.com',
      },
    ],
  },
  {
    name: 'Alfredo Francisco Ramos Huallpa',
    title: 'Graphic Designer, UI, UX',
    roles: [ 'Graphic Designer', 'UI', 'UX' ],
    description: 'Personal inicial en Juki',
    image: 'https://images.juki.pub/c/juki-head.svg',
    socialMedia: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/oscargauss',
      },
      {
        name: 'Telegram',
        url: 'https://t.me/OscarGauss',
      },
      {
        name: 'Gmail',
        url: 'mailto:oscargausscarvajal@gmail.com',
      },
    ],
  },
  {
    name: 'Carlos Mijael Tola Apaza',
    title: 'Frontend Developer',
    roles: [ 'Frontend Developer' ],
    description: 'Personal inicial en Juki',
    image: 'https://images.juki.pub/c/juki-head.svg',
    socialMedia: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/oscargauss',
      },
      {
        name: 'Telegram',
        url: 'https://t.me/OscarGauss',
      },
      {
        name: 'Gmail',
        url: 'mailto:oscargausscarvajal@gmail.com',
      },
    ],
  },
  {
    name: 'Alexis Jaime Vargas Quelca',
    title: 'Frontend Developer',
    roles: [ 'Frontend Developer' ],
    description: 'Personal inicial en Juki',
    image: 'https://images.juki.pub/c/juki-head.svg',
    socialMedia: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/oscargauss',
      },
      {
        name: 'Telegram',
        url: 'https://t.me/OscarGauss',
      },
      {
        name: 'Gmail',
        url: 'mailto:oscargausscarvajal@gmail.com',
      },
    ],
  },
];
/*
  "Juki Judge offers an exciting and dynamic contest feature that allows programmers to showcase their skills, compete with peers, and challenge themselves in a stimulating environment. The contest section of Juki Judge provides a platform for programmers to participate in coding battles, putting their abilities to the test." : "Juki Judge ofrece una emocionante y dinámica función de concursos que permite a los programadores mostrar sus habilidades, competir con sus pares y desafiarse a sí mismos en un entorno estimulante. La sección de concursos de Juki Judge proporciona una plataforma para que los programadores participen en batallas de programación, poniendo a prueba sus habilidades.",
  "Juki Judge presents a vast collection of carefully curated programming problems, designed to challenge and engage programmers of all levels. The problems section provides an extensive library of coding exercises and algorithmic puzzles, covering various domains of computer science and programming languages." : "Juki Judge presenta una amplia colección de problemas de programación cuidadosamente seleccionados, diseñados para desafiar y cautivar a programadores de todos los niveles. La sección de problemas proporciona una extensa biblioteca de ejercicios de codificación y acertijos algorítmicos, abarcando diversos dominios de la ciencia de la computación y lenguajes de programación.",
  "Juki Judge recognizes and celebrates the achievements of programmers through its positions system. The positions section showcases the rankings and accomplishments of users based on their performance in contests and problem-solving activities. By participating in contests and solving problems on Juki Judge, users can earn points and climb up the positions leaderboard. The positions are based on factors such as contest rankings, problem-solving proficiency, and overall contributions to the Juki Judge community." : "Juki Judge reconoce y celebra los logros de los programadores a través de su sistema de posiciones. La sección de posiciones muestra las clasificaciones y los logros de los usuarios en función de su desempeño en concursos y actividades de resolución de problemas. Al participar en concursos y resolver problemas en Juki Judge, los usuarios pueden ganar puntos y ascender en el ranking de posiciones. Las posiciones se basan en factores como la clasificación en concursos, la destreza en la resolución de problemas y las contribuciones generales a la comunidad de Juki Judge.",
  "Juki Coach is a transformative tool designed to empower programmers at every stage of their coding journey. Whether you're a beginner taking your first steps or an experienced developer looking to enhance your skills, Juki Coach is here to guide and support you along the way. With its comprehensive resources, personalized learning paths, and expert guidance, Juki Coach is your trusted companion in mastering programming concepts and advancing your coding proficiency. Embark on a transformative learning experience and unleash your full programming potential with Juki Coach" : "Juki Coach es una herramienta transformadora diseñada para potenciar a programadores en cada etapa de su camino de codificación. Ya seas principiante dando tus primeros pasos o un desarrollador experimentado buscando mejorar tus habilidades, Juki Coach está aquí para guiarte y apoyarte en el camino. Con sus recursos completos, trayectorias de aprendizaje personalizadas y orientación experta, Juki Coach es tu compañero de confianza para dominar conceptos de programación y mejorar tu destreza en la codificación. Embárcate en una experiencia de aprendizaje transformadora y desata todo tu potencial en programación con Juki Coach",
  "Juki Coach offers a comprehensive selection of curated programming courses designed to cater to learners of all levels. These courses cover various programming languages, frameworks, and concepts, providing a structured and guided approach to learning. From introductory courses for beginners to advanced topics for experienced programmers, Juki Coach offers a diverse range of courses to suit different learning goals. Each course features engaging lessons, practical examples, and interactive exercises, ensuring a dynamic and immersive learning experience. With Juki Coach's courses, learners can acquire new skills, expand their knowledge, and stay up-to-date with the latest trends in programming." : "Juki Coach ofrece una amplia selección de cursos de programación cuidadosamente diseñados para satisfacer las necesidades de estudiantes de todos los niveles. Estos cursos abarcan diferentes lenguajes de programación, frameworks y conceptos, brindando un enfoque estructurado y guiado para el aprendizaje. Desde cursos introductorios para principiantes hasta temas avanzados para programadores experimentados, Juki Coach ofrece una variedad de cursos para adaptarse a diferentes metas de aprendizaje. Cada curso presenta lecciones interactivas, ejemplos prácticos y ejercicios interactivos, garantizando una experiencia de aprendizaje dinámica e inmersiva. Con los cursos de Juki Coach, los estudiantes pueden adquirir nuevas habilidades, ampliar sus conocimientos y mantenerse actualizados con las últimas tendencias en programación.",
  "Juki Coach presents a collection of hands-on coding tasks that allow learners to apply their knowledge and practice their programming skills. These tasks are designed to reinforce the concepts learned in courses and provide real-world scenarios for learners to tackle. Each task is accompanied by clear instructions, sample inputs, and expected outputs, enabling learners to solve problems using their programming expertise. By completing tasks in Juki Coach, learners gain valuable practical experience, build their problem-solving abilities, and become more confident in their coding abilities." : "Juki Coach presenta una colección de desafíos prácticos de codificación que permiten a los estudiantes aplicar sus conocimientos y practicar sus habilidades de programación. Estas tareas están diseñadas para reforzar los conceptos aprendidos en los cursos y brindar escenarios del mundo real para que los estudiantes resuelvan. Cada tarea viene acompañada de instrucciones claras, ejemplos de entrada y salidas esperadas, lo que permite a los estudiantes resolver problemas utilizando sus habilidades de programación. Al completar tareas en Juki Coach, los estudiantes adquieren valiosa experiencia práctica, desarrollan sus habilidades de resolución de problemas y ganan confianza en sus habilidades de codificación.",
  "Juki Coach provides an avenue for collaboration and teamwork among learners. Users can form teams, join existing teams, or participate in team-based projects to work collectively on coding challenges and projects. The teams section encourages knowledge sharing, peer-to-peer support, and fosters a sense of community among learners. By collaborating with fellow programmers, learners can leverage diverse perspectives, enhance their communication skills, and gain insights from different approaches to problem-solving. The teams section in Juki Coach promotes a cooperative learning environment where learners can grow together and collectively achieve their programming goals." : "Juki Coach proporciona un espacio para la colaboración y el trabajo en equipo entre los estudiantes. Los usuarios pueden formar equipos, unirse a equipos existentes o participar en proyectos basados en equipos para trabajar colectivamente en desafíos de codificación y proyectos. La sección de equipos fomenta el intercambio de conocimientos, el apoyo mutuo y promueve un sentido de comunidad entre los estudiantes. Al colaborar con otros programadores, los estudiantes pueden aprovechar perspectivas diversas, mejorar sus habilidades de comunicación y obtener ideas de enfoques diferentes para la resolución de problemas. La sección de equipos en Juki Coach fomenta un entorno de aprendizaje cooperativo donde los estudiantes pueden crecer juntos y alcanzar colectivamente sus metas de programación.",
  "Juki Coach helps learners organize and plan their learning journey effectively. Users can create personalized schedules, set learning goals, and track their progress over time. The schedules section allows learners to allocate dedicated time for studying courses, completing tasks, and engaging in team activities. By managing their schedules in Juki Coach, learners can maintain a structured approach to learning, stay motivated, and make steady progress towards their programming aspirations. The schedules section empowers learners to take control of their learning experience and optimize their time for efficient skill development." : "Juki Coach ayuda a los estudiantes a organizar y planificar de manera efectiva su proceso de aprendizaje. Los usuarios pueden crear horarios personalizados, establecer metas de aprendizaje y realizar un seguimiento de su progreso a lo largo del tiempo. La sección de horarios permite a los estudiantes asignar tiempo dedicado al estudio de los cursos, la finalización de tareas y la participación en actividades de equipo. Al administrar sus horarios en Juki Coach, los estudiantes pueden mantener un enfoque estructurado para el aprendizaje, mantener la motivación y avanzar de manera constante hacia sus aspiraciones de programación. La sección de horarios capacita a los estudiantes para tomar el control de su experiencia de aprendizaje y optimizar su tiempo para un desarrollo de habilidades eficiente.",
  "Juki Utils is a game-changing toolkit designed to optimize your programming process. From powerful code snippets to time-saving utilities, Juki Utils equips you with the tools you need to boost efficiency and unlock new levels of productivity. Simplify complex tasks, automate repetitive actions, and accelerate your coding endeavors with Juki Utils. Experience a seamless and efficient programming workflow like never before" : "Juki Utils es un conjunto de herramientas revolucionarias diseñadas para optimizar tu proceso de programación. Desde potentes fragmentos de código hasta utilidades que te ayudan a ahorrar tiempo, Juki Utils te brinda las herramientas que necesitas para aumentar la eficiencia y alcanzar nuevos niveles de productividad. Simplifica tareas complejas, automatiza acciones repetitivas y acelera tus esfuerzos de codificación con Juki Utils. Experimenta un flujo de trabajo de programación fluido y eficiente como nunca antes",
  "Juki Utils provides a centralized and organized repository for storing and managing your code snippets. With an intuitive interface and powerful search functionality, you can easily access and retrieve your code snippets whenever you need them. Keep your code snippets organized, share them with others, and collaborate seamlessly with team members. The codes section in Juki Utils simplifies code management and accelerates your development process." : "Juki Utils proporciona un repositorio centralizado y organizado para almacenar y gestionar tus fragmentos de código. Con una interfaz intuitiva y una potente función de búsqueda, puedes acceder y recuperar fácilmente tus fragmentos de código cuando los necesites. Mantén tus fragmentos de código organizados, compártelos con otros y colabora sin problemas con los miembros del equipo. La sección de códigos en Juki Utils simplifica la gestión del código y acelera tu proceso de desarrollo.",
  "Juki Utils offers a convenient space for creating, storing, and accessing your programming-related documents. Whether you need to write technical specifications, documentation, or project notes, Juki Utils provides a user-friendly editor with formatting options. Keep your documents organized, collaborate with others, and ensure seamless documentation for your projects. The documents section in Juki Utils enhances your productivity and facilitates efficient information sharing." : "Juki Utils ofrece un espacio conveniente para crear, almacenar y acceder a tus documentos relacionados con la programación. Ya sea que necesites escribir especificaciones técnicas, documentación o notas de proyecto, Juki Utils ofrece un editor fácil de usar con opciones de formato. Mantén tus documentos organizados, colabora con otros y garantiza una documentación fluida para tus proyectos. La sección de documentos en Juki Utils mejora tu productividad y facilita el intercambio eficiente de información.",
  "Juki Utils serves as a collaborative space for team communication and project management. Create boards, add tasks, assign responsibilities, and track progress all in one place. Visualize your project's workflow, discuss ideas, and stay aligned with your team members. The board section in Juki Utils streamlines communication, enhances collaboration, and ensures effective project coordination." : "Juki Utils sirve como un espacio de colaboración para la comunicación del equipo y la gestión de proyectos. Crea tableros, agrega tareas, asigna responsabilidades y realiza un seguimiento del progreso, todo en un solo lugar. Visualiza el flujo de trabajo de tu proyecto, discute ideas y mantente alineado con los miembros de tu equipo. La sección de tablero en Juki Utils simplifica la comunicación, mejora la colaboración y garantiza una coordinación efectiva del proyecto.",
  "Juki Utils simplifies the process of generating input test cases for your programs. With customizable options, you can quickly create a variety of test cases to validate your code's functionality. Specify input constraints, generate multiple test cases at once, and ensure thorough testing of your programs. The input test case generator in Juki Utils saves time, improves testing efficiency, and helps you deliver robust and error-free code." : "Juki Utils simplifica el proceso de generación de casos de prueba de entrada para tus programas. Con opciones personalizables, puedes crear rápidamente una variedad de casos de prueba para validar la funcionalidad de tu código. Especifica las restricciones de entrada, genera múltiples casos de prueba a la vez y asegúrate de realizar pruebas exhaustivas en tus programas. El generador de casos de prueba de entrada en Juki Utils ahorra tiempo, mejora la eficiencia de las pruebas y te ayuda a entregar un código sólido y libre de errores.",
  "Juki Utils provides a convenient way to shorten long URLs and make them more manageable. Simply enter a lengthy URL, and Juki Utils will generate a short and shareable link. Whether you need to share URLs in emails, social media posts, or any other platform, the URL shortener in Juki Utils simplifies the process. Easily track the number of clicks and monitor the performance of your shortened links. The URL shortener in Juki Utils enhances link management and improves user experience." : "Juki Utils proporciona una forma conveniente de acortar URLs largas y hacerlas más manejables. Simplemente ingresa una URL extensa y Juki Utils generará un enlace corto y fácil de compartir. Ya sea que necesites compartir URLs en correos electrónicos, publicaciones en redes sociales o cualquier otra plataforma, el acortador de URL en Juki Utils simplifica el proceso. Realiza un seguimiento fácil del número de clics y supervisa el rendimiento de tus enlaces acortados. El acortador de URL en Juki Utils mejora la gestión de enlaces y mejora la experiencia del usuario."
*/

const products = [
  {
    name: 'Juki Judge',
    description: 'With Juki Judge, programmers have the ability to engage in online competitions with fellow users, enabling them to benchmark their skills and derive motivation for continuous improvement. By comparing results and striving for better outcomes, Juki Judge inspires programmers to elevate their abilities and strive for excellence in their craft.',
    logoUrl: 'https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg',
    sections: [
      {
        name: 'Contests',
        description: 'Juki Judge offers an exciting and dynamic contest feature that allows programmers to showcase their skills, compete with peers, and challenge themselves in a stimulating environment. The contest section of Juki Judge provides a platform for programmers to participate in coding battles, putting their abilities to the test.',
        image: mockup_1,
      },
      {
        name: 'Problems',
        description: 'Juki Judge presents a vast collection of carefully curated programming problems, designed to challenge and engage programmers of all levels. The problems section provides an extensive library of coding exercises and algorithmic puzzles, covering various domains of computer science and programming languages.',
        image: mockup_1,
      },
      {
        name: 'Positions',
        description: 'Juki Judge recognizes and celebrates the achievements of programmers through its positions system. The positions section showcases the rankings and accomplishments of users based on their performance in contests and problem-solving activities. By participating in contests and solving problems on Juki Judge, users can earn points and climb up the positions leaderboard. The positions are based on factors such as contest rankings, problem-solving proficiency, and overall contributions to the Juki Judge community.',
        image: mockup_1,
      },
    ],
    urlDescription: 'Explore Juki Judge',
  },
  {
    name: 'Juki Couch',
    description: 'Juki Coach is a transformative tool designed to empower programmers at every stage of their coding journey. Whether you\'re a beginner taking your first steps or an experienced developer looking to enhance your skills, Juki Coach is here to guide and support you along the way. With its comprehensive resources, personalized learning paths, and expert guidance, Juki Coach is your trusted companion in mastering programming concepts and advancing your coding proficiency. Embark on a transformative learning experience and unleash your full programming potential with Juki Coach',
    logoUrl: 'https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg',
    sections: [
      {
        name: 'Courses',
        description: 'Juki Coach offers a comprehensive selection of curated programming courses designed to cater to learners of all levels. These courses cover various programming languages, frameworks, and concepts, providing a structured and guided approach to learning. From introductory courses for beginners to advanced topics for experienced programmers, Juki Coach offers a diverse range of courses to suit different learning goals. Each course features engaging lessons, practical examples, and interactive exercises, ensuring a dynamic and immersive learning experience. With Juki Coach\'s courses, learners can acquire new skills, expand their knowledge, and stay up-to-date with the latest trends in programming.',
        image: mockup_1,
      },
      {
        name: 'Tasks',
        description: 'Juki Coach presents a collection of hands-on coding tasks that allow learners to apply their knowledge and practice their programming skills. These tasks are designed to reinforce the concepts learned in courses and provide real-world scenarios for learners to tackle. Each task is accompanied by clear instructions, sample inputs, and expected outputs, enabling learners to solve problems using their programming expertise. By completing tasks in Juki Coach, learners gain valuable practical experience, build their problem-solving abilities, and become more confident in their coding abilities.',
        image: mockup_1,
      },
      {
        name: 'Teams',
        description: 'Juki Coach provides an avenue for collaboration and teamwork among learners. Users can form teams, join existing teams, or participate in team-based projects to work collectively on coding challenges and projects. The teams section encourages knowledge sharing, peer-to-peer support, and fosters a sense of community among learners. By collaborating with fellow programmers, learners can leverage diverse perspectives, enhance their communication skills, and gain insights from different approaches to problem-solving. The teams section in Juki Coach promotes a cooperative learning environment where learners can grow together and collectively achieve their programming goals.',
        image: mockup_1,
      },
      {
        name: 'Schedules',
        description: 'Juki Coach helps learners organize and plan their learning journey effectively. Users can create personalized schedules, set learning goals, and track their progress over time. The schedules section allows learners to allocate dedicated time for studying courses, completing tasks, and engaging in team activities. By managing their schedules in Juki Coach, learners can maintain a structured approach to learning, stay motivated, and make steady progress towards their programming aspirations. The schedules section empowers learners to take control of their learning experience and optimize their time for efficient skill development.',
        image: mockup_1,
      },
    ],
    urlDescription: 'Explore Juki Coach',
  },
  {
    name: 'Juki Utils',
    description: 'Juki Utils is a game-changing toolkit designed to optimize your programming process. From powerful code snippets to time-saving utilities, Juki Utils equips you with the tools you need to boost efficiency and unlock new levels of productivity. Simplify complex tasks, automate repetitive actions, and accelerate your coding endeavors with Juki Utils. Experience a seamless and efficient programming workflow like never before',
    logoUrl: 'https://images.juki.pub/c/juki-judge-logo-horizontal-color.svg',
    sections: [
      {
        name: 'Codes',
        description: 'Juki Utils provides a centralized and organized repository for storing and managing your code snippets. With an intuitive interface and powerful search functionality, you can easily access and retrieve your code snippets whenever you need them. Keep your code snippets organized, share them with others, and collaborate seamlessly with team members. The codes section in Juki Utils simplifies code management and accelerates your development process.',
        image: mockup_1,
      },
      {
        name: 'Documents',
        description: 'Juki Utils offers a convenient space for creating, storing, and accessing your programming-related documents. Whether you need to write technical specifications, documentation, or project notes, Juki Utils provides a user-friendly editor with formatting options. Keep your documents organized, collaborate with others, and ensure seamless documentation for your projects. The documents section in Juki Utils enhances your productivity and facilitates efficient information sharing.',
        image: mockup_1,
      },
      {
        name: 'Board',
        description: 'Juki Utils serves as a collaborative space for team communication and project management. Create boards, add tasks, assign responsibilities, and track progress all in one place. Visualize your project\'s workflow, discuss ideas, and stay aligned with your team members. The board section in Juki Utils streamlines communication, enhances collaboration, and ensures effective project coordination.',
        image: mockup_1,
      },
      {
        name: 'Input test case generator',
        description: 'Juki Utils simplifies the process of generating input test cases for your programs. With customizable options, you can quickly create a variety of test cases to validate your code\'s functionality. Specify input constraints, generate multiple test cases at once, and ensure thorough testing of your programs. The input test case generator in Juki Utils saves time, improves testing efficiency, and helps you deliver robust and error-free code.',
        image: mockup_1,
      },
      {
        name: 'URL Shortener',
        description: 'Juki Utils provides a convenient way to shorten long URLs and make them more manageable. Simply enter a lengthy URL, and Juki Utils will generate a short and shareable link. Whether you need to share URLs in emails, social media posts, or any other platform, the URL shortener in Juki Utils simplifies the process. Easily track the number of clicks and monitor the performance of your shortened links. The URL shortener in Juki Utils enhances link management and improves user experience.',
        image: mockup_1,
      },
    ],
    urlDescription: 'Explore Juki Utils',
  },
];
