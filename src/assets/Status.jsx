import React, {useState, useEffect} from 'react'
import doneIcon from '../Static/Images/done.png'
import reviewIcon from '../Static/Images/review.png'
import "../Styles/FirstStep.css";

const Status = ({status, title, descrip}) => {

    const [statusIcon, setStatusIcon] = useState()

    useEffect(() => {
        if(status == 'done'){
            setStatusIcon(doneIcon); 
        }else{
            setStatusIcon(reviewIcon); 
        }
    }, [])
    

    return (
      <div className='status-container'>
        <div className='status-info'>
          <p>
            <span>
              {title} 
            </span> <br/>
            {descrip}
          </p>
        </div>
        <div>
          <img alt={statusIcon} src={statusIcon} className=""/>
        </div>
      </div>
    )
}

export default Status
