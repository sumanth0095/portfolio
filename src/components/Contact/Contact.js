import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <span>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a></span><span>
      <a href={`tel:${contact.mobile}`}>
        <span type='button' className='btn btn--outline'>
          Call me
        </span>
      </a></span>
    </section>
  )
}

export default Contact
