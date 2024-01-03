"use client";
import React, { useState, useEffect } from "react";

export const PageTransitionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

