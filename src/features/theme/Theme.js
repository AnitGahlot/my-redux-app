import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { changeTextColor } from './themeSlice';
const Theme = () => {
const [color,setColor]=useState('');
const dispatch = useDispatch()
  return (
    <div >
    {/* <label><input type="radio"  name="status" onClick={()=>{dispatch(changeTextColor("blue"))}}/>blue</label>  
      <label ><input type="radio"  name="status" onClick={()=>{dispatch(changeTextColor("red"))}}/>red</label> */}
      <input type="text" className="textbox" onChange={(e)=>setColor(e.target.value)} />
      <button className="button" onClick={()=>{dispatch(changeTextColor(color))}}>Change Text Color</button>
    </div>
  )
}

export default Theme
