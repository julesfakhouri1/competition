import  React from 'react'
import  {AlertProps} from "../../types/index"

const Alert = ({message, type}: AlertProps)=>{

    const alertStyles:any = {
        success: "bg-green-100 border border-green-400 text-green-700",
        error: "bg-red-100 border border-red-400 text-red-700",
        
    };

    return(
        <div className={`${alertStyles[type]} px-4 py-3 rounded relative  `} role="alert" >
            <div className="block sm:inline">{message}</div>
        </div>
    )
}

export default Alert