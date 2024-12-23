import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='hero-text'>Contact Me</h1>
        <div className='contact-content'>
            <div className='contact-info-container'>
                <div className='contact-info'>
                <EmailIcon style={{color:"#E51681" }}/>
                <span>someemail@gmail.com</span>
                </div>
            </div>

            <div className='contact-form'>
                <form className='contact-form-content'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                    />

                    <textarea
                        name='message'
                        placeholder='Message'
                    />

                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
