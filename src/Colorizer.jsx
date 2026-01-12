import { useState } from 'react';
import './app.css'

const Colorizer = () => {
const [color, setColor] = useState("#382e2eff")
        return (
        <div className="colorizer">
            <div className="box" style={{backgroundColor: color}}>

            </div>
            <button onClick={changeColor}>Change Color</button>

        </div>
    )
}

export default Colorizer