"use client";
import { fetchAction } from "@/actions/fetchAction";
import { useAction } from "next-safe-action/hooks";
import React from "react";

const Hello: React.FC = () => {
  const { execute, result, isExecuting } = useAction(fetchAction);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Hello;
