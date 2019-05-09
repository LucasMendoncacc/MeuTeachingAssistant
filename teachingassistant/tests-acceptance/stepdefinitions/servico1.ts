import { defineSupportCode} from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { request } from 'http';
import { when, async } from 'q';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    var base_url = "http://localhost:3000/";

    Given(/^o sistema tem o aluno com o cpf “(.*)”$/,
    async (CPF) => {
        await request.get(base_url + "alunos")
        .then(body => expect(body).toBe([cpf:"683"]))
        .catch(e => expect(e).toEqual(null));
    });

    when(/^eu removo o aluno “(.*)” com o CPF “(.*)”$/,
    async(nome, cpf) =>{
        var opcoes = {method: 'DELETE', uri: (base_url + "aluno"),
        body: {name: nome, cpf: cpf},
        json: true};
        return request(opcoes);
        .then(body => expect(body).toEqual({"success": "O aluno foi cadastrado com sucesso"}))
        .catch(e => expect(e).toEqual(null))
    })

    Then(/^o sistema agora não tem armazenado “(.*)” com o CPF “(.*)”$/,
    async (nome, cpf) => {
        await request.get(base_url + "alunos")
        .then(body => expect(body).toBe("[]"))
        .catch(e => expect(e).toEqual(null));
    });
})