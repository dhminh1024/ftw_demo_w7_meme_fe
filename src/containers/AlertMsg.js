import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

const AlertMsg = () => {
  const alerts = useSelector((state) => state.alert);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert
        key={alert.id}
        variant={alert.alertType}
        className="text-center"
        style={{ zIndex: 9999, position: "absolute", width: "50%" }}
      >
        {alert.msg}
      </Alert>
    ))
  );
};
export default AlertMsg;
