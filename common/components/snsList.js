import React from 'react';
import { FaHome, FaTwitter, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const A = ({ type, url, children }) => (
  <a key={type} href={url} aria-label={`${type} ${url}`}>
    {children}
  </a>
);

export const SNSList = () => (
  <div className="sns-list sns-list-end">
    <A type="site" url="https://hiroppy.me">
      <FaHome />
    </A>
    <A type="twitter" url="https://twitter.com/about_hiroppy">
      <FaTwitter />
    </A>
    <A type="github" url="https://github.com/hiroppy">
      <FaGithub />
    </A>
    <A type="facebook" url="https://www.facebook.com/yuta.hiroto0429/">
      <FaFacebook />
    </A>
    <A type="linkedin" url="https://www.linkedin.com/in/hiroppy">
      <FaLinkedin />
    </A>
  </div>
);
