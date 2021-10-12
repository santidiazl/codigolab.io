require('dotenv').config()
const mailchimp = require('@mailchimp/mailchimp_marketing')
const { MAILCHIMP_DC, MAILCHIMP_API_KEY } = process.env

exports.handler = async event => {
  const payload = JSON.parse(event.body).payload
  const formName = payload.form_name
  const email = payload.email

  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_DC,
  })

  console.log(`Pulling env vars: ${MAILCHIMP_API_KEY}, ${MAILCHIMP_DC}`)

  if (formName === 'subscribe') {
    console.log(`Processing subscribe form submission for email ${email}..`)

    const listId = '03a8ab7a86'
    console.log(`Adding member ${email} to list ${listId}...`)
    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: 'subscribed',
      })
      console.log(`Success response: ${response}`)
    } catch (err) {
      console.error('Received error: ' + err)
      return { statusCode: 422, body: String(err) }
    }
  } else if (formName === 'contact') {
    console.log(`Processing contact form submission for email ${email}..`)

    //TODO: do we want to do anything on contact form submission?
  }
}

/*
curl --request GET \
--url 'https://us2.api.mailchimp.com/3.0/lists' \
--user "Santiago Diaz:KEY"
*/
