import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import { withTrans } from '../i18n/withTrans'
import woman_coding from '../assets/images/photography-of-a-woman-using-laptop-1181292.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav, { Banner } from '../components/Nav'
import SubscribeForm from '../components/SubscribeForm'

import ReactTooltip from 'react-tooltip'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faChartLine, faSearch } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJs } from '@fortawesome/free-brands-svg-icons'

library.add(faJs)

const Index = ({ t }) => {
  return (
    <Layout>
      <div id='top'></div>
      <SEO />
      <Banner t={t} />
      <Nav />
      <Header source={'main'} t={t} />
      <div id='main'>
        <section id='intro' className='main'>
          <div className='spotlight'>
            <div className='content'>
              <header className='major'>
                <h2>{t('home.title')}</h2>
              </header>
              <p>
                {t('home.p1-1')}
                <Link to={'/bootcamp-desarrollo-web'} target='_blank'>
                  {t('home.p1-link')}
                </Link>
                {t('home.p1-2')}
              </p>
              {/*<p>  
                {t('home.p3')}
              </p>*/}
              <ul className='statistics'>
                <li className='style1'>
                  <FontAwesomeIcon icon={faUserTie} size='3x' />
                  <strong>
                    <CountUp end={83} suffix='%' redraw={true} duration={1.5} decimals={0}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    *
                  </strong>
                  <a data-tip data-for='graduates'>
                    {t('home.stats.rateOfEmployment.title')}
                  </a>
                  <ReactTooltip id='graduates' type='dark' effect='solid' place='bottom'>
                    <span>{t('home.stats.rateOfEmployment.tooltip1')}</span>
                    <br></br>
                    <span>{t('home.stats.rateOfEmployment.tooltip2')}</span>
                  </ReactTooltip>
                </li>
                <li className='style1'>
                  <FontAwesomeIcon icon={faChartLine} size='3x' />
                  <strong>
                    <CountUp end={51} suffix='%' redraw={true} duration={2} decimals={0}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    *
                  </strong>
                  <a data-tip data-for='salaryIncrease'>
                    {t('home.stats.medianSalaryIncrease.title')}
                  </a>
                  <ReactTooltip id='salaryIncrease' type='dark' effect='solid' place='bottom'>
                    <span>{t('home.stats.medianSalaryIncrease.tooltip1')}</span>
                    <br></br>
                    <span>{t('home.stats.medianSalaryIncrease.tooltip2')}</span>
                  </ReactTooltip>
                </li>
                <li className='style1'>
                  <FontAwesomeIcon icon={faSearch} size='3x' />
                  <strong>
                    <CountUp end={62} redraw={true} duration={3} decimal='.' decimals={3}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </strong>
                  <a data-tip data-for='deficit'>
                    {t('home.stats.colTechJobs.title')}
                  </a>
                  <ReactTooltip id='deficit' type='dark' effect='solid' place='bottom'>
                    <span>{t('home.stats.colTechJobs.tooltip1')}</span>
                    <br></br>
                    <span>{t('home.stats.colTechJobs.tooltip2')}</span>
                  </ReactTooltip>
                </li>
                <li className='style1'>
                  <FontAwesomeIcon icon={faJs} size='3x' />
                  <strong>
                    <CountUp end={67.7} decimal=',' suffix='%' redraw={true} duration={1} decimals={1}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </strong>
                  <a data-tip data-for='javascript'>
                    {t('home.stats.jsDominance.title')}
                  </a>
                  <ReactTooltip id='javascript' type='dark' effect='solid' place='bottom'>
                    <span>{t('home.stats.jsDominance.tooltip')}</span>
                  </ReactTooltip>
                </li>
              </ul>
              {t('home.asterix-1')}
              <a href='https://www.coursereport.com/2020-guide-to-coding-bootcamps-by-course-report.pdf'>{t('home.asterix-2')}</a>
              {t('home.asterix-3')}
            </div>

            <span className='image-round'>
              <img src={woman_coding} alt='' />
            </span>
          </div>
        </section>

        {/*<section id='3' className='main'>
          <header className='major'>
            <h2>{t('freeCourse.title')}</h2>
          </header>
          <p>{t('freeCourse.p1')}</p>
          <table>
            <thead>
              <tr>
                <th>
                  <h2>
                    <span className='icon fa-code'></span>
                    {t('freeCourse.goal')}
                  </h2>
                </th>
                <th>
                  <h2>
                    <span className='icon fa-book'></span>
                    {t('freeCourse.topics')}
                  </h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <ul>
                    <br></br>
                    <li>{t('freeCourse.goalOne')}</li>
                    <li>{t('freeCourse.goalTwo')}</li>
                    <li>{t('freeCourse.goalThree')}</li>
                  </ul>
                </th>
                <th>
                  <ul>
                    <br></br>
                    <li>{t('freeCourse.topicOne')}</li>
                    <li>{t('freeCourse.topicTwo')}</li>
                    <li>{t('freeCourse.topicThree')}</li>
                  </ul>
                </th>
              </tr>
            </tbody>
          </table>

          <p>{t('freeCourse.p2')}</p>

          <p className='content'>
            <span className='actions'>
              <a href={t('freeCourse.link')} target='_blank' className='button secondary'>
                {t('freeCourse.button')}
              </a>
            </span>
          </p>
                      </section>*/}
        <section className='main'>
          <header className='major'>
            <center>
              <p>{t('home.subscribe')}</p>
            </center>
          </header>
          <SubscribeForm />
        </section>
      </div>
    </Layout>
  )
}

export default withTrans(Index)
