import React from 'react'
import { withTrans } from '../i18n/withTrans'

const Logo = props => {
  return (
    <header id='header'>
      {props.source === 'about' ? (
        <div className='title'>
          <h5>
            <b>{props.t('logo.about1')}</b>
          </h5>
          <h1>
            {props.t('logo.about2')}
            <br></br>
            {props.t('logo.about3')}
          </h1>
        </div>
      ) : props.source === 'program' ? (
        <div className='title'>
          <h5>{props.t('logo.ourProg0')}</h5>
          <h1>
            <b>
              {props.t('logo.ourProg1')}
              <br></br>
              {props.t('logo.ourProg2')}
            </b>
          </h1>
        </div>
      ) : props.source === 'apply' ? (
        <div className='title'>
          <h1>
            <b>{props.t('logo.apply1')}</b>
          </h1>
        </div>
      ) : (
        <div className='title'>
          <h1>
            <b>
              {props.t('logo.developYourFuture')}
              <span className='blinking-cursor'>|</span>
            </b>
          </h1>
          <h3>
            {props.t('logo.welcome1')}
            <br></br>
            {props.t('logo.welcome2')}
          </h3>
        </div>
      )}
    </header>
  )
}

export default withTrans(Logo)
