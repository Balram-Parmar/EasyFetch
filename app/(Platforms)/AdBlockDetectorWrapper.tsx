"use client";

import React, { useEffect, useState } from "react";
import { checkAdBlock } from "adblock-checker";
import { AdBlockerDetected } from "./AdBlockerDetected";
interface AdBlockDetectorWrapperProps {
  children: React.ReactNode;
}

const AdBlockDetectorWrapper: React.FC<AdBlockDetectorWrapperProps> = ({
  children,
}) => {
  const [isAdBlockDetected, setIsAdBlockDetected] = useState(false);

  useEffect(() => {
    const detectAdBlock = async () => {
      try {
        const isBlocked = await checkAdBlock();
        setIsAdBlockDetected(isBlocked);
      } catch (error) {
        console.error("Error detecting ad blocker:", error);
      }
    };

    detectAdBlock();
  }, []);

  return (
    <>
   
   {isAdBlockDetected ? <AdBlockerDetected/>: children}
    </>
  );
};

export default AdBlockDetectorWrapper;
