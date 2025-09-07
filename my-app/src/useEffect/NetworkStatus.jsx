import React, { useState, useEffect } from "react";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      <h2>
        Status:{" "}
        <span style={{ color: isOnline ? "green" : "red" }}>
          {isOnline ? "Online ✅" : "Offline ❌"}
        </span>
      </h2>
    </div>
  );
}

export default NetworkStatus;
