import { Children, createContext, useContext, useState } from "react"

let NotificationContext = createContext();

export function useNotifyContext() {
  return useContext(NotificationContext);
}

export default function Notify({ children }) {
  let [canNotify, setCanNotify] = useState(false);
  let [notifyConfig, setNotifyConfig] = useState({});


  return (
  <NotificationContext.Provider value={}>
    {canNotify && (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    )}

    {children}
  </NotificationContext.Provider>)
}


notify({
  type: 'success',
  msg: 'semma'
})

notify({
  
})