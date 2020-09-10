import React, {useEffect} from 'react'
import '../Styles/welcomeUser.css'

const WelcomeUser = ({user}) => {
	
	return (
		<div className="welcomeUser-container">
			<p className="welcomeUser-title">
				¡Hola, {user.name}!
			</p>
			<p>
				Este es tu espacio, aquí llevarás a cabo tu proceso de postulación. <br/>
				Podrás visualizar tu avance, conocer los requisitos de cada paso y acceder 
				a recomendaciones que te ayudarán a que tu avance sea exitoso.
			</p>
			<p className="position">
				Tu vacante: <span> {user.position} </span>
			</p>	
		</div>
	)
}

export default WelcomeUser
