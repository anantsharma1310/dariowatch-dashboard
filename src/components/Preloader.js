
import React from 'react';
import { Image } from '@themesberg/react-bootstrap';

import ReactLogo from "../assets/img/dario.png";

export default (props) => {

  const { show } = props;

  return (
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "" : "show"}`}>
      <Image className="loader-element" src={ReactLogo} height={60} />
    </div>
  );
};
