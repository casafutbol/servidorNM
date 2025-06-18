import React from "react";
import { IconoFuncion } from "../IconoFuncion";
import { Imaxes } from "../../assets/Imaxes";
import "../../estilo/Customers.App.css";

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
}

type Props = {
  customers: Customer[];
  funcionEvento: (customer: Customer, accion: string) => () => void;
  handleChange: (id: number, key: keyof Customer, value: string) => void;
  estado: number | null;
  setEdit: React.Dispatch<React.SetStateAction<number | null>>;
};

export const CustomersTableBody: React.FC<Props> = ({
  customers,
  estado,
  setEdit,
  handleChange,
  funcionEvento,
}) => {
  return (
    <tbody className="body-tabla">
      {customers.map((customer) => {
        const isEditing = estado === customer.id;

        return (
          <tr key={customer.id}>
            <td>
              <input
                readOnly={!isEditing}
                value={customer.name}
                onChange={(e) =>
                  handleChange(customer.id, "name", e.target.value)
                }
              />
            </td>
            <td>
              <input
                readOnly={!isEditing}
                value={customer.email}
                onChange={(e) =>
                  handleChange(customer.id, "email", e.target.value)
                }
              />
            </td>
            <td>
              <input
                readOnly={!isEditing}
                value={customer.status}
                onChange={(e) =>
                  handleChange(customer.id, "status", e.target.value)
                }
              />
            </td>
            <td>
              <input
                readOnly={!isEditing}
                value={customer.role}
                onChange={(e) =>
                  handleChange(customer.id, "role", e.target.value)
                }
              />
            </td>
            <td>
              {!isEditing ? (
                <button onClick={() => setEdit(customer.id)}>Editar</button>
              ) : (
                <button onClick={() => setEdit(null)}>Guardar</button>
              )}
              <IconoFuncion
                imaxeUser={Imaxes.papelera}
                estilo="estilo-icono-customers"
                funcion={funcionEvento(customer, "borrar")}
              />
              <IconoFuncion
                imaxeUser={Imaxes.gardar}
                estilo="estilo-icono-customers"
                funcion={funcionEvento(customer, "gardar")}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};