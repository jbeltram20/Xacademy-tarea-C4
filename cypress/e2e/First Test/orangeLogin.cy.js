//test datos de contacto

describe('Formulario de contacto', () => {
    it('debe enviar correctamente los datos del formulario', () => {
      cy.visit('https://automationintesting.online/');
  
      // Llenar los campos del formulario
      cy.get('input[name="nombre"]').type('Juan Pérez');
      cy.get('input[name="email"]').type('juanperez@example.com');
      cy.get('input[name="telefono"]').type('1234567890');
      cy.get('textarea[name="mensaje"]').type('Este es un mensaje de prueba');
      cy.get('select[name="asunto"]').select('Consulta');
  
      // Enviar el formulario
      cy.get('button[type="submit"]').click();
  
      // Verificar si se muestra un mensaje de éxito o se redirige a otra página (depende de tu implementación)
      cy.contains('Mensaje enviado correctamente').should('be.visible');
    });
  
    it('debe mostrar mensajes de error si los campos están vacíos', () => {
      cy.visit('https://tu-pagina-web.com/contacto');
  
      // Enviar el formulario sin llenar los campos
      cy.get('button[type="submit"]').click();
  
      // Verificar si se muestran los mensajes de error correspondientes
      cy.get('.error-message').should('contain', 'El nombre es obligatorio');
      cy.get('.error-message').should('contain', 'El email es obligatorio');
      // ... y así para los demás campos
    });
  
    // Otros casos de prueba:
    // - Probar con datos inválidos (email incorrecto, teléfono con formato incorrecto)
    // - Verificar que el formulario se limpie después del envío
    // - Comprobar si se envía el formulario a la dirección de correo electrónico correcta (si es posible)
  });