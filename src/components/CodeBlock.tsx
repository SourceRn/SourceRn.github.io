"use client";

import { useEffect } from "react";

import Prism from "prismjs";
import "prismjs/themes/prism.css";

import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";

import "prismjs/components/prism-tsx";

import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-python";

type CodeValue = {
  code?: string;
  language?: string;
  filename?: string;
};

export default function CodeBlock({ value }: { value: CodeValue }) {
  const code = value?.code ?? "";
  const lang = (value?.language ?? "javascript").toLowerCase();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="my-6 rounded-xl border bg-white">
      {value?.filename ? (
        <div className="px-3 py-2 text-xs text-zinc-600 border-b bg-zinc-50">
          {value.filename}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 m-0">
        <code className={`language-${lang}`}>{code}</code>
      </pre>
    </div>
  );
}
