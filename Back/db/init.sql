<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Formulario Datos</title>
</head>
<body>
  <h1>Formulario de Datos</h1>
  <form id="formDatos">
    <label>Trabajador:<br>
      <input type="text" name="trabajador" required>
    </label><br><br>
    <label>Estado en empresa:<br>
      <input type="text" name="estado" required>
    </label><br><br>
    <label>Vacaciones:<br>
      <input type="text" name="vacaciones" required>
    </label><br><br>
    <label>Email:<br>
      <input type="email" name="email" required>
    </label><br><br>
    <button type="submit">Enviar</button>
  </form>

  <script>
    const form = document.getElementById('formDatos');

    form.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(form);
      const nuevoDato = {
        trabajador: formData.get('trabajador'),
        estado: formData.get('estado'),
        vacaciones: formData.get('vacaciones'),
        email: formData.get('email')
      };

      // Obtener datos previos de LocalStorage o iniciar arreglo vacío
      const datosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

      // Añadir nuevo dato
      datosGuardados.push(nuevoDato);

      // Guardar en LocalStorage
      localStorage.setItem('usuarios', JSON.stringify(datosGuardados));

      alert('Datos guardados!');

      form.reset();
    });
  </script>
</body>
</html>
