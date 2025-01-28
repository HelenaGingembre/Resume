import App from './App';
import { Document, PDFViewer } from '@react-pdf/renderer';

function MyDocumentPDF() {
  return (
    <PDFViewer>
      <Document author="Olena Gingembre" title="CV">
        <App size="A4" />
      </Document>
    </PDFViewer>
  );
}

export default MyDocumentPDF;
