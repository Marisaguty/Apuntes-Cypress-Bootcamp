import { LoginPage } from "./loginPage";
 /* const loginPage = LoginPage(); */

describe('prueba metodos static', ()=>{
   
    /* it('test 1 - no static', ()=>{
        const titulo = loginPage.obtenerTituloNormal();
        cy.log(titulo)
        cy.wait(1000)
    }) */

    it('test 2 -  static', ()=>{
        //Aqui no uso la instancia
        const titulo = LoginPage.obtenerTituloStatic()
        cy.log(titulo)
        cy.wait(1000)
    })

    it('test 3 -  getters', ()=>{
        cy.visit('https://demoblaze.com/index.html')
        LoginPage.linkDeLogin.click()
        //no pongo () en linkDeLogin pq es una propiedad de get no un metodo
        cy.wait(1000)

    })
})

//Si usamos métodos static no tenemos que instanciar la clase, si no si tendríamos que hacerlo 
//Aqui hago la prueba con los dos 

//no me funciona el NO static ❓

//Los get nunca reciben parámetros