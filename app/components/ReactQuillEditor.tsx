"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import of react-quill-new with ssr: false to prevent window is not defined errors in Next.js App Router
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div style={{
      padding: "20px",
      border: "1px dashed #cbd5e1",
      borderRadius: "8px",
      color: "#64748b",
      fontSize: "14px",
      textAlign: "center",
      background: "#f8fafc"
    }}>
      Loading Rich Text Editor...
    </div>
  )
});

interface ReactQuillEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image", "clean"]
  ]
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "color",
  "background",
  "align",
  "link",
  "image"
];

export default function ReactQuillEditor({
  value,
  onChange,
  placeholder = "Write blog content here..."
}: ReactQuillEditorProps) {
  return (
    <div className="quill-editor-wrapper" style={{ background: "#ffffff", borderRadius: "8px", overflow: "hidden" }}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{ minHeight: "220px" }}
      />
    </div>
  );
}
