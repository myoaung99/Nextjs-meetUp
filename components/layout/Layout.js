import { useContext } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Notification from "./../ui/notification";
import NotificationContext from "./../../store/noti-context";

function Layout(props) {
  const notiCtx = useContext(NotificationContext);

  const notification = notiCtx.notification;

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      {notification ? (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Layout;
