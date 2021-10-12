import React from 'react'
import Helmet from 'react-helmet'
import { withTrans } from '../i18n/withTrans'

import Nav, { Banner } from '../components/Nav'
import SEO from '../components/seo'
import Header from '../components/Header'
import Layout from '../components/layout'
import santi from '../assets/images/santi.jpg'
import daniel from '../assets/images/daniel.jpg'
import computer from '../assets/images/computer.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faJs } from '@fortawesome/free-brands-svg-icons'

import ContactForm from '../components/ContactForm'

library.add(faJs)

const About = ({ t }) => {
  return (
    <Layout>
      <SEO />
      <Banner t={t} />
      <Nav />
      <Header source={'about'} t={t} />
      <Helmet>
        <title>Código Lab | Quienes Somos</title>
        <meta
          name='description'
          description='Nuestra misión | Ayudar a nuestros alumnos a alcanzar su mejor potencial y a mejorar sus vidas a través de una experiencia educativa de alta calidad.'
        />
        <link rel='canonical' href='https://codigolab.io/quienes-somos' />
      </Helmet>
      <div id='main'>
        <section id='content' className='main'>
          <div className='spotlight'>
            <div className='content'>
              <h3>
                <span className='icon fa-2x fa-rocket'></span>
                {t('aboutUs.mission.title')}
              </h3>
              <p>{t('aboutUs.mission.p1')}</p>
              <h3>
                <span className='icon fa-2x fa-compass'></span>
                {t('aboutUs.vision.title')}
              </h3>
              <p>{t('aboutUs.vision.p1')}</p>
            </div>
            <span className='image'>
              <img src={computer} alt='' />
            </span>
          </div>
        </section>

        <section id='content' className='main'>
          <header className='major'>
            <h2>{t('aboutUs.ourStory.title')}</h2>
          </header>
          <div className='spotlight'>
            <div className='ourStory'>
              <span className='image-left'>
                <img src={daniel} alt='' />
              </span>
              <div className='content'>
                <p>{t('aboutUs.ourStory.p1')}</p>
                <p>
                  {t('aboutUs.ourStory.p2')}
                  <a href='https://www.codigolab.io/blog/para-que-sirve-programar' target='_blank' rel='noreferrer'>
                    {t('aboutUs.ourStory.link')}
                  </a>
                  {t('aboutUs.ourStory.p2-2')}
                </p>
              </div>
            </div>
          </div>
          <div className='spotlight'>
            <div className='content'>
              <p>{t('aboutUs.ourStory.p3')}</p>
              <p>{t('aboutUs.ourStory.p4')}</p>
            </div>
            <span className='image'>
              <img src={santi} alt='' />
            </span>
          </div>
        </section>

        {/*CONTACT US SECTION*/}
        <section id='contactanos' className='main'>
          <header className='major'>
            <h2>{t('aboutUs.contactUs.title')}</h2>
          </header>
          <div className='contactArea'>
            <div className='contact-left'>
              <h2>{t('aboutUs.contactUs.Questions')}</h2>
              <p>{t('aboutUs.contactUs.p1')}</p>

              <dl className='alt'>
                {/* <dt>Address</dt> <dd>Cra. 48 #7-186 &bull; Medellin, Antioquia &bull; Colombia</dd> */}
                <div>
                  <div className='contact-label'>{t('aboutUs.contactUs.email')}</div>
                  <div className='contact-method'>
                    <a href='mailto:info@codigolab.io'>info@codigolab.io</a>
                  </div>
                  <div className='contact-label'>{t('aboutUs.contactUs.phone')}</div>
                  <div className='contact-method'>
                    <a href='tel:3016214206'>(301) 621-4206</a>
                  </div>
                </div>
              </dl>
              <ul className='icons'>
                <li>
                  <a href='https://www.facebook.com/codigolab' target='_blank' rel='noreferrer' className='icon fa-facebook alt'>
                    <span className='label'>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href='https://instagram.com/codigolab' target='_blank' rel='noreferrer' className='icon fa-instagram alt'>
                    <span className='label'>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/codigo_lab' target='_blank' rel='noreferrer' className='icon fa-twitter alt'>
                    <span className='label'>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/school/codigolab/' target='_blank' rel='noreferrer' className='icon fa-linkedin alt'>
                    <span className='label'>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://web.whatsapp.com/send?phone=573016214206&text=Hola,%20me+gustaría+conocer+más+acerca+del+bootcamp+de+Desarrollo+Web+Full+Stack+de+Código Lab.'
                    target='_blank'
                    rel='noreferrer'
                    className='icon fa-whatsapp alt'
                  >
                    <span className='label'>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='contact-container'>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default withTrans(About)
