


describe('Compra con user 1', () => {
    it('Ingresar a la pagina ', () => {
      cy.visit('https://www.saucedemo.com/');
      //Punto 4.1.1.ingresar con usuario standart_user
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory');


      //4.1.2 Agregar productos al carrito

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
      cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
      
      //4.1.3 Hacer el checkout

      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('#first-name').type('Juan');
      cy.get('#last-name').type('Perez');
      cy.get('[data-test="postalCode"]').type('1000');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="finish"]').click();

      //4.1.4 Validar que se haya realizado el checkout

      cy.contains('Checkout: Complete!').should('be.visible');

      //4.1.4 Realizar el logout

      
      cy.get('.bm-burger-button').click();
      cy.get('[data-test="logout-sidebar-link"]').click();

      

    });
    
      
});
   
  

  
  




  

   

 



 