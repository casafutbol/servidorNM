import { useEffect, useState } from "react";
import { Customer } from "../TIPOS/customer";

// Ejemplo correcto para un hook:
export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // carga clientes...
  }, []);

  return { customers, loading, error };
}

