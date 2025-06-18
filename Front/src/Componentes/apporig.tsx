// App.tsx
import React, { useState } from 'react';
import InvoiceHeader from './componentes/InvoiceHeader';
import InvoiceDetails from './componentes/InvoiceDetails';
import InvoiceItemsTable from './componentes/InvoiceItemsTable';
import FileUpload from './componentes/FileUpload';
import './App.css';

interface Customer {
  id: string;
  name: string;
  companyName: string;
  companyVat: string;
  companyAddress: string;
  companyCity: string;
  shippingName: string;
  shippingVat: string;
  shippingAddress: string;
  shippingCity: string;
}

interface InvoiceItem {
  id: number;
  serviceProduct: string;
  quantity: number;
  price: number;
  unit: string;
  vatRate: number;
  total: number;
}

function App() {
  const [isRecurringInvoice, setIsRecurringInvoice] = useState(false);

  const [customers] = useState<Customer[]>([
    {
      id: '1',
      name: 'Cliente A',
      companyName: 'Empresa A',
      companyVat: 'ES12345678',
      companyAddress: 'Calle Falsa 123',
      companyCity: 'Madrid',
      shippingName: 'Contacto A',
      shippingVat: 'ES87654321',
      shippingAddress: 'Avenida Inventada 456',
      shippingCity: 'Barcelona',
    },
    {
      id: '2',
      name: 'Cliente B',
      companyName: 'Negocio B',
      companyVat: 'FR98765432',
      companyAddress: 'Rue de Exemple 789',
      companyCity: 'París',
      shippingName: 'Responsable B',
      shippingVat: 'FR23456789',
      shippingAddress: 'Boulevard Imaginaire 101',
      shippingCity: 'Lyon',
    },
  ]);

  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([
    {
      id: 1,
      serviceProduct: 'Consultoría (Horas)',
      quantity: 2,
      price: 50,
      unit: 'hora(s)',
      vatRate: 21,
      total: 0,
    },
  ]);

  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('');
  const [invoiceNumber, setInvoiceNumber] = useState<string>('INV-2024-001');
  const [invoiceDate, setInvoiceDate] = useState<string>('');
  const [paymentTerm, setPaymentTerm] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  const handleCancel = () => {
    alert('Se ha cancelado la creación de la factura.');
  };

  const handleDone = () => {
    alert('Se han guardado los datos de la factura.');
  };

  const handleRecurringChange = (checked: boolean) => {
    setIsRecurringInvoice(checked);
    console.log('Make recurring:', checked);
  };

  const handleInvoiceItemsChange = (newItems: InvoiceItem[]) => {
    setInvoiceItems(newItems);
  };

  return (
    <div className="App">
      <InvoiceHeader
        onCancel={handleCancel}
        onDone={handleDone}
        isRecurring={isRecurringInvoice}
        onRecurringChange={handleRecurringChange}
      />
      <InvoiceDetails
        customers={customers}
        selectedCustomer={selectedCustomerId}
        onCustomerSelect={setSelectedCustomerId}
        invoiceNumber={invoiceNumber}
        onInvoiceNumberChange={setInvoiceNumber}
        invoiceDate={invoiceDate}
        onInvoiceDateChange={setInvoiceDate}
        paymentTerm={paymentTerm}
        onPaymentTermChange={setPaymentTerm}
        dueDate={dueDate}
        onDueDateChange={setDueDate}
      />
      <InvoiceItemsTable
        items={invoiceItems}
        onItemsChange={handleInvoiceItemsChange}
      />
      <FileUpload
        onFileUploaded={(file) => {
          console.log('Archivo subido en App:', file);
        }}
      />
    </div>
  );
}

export default App;
