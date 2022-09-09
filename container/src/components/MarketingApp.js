import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const rootNodeRef = useRef(null);

  useEffect(() => {
    mount(rootNodeRef.current);
  }, []);

  return <div ref={rootNodeRef}>MarketingApp</div>;
};

export default MarketingApp;
