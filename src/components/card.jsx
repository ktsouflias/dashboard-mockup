import React from "react";

export function Card({ children, className = "" }) {
  return <div className={`rounded-xl shadow-md p-4 bg-white ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-sm text-gray-700">{children}</div>;
}
