import { Link } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import { withTrans } from '../i18n/withTrans'
import { useTranslation } from 'react-i18next'
import Scroll from './Scroll'
import logoLtBlue from '../assets/images/codigoLabLogo.svg'

const links = [
  { name: 'home', class: '', scrollTo: 'intro' },
  { name: 'ourProgram', isOurProg: true, class: '' },
  { name: 'pricing', isPricing: true, class: '' },
  { name: 'aboutUs', isAbout: true, class: '' },
  { name: 'blog', isBlog: true, class: '' },
  { name: 'apply', isApply: true, class: 'secondary' },
]

const Links = ({ translate, parentContainer, closeMenu }) => {
  const [offsetHeight, setOffsetHeight] = useState(0)

  useEffect(() => {
    if (window && window.innerWidth) {
      const newOffsetHeight = window.innerWidth < 769 ? -500 : Math.abs(parentContainer.current.getBoundingClientRect().height) * -1
      setOffsetHeight(newOffsetHeight)
    }
  }, [parentContainer])

  return links.map((l, i) =>
    l.isBlog ? (
      <li key={i} className={l.class}>
        <Link onClick={e => closeMenu()} to={'/blog'} target='_blank' rel='noreferrer'>
          {translate(`nav.${l.name}`)}
        </Link>
      </li>
    ) : l.isAbout ? (
      <li key={i} className={l.class}>
        <Link onClick={e => closeMenu()} to={'/quienes-somos'}>
          {translate(`nav.${l.name}`)}
        </Link>
      </li>
    ) : l.isOurProg ? (
      <li key={i} className={l.class}>
        <Link onClick={e => closeMenu()} to={'/bootcamp-desarrollo-web'}>
          {translate(`nav.${l.name}`)}
        </Link>
      </li>
    ) : l.isApply ? (
      <li key={i} className={l.class}>
        <a onClick={e => closeMenu()} href={translate(`/bootcamp-desarrollo-web#3`)}>
          {translate(`nav.${l.name}`)}
        </a>
      </li>
    ) : l.isPricing ? (
      <li key={i} className={l.class}>
        <Link onClick={e => closeMenu()} to={'/bootcamp-desarrollo-web#2'}>
          {translate(`nav.${l.name}`)}
        </Link>
      </li>
    ) : (
      <Scroll offset={offsetHeight} key={i} type='id' element={l.scrollTo}>
        <li className={l.class}>
          <Link onClick={e => closeMenu()} to={`/#${l.scrollTo}`}>
            {translate(`nav.${l.name}`)}
          </Link>
        </li>
      </Scroll>
    ),
  )
}

const LanguageSelector = ({ language }) => {
  const [lang, setLang] = useState(language || 'es')
  const { i18n } = useTranslation()

  useEffect(() => setLang(language), [language])

  return (
    <div className='container-language-selection'>
      <div onClick={e => i18n.changeLanguage('es')} role='button' className={lang === 'es' ? 'language language-active' : 'language'}>
        <span className='full'>Español</span>
        <span className='acronym'>ES</span>
      </div>
      <span className='separator'></span>
      <div onClick={e => i18n.changeLanguage('en')} role='button' className={lang === 'en' ? 'language language-active' : 'language'}>
        <span className='full'>English</span>
        <span className='acronym'>EN</span>
      </div>
    </div>
  )
}

export const Banner = ({ t }) => (
  <div className='banner'>
    <div className='container'>
      <p>{t('covidBanner')}</p>
    </div>
  </div>
)

const Nav = ({ t, language }) => {
  const [open, setOpen] = useState(false)
  const el = useRef(null)

  return (
    <div className='wrapper-nav' ref={el}>
      <div className='nav-group-standard'>
        <div className='container-logo'>
          {typeof window !== 'undefined' && window.location.pathname.length > 1 ? (
            <a href='../'>
              <img src={logoLtBlue} alt='' />
            </a>
          ) : (
            <Scroll type='id' element='top'>
              <a href='../'>
                <img src={logoLtBlue} alt='' />
              </a>
            </Scroll>
          )}
        </div>
        <div className='container-links'>
          <ul>
            <Links translate={t} parentContainer={el} closeMenu={() => setOpen(false)} />
          </ul>
          <LanguageSelector language={language} />
        </div>
      </div>
      <div className={open ? 'nav-group-collapsed open' : 'nav-group-collapsed'}>
        <div className='top'>
          <div className='container-logo'>
            {typeof window !== 'undefined' && window.location.pathname.length > 1 ? (
              <a href='../'>
                <img src={logoLtBlue} alt='' />
              </a>
            ) : (
              <Scroll type='id' element='top'>
                <a href='../'>
                  <img src={logoLtBlue} alt='' />
                </a>
              </Scroll>
            )}
          </div>
          <div className='container-btn' onClick={e => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='bottom'>
          <ul className='first-set'>
            <Links translate={t} parentContainer={el} closeMenu={() => setOpen(false)} />
          </ul>
          <LanguageSelector language={language} />
          <ul className='second-set'>
            <Links translate={t} parentContainer={el} closeMenu={() => setOpen(false)} />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withTrans(Nav)
