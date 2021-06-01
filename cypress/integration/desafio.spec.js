/// <reference types="cypress"/>

describe('Diadenascimento', () => {

    it('Descobri dia da semana que nasceu', () => {
        //acessar o site
        cy.visit('https://www.eusouluz.iet.pro.br/diadasemanaquenasceu.htm');
        //digitar data de nascimento
        cy.get('input[name=day]').type("15");
        cy.get('input[name=month]').type("12");
        cy.get('input[name=year]').type("1974");
        //clicar no botão pra checar dia do nascimento
        cy.get('input[type=button]').click();
        //verificar dia da semana
        cy.get('input[name=result2]').should('contain.value', 'Domingo');
    });
});