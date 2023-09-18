import React from "react";

interface AlertComponentProperties {
  message: string
}

export const ErrorAlert: React.FC<AlertComponentProperties> = (props) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-3 rounded relative" role="alert">
      <strong className="font-bold">{props.message}</strong>
    </div>
  );
}

export const WarningAlert: React.FC<AlertComponentProperties> = (props) => {
  return (
    <div className="bg-yellow-100 border-yellow-400 text-yellow-700 border px-4 py-3 mb-3 rounded relative" role="alert">
      <strong className="font-bold">{props.message}</strong>
    </div>
  );
}

export const DefaultAlert: React.FC<AlertComponentProperties> = (props) => {
  return (
    <div className="bg-indigo-100 border-indigo-400 text-indigo-700 border px-4 py-3 mb-3 rounded relative" role="alert">
      <strong className="font-bold">{props.message}</strong>
    </div>
  );
}