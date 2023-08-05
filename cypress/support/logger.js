export class Logger{
    static pasoNumero(numero){
        const mensage = `Paso # ${numero}`
        cy.log(`**${mensage}**`)

    }

    static paso(description){
        const mensage = `Paso - ${description}`
        cy.log(`**${mensage}**`)
        
    }

    static verificacion(description){
        const mensage = `Verificacion - ${description}`
        cy.log(`**${mensage}**`)
        
    }


}


//Si usamos métodos static no tenemos que instanciar la clase, si no si tendríamos que hacerlo 