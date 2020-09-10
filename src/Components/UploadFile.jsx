import React, {useState} from 'react'
import up from '../Static/Images/up.png'
import upGray from '../Static/Images/up-gray.png'

const UploadFile = ({ file , setIsFile }) => {

  const [fileName, setFileName] = useState('')
  const [upIcon, setUpIcon] = useState(up);
  

  const getFile = () => {
    const fileObj = document.getElementById(`${file}`);
    setFileName(fileObj.files[0].name);
    if(fileObj.files[0].name){
      setUpIcon(upGray);
      setIsFile(true);
    }else{
      setUpIcon(up);
      setIsFile(false);
    }
  }

  return (
    <div className='upload-file-container'>
      <input type='text' 
        id='' 
        name='' 
        value={fileName}
        placeholder={file}
        disabled
      />     
      <label className='up-file' for={file}>
        <img alt="upload" src={upIcon} className="icon-up"/>
      </label>
      <input type="file"
      className = 'input-file' 
      id={file}
      accept=".doc,.docx,.odt,.pdf" 
      onChange={getFile}
      ></input>                
    </div>
  )
}

export default UploadFile
