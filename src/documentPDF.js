import App from './App';
import { PDFViewer } from '@react-pdf/renderer';

function MyDocumentPDF() {
  return (
    <PDFViewer author="Olena Gingembre" title="CV">
      <App size="A4" />
    </PDFViewer>
  );
}

export default MyDocumentPDF;
