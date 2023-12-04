import React from 'react';
interface SvgIconsProps {
  onClick?: () => void;
  className?: string;
}

export const PlusSvg: React.FC<SvgIconsProps> = ({ onClick, className }) => (
  <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M19.1667 9.16668H10.8333V0.83332C10.8333 0.373086 10.4602 0 10 0C9.53976 0 9.16668 0.373086 9.16668 0.83332V9.16664H0.83332C0.373086 9.16668 0 9.53977 0 10C0 10.4602 0.373086 10.8333 0.83332 10.8333H9.16664V19.1666C9.16664 19.6269 9.53973 20 9.99996 20C10.4602 20 10.8333 19.6269 10.8333 19.1666V10.8333H19.1666C19.6268 10.8333 19.9999 10.4602 19.9999 10C20 9.53977 19.6269 9.16668 19.1667 9.16668Z" fill="#374957" />
  </svg>
);

export const MinSvg: React.FC<SvgIconsProps> = ({ onClick, className }) => (
  <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
    <path d="M19.1667 0.166504H0.83332C0.373086 0.166504 0 0.539587 0 0.999818C0 1.46005 0.373086 1.83313 0.83332 1.83313H19.1666C19.6269 1.83313 20 1.46005 20 0.999818C20 0.539587 19.6269 0.166504 19.1667 0.166504Z" fill="white" />
  </svg>
);

export const Left: React.FC<SvgIconsProps> = ({ onClick, className }) => (
  <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M10.07 5.93018L4 12.0002L10.07 18.0702" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M21 12L4.17004 12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
export const Right: React.FC<SvgIconsProps> = ({ onClick, className }) => (
  <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M14.93 18.0698L21 11.9998L14.93 5.92982" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.99996 12L20.83 12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);


