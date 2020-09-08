import React from 'react'
import '../Styles/onboarding.css'
import onboardingBack from '../Static/Images/onboarding-back.jpeg'
import onboardingRectangle from '../Static/Images/onboarding-rectangle.png'
import onboardingAllHands from '../Static/Images/onboarding-allHands.png'

const OnboardingText = () => {
    return (
        <div className='onboardingText-container'>
            <p>
                Te damos la bienvenida al proceso de postulación de Nacional Monte de Piedad
            </p>
            <div className='onboardingImgs-container'>
                <img className='onboarding-rectangle' src={onboardingRectangle} alt="onboarding-rectangle"></img>
                <p>
                    Aquí encontrarás toda la información sobre los pasos 
                    necesarios para completar tu candidatura
                </p>
                <img className='onboarding-back' src={onboardingBack} alt="onboarding-back"></img>
            </div>
            <div className='onboarding-whyJoin-container'>
                <p>
                    ¿Por qué nos gustaría que te unieras a nuestro equipo de  trabajo? 
                </p>
                <div>
                    <img className='onboarding-allHands' src={onboardingAllHands} alt="onboarding-allHands"></img>
                    <p>
                        ¡En Nacional Monte de Piedad buscamos a gente talentosa como tú! <br/>
                        Únete a la Institución de Asistencia Privada número uno del sector prendario en México. 
                        Nuestro equipo se integra de personas brillantes e inspiradoras, cuya labor se centra 
                        en ayudar a quien más lo necesita. <br/>
                        ¡Nos interesa conocerte!
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default OnboardingText
