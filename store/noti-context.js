import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notification) => {},
  hideNotification: () => {},
});

export const NotificationProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "error" ||
        activeNotification.status === "success")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notification) => {
    setActiveNotification(notification);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotificationHandler: hideNotificationHandler,
  };

  return (
    <>
      <NotificationContext.Provider value={context}>
        {props.children}
      </NotificationContext.Provider>
    </>
  );
};

export default NotificationContext;
