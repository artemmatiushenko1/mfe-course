import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const rootNodeRef = useRef(null);
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(rootNodeRef.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const {pathname} = history
        if(pathname !== nextPathname){
          history.push(nextPathname)
        }
      }
    });

    history.listen(onParentNavigate)
  }, []);

  return <div ref={rootNodeRef}></div>;
};

export default MarketingApp;
