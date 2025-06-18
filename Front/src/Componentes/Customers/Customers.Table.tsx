import { useEffect, useState } from "react";
import { CustomersTableBody } from "./Customers.TableBody";
import { CustomersTableHeader } from "./Customers.TableHeader";
import { Comunicacion } from "../../COMUNICACION.HTTP/Comunicacion.App";
import { endpoints, urlServidorPCTraballadores } from "../../DATOS/datos";

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
}

export const CustomersTable = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [editingRowId, setEditingRowId] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${urlServidorPCTraballadores}/${endpoints.customers}`)
      .then((res) => res.json())
      .then((data) => {
        const customersWithStatus = data.map((customer: Customer) => ({
          ...customer,
          status: "Activo",
        }));
        setData(customersWithStatus);
      })
      .catch((error) => console.error("Error al obtener customers:", error));
  }, []);

  const eventoModificarEliminar = (customer: Customer, accion: string) => () => {
    console.log("customer", customer.id);
    console.log("accion", accion);

    if (accion === "modificar") {
      Comunicacion.metodoPut(`/customers/editar/${customer.id}`, customer);
    } else if (accion === "eliminar") {
      Comunicacion.metodoDelete(`/customers/eliminar/${customer.id}`);
    }
  };

  const handleChange = (id: number, key: keyof Customer, value: string) => {
    setData((prev) =>
      prev.map((customer) =>
        customer.id === id ? { ...customer, [key]: value } : customer
      )
    );
  };

  return (
    <table className="tabla-customers">
      <CustomersTableHeader />
      <CustomersTableBody
        customers={data}
        setEdit={setEditingRowId}
        estado={editingRowId}
        handleChange={handleChange}
        funcionEvento={eventoModificarEliminar}
      />
    </table>
  );
};