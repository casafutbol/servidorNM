import React, { useState } from 'react';
import FileUpload from "../../Componentes/FileUpload";
import InvoiceHeader from "../../Componentes/InvoiceHeader";
import InvoiceDetails from "../../Componentes/InvoiceDetails";
import InvoiceItemsTable from "../../Componentes/InvoiceItemsTable";
import MenuLateral from "../../Componentes/MenuLateral";

export default function NewInvoice() {
  // Aquí tu estado y funciones (handlers)

  return (
    <div className="estilo-paxinas-app">
      {/* Tu JSX aquí */}
      <FileUpload onFileUploaded={(file) => console.log('Archivo subido:', file)} />
      {/* Resto de componentes */}
    </div>
  );
}
