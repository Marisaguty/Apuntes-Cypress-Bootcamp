import { Logger } from "../support/logger"
//ese archivo lo he creado para hacer una clase con los pasos, para no repetir codigo
//En vez de hacer el caso 0, hacemos el caso 1


//PARA QUE NUESTRO CÓDIGO SE ENTIENDA MEJOR

describe('login', ()=>{
    it('case 0', ()=>{
        cy.log('Step # 1')
        cy.log('Navegar a la pagina parabank')
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm')

        cy.log('Step # 2')
        cy.log('Hacer click en el boton registrarse')
        cy.get('#leftPanel a').eq(1).click()

        cy.log('Step # 2')
        cy.log('Insertar nombre')
        cy.get('.form2 input').eq(0).type('Holis')
    })

    it.only('case 1', ()=>{
        Logger.pasoNumero(1)
        Logger.paso('Navegar a la pagina parabank')
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm')
        

        Logger.pasoNumero(2)
        Logger.paso('Hacer click en el boton registrarse')
        cy.get('#leftPanel a').eq(1).click()

        Logger.pasoNumero(3)
        Logger.paso('Insertar nombre')
        cy.get('.form2 input').eq(0).type('Holis')

        cy.wait(1000)
    })
})