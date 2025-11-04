import React from 'react';

// Golden-yellow palette for Professor Finley
const mainGold = '#FFD700';      // Main body color
const lightBelly = '#FFF8DC';    // Lighter color for the belly patch
const orangeAccents = '#FFA726'; // For beak and feet
const darkOutline = '#D4A017';   // A darker gold for outlines and contrast

export const FinleyTheOwlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
  {/* Body */}
  <path d="M60 20 C 30 20, 20 60, 20 80 C 20 110, 50 120, 60 115 C 70 120, 100 110, 100 80 C 100 60, 90 20, 60 20 Z" fill={mainGold} />
  
  {/* Belly Patch */}
  <path d="M60 65 C 45 65, 40 80, 40 95 C 40 105, 50 110, 60 108 C 70 110, 80 105, 80 95 C 80 80, 75 65, 60 65 Z" fill={lightBelly} />
  
  {/* Left Eye */}
  <circle cx="45" cy="50" r="15" fill="white" stroke="#e0e0e0" strokeWidth="1" />
  <circle cx="48" cy="52" r="7" fill="black" />
  <circle cx="46" cy="50" r="2" fill="white" />
  
  {/* Right Eye */}
  <circle cx="75" cy="50" r="15" fill="white" stroke="#e0e0e0" strokeWidth="1" />
  <circle cx="72" cy="52" r="7" fill="black" />
  <circle cx="74" cy="50" r="2" fill="white" />
  
  {/* Beak */}
  <polygon points="58,60 62,60 60,68" fill={orangeAccents} />
  
  {/* Eyebrows/Horns */}
  <path d="M30 40 Q 40 25, 50 35" stroke={mainGold} fill="none" strokeWidth="5" strokeLinecap="round" />
  <path d="M90 40 Q 80 25, 70 35" stroke={mainGold} fill="none" strokeWidth="5" strokeLinecap="round" />

  {/* Left Wing */}
  <path d="M 22 70 C 10 80, 15 100, 25 95 Z" fill={mainGold} stroke={darkOutline} strokeWidth="1"/>

  {/* Right Wing */}
  <path d="M 98 70 C 110 80, 105 100, 95 95 Z" fill={mainGold} stroke={darkOutline} strokeWidth="1"/>

  {/* Feet */}
  <path d="M50 108 Q 52 115, 55 108" fill="none" stroke={orangeAccents} strokeWidth="3" strokeLinecap="round" />
  <path d="M45 108 Q 47 115, 50 108" fill="none" stroke={orangeAccents} strokeWidth="3" strokeLinecap="round" />
  <path d="M70 108 Q 72 115, 75 108" fill="none" stroke={orangeAccents} strokeWidth="3" strokeLinecap="round" />
  <path d="M65 108 Q 67 115, 70 108" fill="none" stroke={orangeAccents} strokeWidth="3" strokeLinecap="round" />
</svg>
);