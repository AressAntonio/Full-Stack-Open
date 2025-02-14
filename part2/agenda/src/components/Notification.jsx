
const Notification = ({message, textColor, borderColor}) =>{
    
    if(message === null){
        return null;
    }

    return(
        
        <div className="noti" style={{color: textColor, border: `2px solid ${borderColor}`}}>
            {message}
        </div>
    )
};

export default Notification;