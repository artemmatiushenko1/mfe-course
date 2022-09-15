import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

const DashboardApp = ({ onSignIn }) => {
  const rootNodeRef = useRef(null);

  useEffect(() => {
    mount(rootNodeRef.current);
  }, []);

  return <div ref={rootNodeRef}></div>;
};

export default DashboardApp;
