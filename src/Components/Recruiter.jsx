import React from 'react'
import '../Styles/recruiter.css'
import whatsapp from '../Static/Images/whatsapp-logo.png'

const Recruiter = ({recruiter}) => {
    return (
      <div className='recruiter-container'>
        <div className='recruiter-info'>
            <div className='recruiter-name'>
              <p className='title'>
                <span> Yo soy tu reclutador(a) </span>
              </p>
              <p className='name'>
                  Lic. {recruiter.name} {recruiter.lastname}
              </p>
              <p className='mail'>
                  <span> {recruiter.position} </span> <br/>
                  {recruiter.email}
              </p>
            </div>
            

            <div className='recruiter-call'>
              <div>
                <img className='' src={whatsapp} alt="whatsapp-logo"></img> 
                <p> ¡Contáctame! </p>
              </div>
              <p>
                <span>
                  Horario: 
                </span> <br/>
                Lunes a Viernes: <br/>
                9:00 - 18:00
              </p>
            </div>         
        </div>
        
        <div className='recruiter-contact'>
          <img className='recruiter-photo' src={recruiter.photo} alt="recruiter-photo"></img>
          <input type='button'
          id='loginBtn' 
          value='MÁS SOBRE MÍ' 
          />
        </div>
      </div>
    )
}

export default Recruiter
