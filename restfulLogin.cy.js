describe('Tarea clase 4',{testIsolation:false},()=>{

    it('Visitar la página y verificar el título de la página',()=>{

        cy.visit('https://automationintesting.online/')
        cy.title().should('eq','Restful-booker-platform demo')
    })

    it('Validar envío de form vacío', () => {
        
            cy.log('Envío de form de contacto en blanco...')
            cy.get('#submitContact').click()
            cy.get('.alert').should('be.visible')
            cy.get('p').contains('Subject must be between 5 and 100 characters.')
            cy.get('p').contains('Subject may not be blank')
            cy.get('p').contains('Name may not be blank')
            cy.get('p').contains('Message must be between 20 and 2000 characters.')
            cy.get('p').contains('Message may not be blank')
            cy.get('p').contains('Email may not be blank')
            cy.get('p').contains('Phone may not be blank')
            cy.get('p').contains('Phone must be between 11 and 21 characters.')
    });

    it('Validar envío de form con data incorrecta',()=>{
        
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('asd')
        cy.get('input[placeholder="Email"]').type('asdasd')
        cy.get('input[placeholder="Phone"]').type('asdasd')
        cy.get('input[placeholder="Subject"]').type('asdasd')
        cy.get('[data-testid="ContactDescription"]').type('asdasd')
        cy.get('#submitContact').click()    
        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
        cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
        
    });
    it('Validar envío de form con data correcta',()=>{
         
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('Juan Pérez')
        cy.get('input[placeholder="Email"]').type('juan@gmail.com')
        cy.get('input[placeholder="Phone"]').type('35123696457')
        cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X')
        cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo') 
        cy.get('#submitContact').click()

    });


    

    it('Verificar presencia de informacion del hotel',()=>{
        cy.contains('Shady Meadows B&B').should('be.visible');
        cy.contains('Strosmajerova 122').should('be.visible');
        cy.contains('06265498733').should('be.visible');
        cy.contains('fakeemail@email.com').should('be.visible');
    })

    it('debe contener al menos una imagen', () => {
       
        // Buscar todos los elementos 'img' en la página
        cy.get('img')
          .should('have.length.of.at.least', 1) // Asegurarse de que haya al menos un elemento
          .then(($imgs) => {
            // Acceder a la primera imagen para realizar más comprobaciones (opcional)
            const firstImg = $imgs.eq(0);
            cy.wrap(firstImg).should('be.visible'); // Asegurarse de que la imagen sea visible
            // Otras comprobaciones, como verificar el atributo src, el alt, etc.
    });
       

    it('Verificar texto de la descripcion del hotel',()=>{

        cy.contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').should('be.visible');

    });

    

});


    



});
