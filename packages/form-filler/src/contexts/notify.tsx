import { createContext, useContext, useState, useMemo, useCallback } from "react"
import Alert from "react-bootstrap/Alert";

let NotificationContext = createContext();

export function useNotifyContext() {
  return useContext(NotificationContext);
}

export default function Notify({ children }) {
  let [canNotify, setCanNotify] = useState(false);
  let [notifyConfig, setNotifyConfig] = useState({});

  const notify = useCallback(config => {
    setCanNotify(true);
    setNotifyConfig(config)
  }, []);

  return (
  <NotificationContext.Provider value={notify}>
    {canNotify && (
      <Alert variant={notifyConfig.type} onClose={() => setCanNotify(false)} className="mt-4 text-center w-25 position-absolute start-50 top-0 translate-middle" dismissible>
      <p className="mb-0">
        {notifyConfig.msg}
      </p>
    </Alert>
    )}

    {children}
  </NotificationContext.Provider>)
}