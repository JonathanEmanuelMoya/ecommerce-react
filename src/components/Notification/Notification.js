import './notificationStyles.css'
import { useState,createContext } from 'react'

const Notification = ({ message, severity }) => {

    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 5,
        width: 'auto',
        height: 'auto',
        /* backgroundColor: severity === 'success' ? 'green' : 'red', */
        padding: '10px 20px 10px 20px',
        color: 'white'
    }

    if(message ===''){
        return null;
    }


    return (
        <div style={notificationStyles} className={`${severity === 'success' ? 'Success' : 'Error'}`}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) =>{
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')


    const setNotification = (sev, msg) =>{
        setMessage(msg)
        setSeverity(sev)
        setTimeout(()=>{
            setMessage('')
        }, 3000)
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;