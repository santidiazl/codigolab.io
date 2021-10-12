import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { withTrans } from '../i18n/withTrans'

import Nav, { Banner } from '../components/Nav'
import SEO from '../components/seo'
import Header from '../components/Header'
import Layout from '../components/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJs } from '@fortawesome/free-brands-svg-icons'

import book from '../assets/images/curriculum-book.png'

library.add(faJs)

async function getCurrency(setCurrency) {
  await fetch('http://ip-api.com/json?fields=country,currency')
    .then(response => response.json())
    .then(data => setCurrency(data.currency))
}

const About = ({ t }) => {
  const [currency, setCurrency] = useState('COP')

  useEffect(() => {
    getCurrency(setCurrency)
  }, [])

  return (
    <Layout>
      <SEO />
      <Banner t={t} />
      <Nav />

      <Header source={'program'} t={t} />
      <Helmet>
        <title>Código Lab | Bootcamp de Desarrollo Web Full Stack</title>
        <meta
          name='description'
          description='Nuestros bootcamps de desarrollo Web Full Stack te convertirá en un desarrollador Web en solo 12 semanas. Nuestras clases pequeñas y personalizadas son centradas en proyectos reales y experiencia práctica en programación.'
        />
        <link rel='canonical' href='https://codigolab.io/bootcamp-desarrollo-web' />
        <script type='application/ld+json'>{`
              {
                  "@context": "http://schema.org",
                  "@type": "Course",
                  "name": "Desarrollo Web Full Stack",
                  "description": "¿Quieres comenzar una carrera en desarrollo Web? En 12 semanas puedes aprender cómo. En Código Lab, te convertirás en un desarrollador Web Full Stack y aprenderás sobre frameworks de JavaScript como React y Vue, desarrollo de servidores con Node.js, y cómo conectarte a bases de datos como MySQL y MongoDB.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Código Lab",
                    "sameAs": "https://www.codigolab.io"
                  }            
              }
          `}</script>
      </Helmet>

      {/*1ST SECTION - BOOTCAMP INFORMATION*/}
      <div id='main'>
        <section id='1' className='main'>
          <header className='major'>
            <h2>{t('ourProgram.title')}</h2>
            <p>
              {t('ourProgram.p1')}
              <span style={{ fontWeight: 'bold' }}>{t('ourProgram.p2')}</span>
              {t('ourProgram.p3')}
              <span style={{ fontWeight: 'bold' }}>{t('ourProgram.p4')}</span>
              {t('ourProgram.p5')}
              <span style={{ fontWeight: 'bold' }}>{t('ourProgram.p6')}</span>
              {t('ourProgram.p7')}
              <span style={{ fontWeight: 'bold' }}>{t('ourProgram.p8')}</span>
              {t('ourProgram.p9')}
              <span style={{ fontWeight: 'bold' }}>{t('ourProgram.p10')}</span>
            </p>
          </header>

          <ul className='features'>
            <li>
              <span className='icon major style1 fa-code'></span>
              <h3>{t('ourProgram.part1.title')}</h3>
              <p>{t('ourProgram.part1.p1')}</p>
              <p>{t('ourProgram.part1.p2')}</p>
            </li>
            <li>
              <span className='icon major style3 fa-copy'></span>
              <h3>{t('ourProgram.part2.title')}</h3>
              <p>{t('ourProgram.part2.p1')}</p>
              <p>{t('ourProgram.part2.p2')}</p>
            </li>
            <li>
              <span className='icon major style5 fa-diamond'></span>
              <h3>{t('ourProgram.part3.title')}</h3>
              <p>{t('ourProgram.part3.p1')}</p>
              <p>{t('ourProgram.part3.p2')}</p>
            </li>
          </ul>

          {/*<header className='major'>
            <h3>{t('ourProgram.curriculum.title')}</h3>
          </header>

          <table>
            <thead>
              <tr>
                <th className='th-title'>{t('ourProgram.curriculum.phase1.title')}</th>
                <th className='th-description'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('ourProgram.curriculum.phase1.week1.title')}</td>
                <td>
                  {t('ourProgram.curriculum.phase1.week1.topic')}
                  <ul>
                    <li>{t('ourProgram.curriculum.phase1.week1.b1')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week1.b2')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week1.b3')}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>{t('ourProgram.curriculum.phase1.week2.title')}</td>
                <td>
                  {t('ourProgram.curriculum.phase1.week2.topic')}
                  <ul>
                    <li>{t('ourProgram.curriculum.phase1.week2.b1')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week2.b2')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week2.b3')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week2.b4')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week2.b5')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week2.b6')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week2.b7')}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>{t('ourProgram.curriculum.phase1.week3.title')}</td>
                <td>
                  {t('ourProgram.curriculum.phase1.week3.topic')}
                  <ul>
                    <li>{t('ourProgram.curriculum.phase1.week3.b1')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week3.b2')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week3.b3')}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>{t('ourProgram.curriculum.phase1.week4.title')}</td>
                <td>
                  {t('ourProgram.curriculum.phase1.week4.topic')}
                  <ul>
                    <li>{t('ourProgram.curriculum.phase1.week4.b1')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week4.b2')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week4.b3')}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>{t('ourProgram.curriculum.phase1.week5.title')}</td>
                <td>
                  {t('ourProgram.curriculum.phase1.week5.topic')}
                  <ul>
                    <li>{t('ourProgram.curriculum.phase1.week5.b1')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week5.b2')}</li>
                    <li>{t('ourProgram.curriculum.phase1.week5.b3')}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className='th-title'>{t('ourProgram.curriculum.phase2.title')}</th>
                <th className='th-description'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('ourProgram.curriculum.phase2.weeks')}</td>
                <td>
                  {t('ourProgram.curriculum.phase2.topic')}
                  <ul>
                    <li>{t('ourProgram.curriculum.phase2.b1')}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th className='th-title'>{t('ourProgram.curriculum.phase3.title')}</th>
                <th className='th-desctription'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('ourProgram.curriculum.phase3.weeks')}</td>
                <td>
                  {t('ourProgram.curriculum.phase3.topic')}
                  <ul>
                    <li>{t('ourProgram.curriculum.phase3.b1')}</li>
                    <li>{t('ourProgram.curriculum.phase3.b2')}</li>
                    <li>{t('ourProgram.curriculum.phase3.b3')}</li>
                    <li>{t('ourProgram.curriculum.phase3.b4')}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>*/}
        </section>

        {/*SECTION 2 - PRICE*/}
        <section id='2' className='main'>
          <header className='major'>
            <h2>{t('paymentOptions.title')}</h2>
          </header>

          <table>
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: '#408ebc',
                    fontSize: '30px',
                    color: 'white',
                    padding: '25px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {currency === 'COP' ? t('paymentOptions.costoCOP') : t('paymentOptions.costoUSD')}
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <h2>{t('paymentOptions.p0')}</h2>
                    <li>{t('paymentOptions.p1')}</li>
                    <li>{t('paymentOptions.p2')}</li>
                    <li>{t('paymentOptions.p3')}</li>
                    <li>{t('paymentOptions.p4')}</li>
                    <br></br>
                    <li>
                      <span style={{ fontWeight: 'bold' }}>{t('paymentOptions.p5-1')}</span>
                      {t('paymentOptions.p5-2')}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p>{t('paymentOptions.finePrint')}</p>
        </section>

        {/*SECTION 3 - SIGNUP*/}
        <section id='3' className='main'>
          <header className='major'>
            <h2>{t('applyNow.title')}</h2>
          </header>

          <h2>
            <b>
              <span className='icon fa-2x fa-check-square-o' style={{ color: '4ec6e1' }}></span>
              {t('preReqs.title')}
            </b>
          </h2>
          <ul type='square'>
            <li>{t('preReqs.p1')}</li>
            <br></br>
            <li>
              {t('preReqs.p2')}
              <span style={{ fontWeight: 'bold' }}>{t('preReqs.p3')}</span>
              {t('preReqs.p4')}
            </li>
          </ul>

          <h2>
            <b>
              <span className='icon fa-2x fa-pencil-square-o'></span>
              {t('')}
              {t('')}
              {t('applyNow.h3')}
            </b>
          </h2>
          <ol>
            <li>{t('applyNow.p1')}</li>
            <br></br>
            <li>{t('applyNow.p2')}</li>
          </ol>
          <p>{t('applyNow.p3')}</p>

          <p className='content'>
            <span className='actions'>
              <a href={t('ourProgram.appLink')} className='button special'>
                {t('applyNow.button')}
              </a>
            </span>
          </p>
        </section>
                
      </div>
    </Layout>
  )
}

export default withTrans(About)
