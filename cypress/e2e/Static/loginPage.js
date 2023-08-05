export class LoginPage{
    static obtenerTituloStatic(){
        return 'Log in Static'
    }

    /* obtenerTituloNormal(){
        return 'Log in Static'
    } */




    static get linkDeLogin(){
        return cy.get('a[data-target="#logInModal"]')
    }
}


//Los get nunca reciben parámetros