"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./PdfViewer"), {
  ssr: false,
});

interface ResumeViewerProps {
  isDarkMode?: boolean;
}

export default function ResumeViewer({ isDarkMode = true }: ResumeViewerProps) {
  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200";

  return (
    <div className={`flex flex-col w-full h-full ${bgColor} ${textColor}`}>
      {/* Header controls */}
      <div
        className={`px-3 py-2 border-b ${borderColor} flex items-center justify-between`}>
        <h2 className="font-medium">Resume</h2>

        {/* Download */}

        <a
          href="/resume/Ansh-Resume.pdf"
          className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm"
          download>
          Download
        </a>
      </div>

      <div className="w-full h-full overflow-auto flex justify-center">
        <PdfViewer />
      </div>
    </div>
  );
}
