import React, { createContext, useReducer, useContext } from 'react'

const NotificationContext = createContext()

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.payload
    case 'HIDE':
      return ''
    default:
      return state
  }
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  return context[0]
}

export const useNotificationDispatch = () => {
  const context = useContext(NotificationContext)
  return context[1]
}

export const NotificationProvider = (props) => {
  const [notification, dispatch] = useReducer(notificationReducer, '')
  // props.children herja poistettu eslintrs:ssä
  return (
    <NotificationContext.Provider value={[notification, dispatch]}> 
      {props.children}  
    </NotificationContext.Provider>
  )
}

export default NotificationContext

