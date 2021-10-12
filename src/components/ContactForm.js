import React from 'react'
import { withTrans } from '../i18n/withTrans'

const ContactForm = ({ t }) => {
  return (
    <form className='contact' name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
      <input className='contact' type='hidden' name='form-name' value='contact' />
      <label>
        <input className='contact' type='text' name='firstName' placeholder={t('aboutUs.form.firstName')} required />
      </label>
      <label>
        <input className='contact' type='text' name='lastName' placeholder={t('aboutUs.form.lastName')} required />
      </label>
      <label>
        <input className='contact' type='email' name='email' placeholder={t('aboutUs.form.email')} required />
      </label>
      <label>
        <textarea className='contact' name='subject' placeholder={t('aboutUs.form.message')} required />
      </label>
      <button className='button contact' type='submit'>
        {t('aboutUs.form.button')}
      </button>
    </form>
  )
}

export default withTrans(ContactForm)
