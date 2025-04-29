import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DraftInvoice from "./pages/Draftinvoice";
import Reporting from "./pages/Reporting";
import Vender from "./pages/Vender";
import Matchedinvoice from "./pages/Matchedinvoice";
import { TitleProvider } from "./TitleContext";
import ExportToExcel from "./ExportToExcel";
import MyComponent from "./Mycomponent";
import InvoicePage from "./Invoicepage";
import Home from "./pages/Home";
import UpdateComponent from "./components/UpdateComponent";
import Popup from "./components/Popup";
import Uploaderror from "./components/Uploaderror";
import UploadFile from "./components/UploadFile";
import "bootstrap/dist/css/bootstrap.min.css";
import PopupModal from "./PopupModel";
import ParentComponent from "./components/ParentComponent";
import PropsExample from "./components/PropsExample";
import DivisionPopup from "./components/Divisionpopup";
import Manualtesting from "./pages/Manualtesting";
import Manualaccounting from "./pages/Manualaccounting";
import Venderdata from "./datapages/Venderdata";
import Admitdata from "./datapages/Admitdata";

function App() {
  return (
    <>
      <TitleProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draft-invoice" element={<DraftInvoice />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/vendors" element={<Vender />} />
          <Route path="/matched-invoice" element={<Matchedinvoice />} />
          <Route path="/manual-testing" element={<Manualtesting />} />
          <Route path="/manual-acounting" element={<Manualaccounting />} />
          <Route path="/draft-invoice/venders" element={<Venderdata />} />
          <Route path="/draft-invoice/admit" element={<Admitdata />} />

          <Route
            path="/upload-success"
            element={<div>✅ Upload Successful!</div>}
          />
          <Route path="/upload-error" element={<Uploaderror />} />
        </Routes>
      </TitleProvider>
      {/* <Sidebar /> */}
      {/* <PopupModal /> */}
      {/* <ParentComponent />
      <UploadFile />
      <DivisionPopup /> */}

      {/* <PropsExample /> */}

      {/* <UploadFile +/>

      <Popup /> */}

      {/* <ExportToExcel />
      <MyComponent />
      <UpdateComponent />
      <InvoicePage />*/}
    </>
  );
}

export default App;
