import React from 'react';

import Icon from '../../assets/loading.png';

const Loader = () => {
  return (
      <div className="w-full h-full animate-spin">
        <img src={Icon} alt="spinnerLogo"/>
      </div>
  );
};

export default Loader;
