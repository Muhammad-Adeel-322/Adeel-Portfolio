import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../pages/Homesec/Particle";
import pdf from "../Assets/images/AdeelCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

export default function Resumenew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadPdfPage = async () => {
      const loadingTask = pdfjsLib.getDocument(pdf);
      const pdfDocument = await loadingTask.promise;
      const page = await pdfDocument.getPage(1);

      const scale = width > 786 ? 1.7 : 0.6;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      setImageUrl(canvas.toDataURL());
    };

    loadPdfPage();
  }, [width]);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center">
          {imageUrl && <img src={imageUrl} alt="PDF Preview" />}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}
