import React from 'react'
import '../Styles/onboarding.css'
import onboardingBack from '../Static/Images/onboarding-back.jpeg'
import onboardingRectangle from '../Static/Images/onboarding-rectangle.png'

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
                    necesarios para completar tu proceso de postulación
                </p>
                <img className='onboarding-back' src={onboardingBack} alt="onboarding-back"></img>
            </div>
            
        </div>
    )
}

export default OnboardingText
