import React from 'react'
import Logo from './Logo'
import LazyHero from 'react-lazy-hero'
import { withTrans } from '../i18n/withTrans'

import mainBg from '../assets/images/heroSplash.svg'
import aboutUsHeroBg from '../assets/images/acadev_gradient_aboutus.svg'
import ourProgHeroBg from '../assets/images/girl-coding.jpg'
import applyBg from '../assets/images/applyHero.jpg'

const Header = props => {
  const { source, t } = props
  return (
    <>
      <LazyHero
        imageSrc={source === 'about' ? aboutUsHeroBg : source === 'program' ? ourProgHeroBg : source === 'apply' ? applyBg : mainBg}
        parallaxOffset={source === 'program' ? 0 : 100}
        color={'#000'}
        opacity={source === 'main' ? 0.7 : source === 'apply' ? 0.7 : 0.4}
        minHeight={'60vh'}
      >
        <Logo source={source} />
        {source === 'program' ? (
          <a href='/plan-de-estudio' className='button period'>
            {t('ourProgram.downloadContent')}
          </a>
        ) : (
          <></>
        )}
      </LazyHero>
    </>
  )
}

export default withTrans(Header)
