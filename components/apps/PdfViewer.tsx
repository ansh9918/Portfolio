"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfViewer() {
  return (
    <Document file="/resume/Ansh-Resume.pdf">
      <Page
        pageNumber={1}
        renderAnnotationLayer
        renderTextLayer
        scale={1.35} // better clarity than 1.2
      />
    </Document>
  );
}
