

describe('login', ()=>{
   
    it('Login con credenciales de standar user', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').should('exist')
    })
    it('pruebas con as', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').as('nombreUsuario')
        cy.get('@nombreUsuario').type('Hola')
    })

    it('Assertions contains', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.contains('div', 'Swag Labs').then(title=>{
            cy.log(title.attr('class'))
        })
        cy.wait(10000)
        /* Para encontrar el div que contiene el texto 'Swag Labs', y me imprime su clase */
  
    })

    it('Assertions find', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //dentro de este elemento buscame find(lo de aqui)
        cy.get('.login_wrapper-inner').find('#user-name').should('exist').log('SI')
    })

    it('Assertions first', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //coje el primer elemento dentro de esa clase
        cy.get('.form_input').first().type('HOLISSSSS')
    })

    it('Assertions last', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //coje el ultimo elemento dentro de esa clase
        cy.get('.form_input').last().type('HOLISSSSS')
    })

    it('Assertions eq', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //coje el elemento del indice q pongamos
        cy.get('.form_input').eq(1).type('indicessss')
    })

    it('Assertions closest', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //Busca el ancestro de user-name
        cy.get('#user-name').closest('#login_button_container').then(parent=>{
            cy.log(parent.attr('class'))
        })
        cy.wait(1000)
    })

    it('Assertions SHOULD HAVE TEXT', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //deberia tener el texto ....
        cy.get('.login_logo').should('have.text', 'Swag Labs')
    })

    it('Assertions SHOULD HAVE VALUE', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //debe tener el valor ....
        cy.get('#user-name').type('HOLA').should('have.value', 'HOLA')
    })

    it('Assertions SHOULD CONTAIN TEXT', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //incluye la cadena de texto en ese elemento?
        cy.get('.login_logo').should('contain.text', 'Labs')
    })

    it('Assertions SHOULD CONTAIN VALUE', ()=>{
        cy.visit('https://www.saucedemo.com/')
        //incluye el valor en ese elemento?
        cy.get('#user-name').type('prueba')
        cy.get('#user-name').should('contain.value', 'eba')
    })

    it('Assertions SHOULD BE VISIBLE', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.bm-burger-button').should('be.visible').click()
        cy.get('.bm-menu').should('be.visible')
        
    })

    /* CAMBIO DE PÁGINA PARA VERIFICAR */
    it('Assertions SHOULD BE CHECK', ()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        //como hay dos elementos del mismo tipo usamos eq
        cy.get('input[type="checkbox"]').eq(1).should('be.checked')
    })

    it('Assertions SHOULD NOT', ()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        // me da positiva la prueba si el elemento 1 no está checked
        cy.get('input[type="checkbox"]').eq(0).should('not.be.checked')
        //está prueba me da positiva cuando deberia ser negativa ??   ❓❔
        cy.get('div[class="example"]').should('not.have.text', 'Checkboxes')
    })
    

    it('Método click', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[type="submit"]').click({force: true})
    })

    it('Método type', ()=>{
        cy.visit('https://www.saucedemo.com/')
        /* cy.get('#user-name').type('Holis')
        cy.get('#user-name').type('{enter}') */
        cy.get('#user-name').type('Holis' + '{enter}')
    })

    it('Método ckeck - uncheck', ()=>{
        /* selecciono el primero y compruebo y luego unchecked el segundo */
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('input[type="checkbox"]').eq(0).check()
        cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).uncheck()
        cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')
    })


    it('Método TIMEOUT', ()=>{
        cy.visit('https://accounts.shopify.com/')
        cy.get('img[alt="Log in to Shopify"]', {timeout: 10000}).click()
    
    })

    it.only('CUSTOM COMMANDS', ()=>{
    cy.login('standard_user','secret_sauce')
        
    
    })
})