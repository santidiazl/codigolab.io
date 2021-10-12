import React from 'react'
import Helmet from 'react-helmet'
import { withTrans } from '../i18n/withTrans'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faJs } from '@fortawesome/free-brands-svg-icons'

import book from '../assets/images/curriculum-book.png'


library.add(faJs)

const About = ({ t }) => {
  return (
    <Layout>
      <SEO />
      <Nav />
      <Helmet>
        <title>Código Lab | Solicita tu Plan de Estudio</title>
        <meta
          name='description'
          description='Descarga tu plan de estudio. Nosotros siempre estamos mejorando nuestro currículo basado en las tendencias cambiantes, las necesidades de la industria, y los comentarios de estudiantes y alumnos.'
        />
        <link rel='canonical' href='https://codigolab.io/plan-de-estudio' />
      </Helmet>
      <div id='main'>
      <section id='4' className='main'>
        <div className='spotlight'>
        <span className="image-left-form">
            <img src={book} alt='' class='image'/>
        </span>
        <br></br>
        <div>
        <header className='major'><h3>{t('download.form.title')}</h3></header> 
        <p>{t('download.form.description')}</p>
              <form id='downloadForm' name='download' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>

                <input type='hidden' name='form-name' value='download' />
                <label for="firstname">{t('download.form.firstnameLabel')}</label>
                <input className='download' placeholder={t('download.form.firstname')} type='text' name='firstname' id='firstname' required />
                <label for="lastname">{t('download.form.lastnameLabel')}</label>
                <input className='download' placeholder={t('download.form.lastname')} type='text' name='lastname' id='lastname'required />
                <label for="email">{t('download.form.emailLabel')}</label>
                <input className='download' placeholder={t('download.form.email')} type='email' name='email' id='label' required />
                <input className='download' type="checkbox" id="consent" name="consent" value="SI"/>
                <label for="consent">{t('download.form.consent')}</label>
                <button id='submitDownload' className='download' type='submit'>
                  {t('download.form.button')}
                </button>
              </form>
            </div>


        </div>

 
        </section>
      </div>
    </Layout>
  )
}

export default withTrans(About)
