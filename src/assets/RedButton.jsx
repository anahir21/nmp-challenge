import React from 'react';
import '../Styles/RedButton.css';

const RedButton = ({step}) => {
  return (
    <div className="btn-red">
      {step}
    </div>
  )
}

export default RedButton;
