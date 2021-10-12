import React from 'react'
import { withTrans } from '../i18n/withTrans'

const SubscribeForm = ({ t }) => {
  return (
    <form name='subscribe' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
      <input type='hidden' name='form-name' value='subscribe' />
      <input className='subscribe' placeholder={t('aboutUs.form.email')} type='email' name='email' required />
      <button id='submitSubscribe' type='submit' className='subscribe' name='subscribe'>
        {t('aboutUs.form.emailSubscribe')}
      </button>
    </form>
  )
}

export default withTrans(SubscribeForm)
