import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  nightOwl,
  // zTouch,
} from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeHighLight = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-2">
      <SyntaxHighlighter language="javascript" style={nightOwl}>
        {children as string}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighLight;
