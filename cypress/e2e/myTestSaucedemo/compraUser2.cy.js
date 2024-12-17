describe('Compra con user 2',()=>{ 
    it('Ingresar a la pagina ', () => {
     
      //cypress.config.js
   
      //Punto 4.2.1.ingresar con usuario problem_user

      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('problem_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory');
      
       //4.2.2 Agregar productos al carrito
       // agregar item 4

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        
      // Agregar item 0     

      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
         
       
      //agregar item 2
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
      //Agregar item 5
      cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
      //Agregar item 1
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
      //agregar item 3
      cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]') 
       // Verificar que el producto se ha agregado al carro
      
      cy.get('[data-test="shopping-cart-link"]').click(); 

       // Verificar que los productos esten en el carro de compras
      cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
      

       cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('exist');
       cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').should('exist');
       cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').should('exist');
       cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').should('exist');
       cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').should('exist');
       
       //verificar carrito

       
   
    
  

        
      
       //4.2.3 Hacer el checkout
 
       cy.get('[data-test="shopping-cart-link"]').click()
       cy.get('[data-test="checkout"]').click()       
       cy.get('#first-name').type('Juan');
       cy.get('#last-name').type('Perez');
       cy.get('[data-test="postalCode"]').type('1000');
       cy.get('[data-test="continue"]').click();
       cy.get('[data-test="finish"]').click();
 
       //4.2.4 Validar que se haya realizado el checkout
 
       cy.contains('Checkout: Complete!').should('be.visible');
 
       //4.2.4 Realizar el logout
 
       
       cy.get('.bm-burger-button').click();
       cy.get('[data-test="logout-sidebar-link"]').click();
       cy.wait(7000)

      });
   });
