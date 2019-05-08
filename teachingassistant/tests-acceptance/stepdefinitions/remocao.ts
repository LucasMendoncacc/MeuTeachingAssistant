import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^eu estou na pagina de Aluno$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='alunos']").click();
    })

    Given(/^vejo o aluno "([^\"]*)" com o CPF "(\d*)" na lista de alunos$/, async (nome,cpf) => {
        //ADICIONANDO ALUNO nome COM O CPF cpf
        await $("input[name='namebox']").sendKeys(<string> nome);
        await $("input[name='cpfbox']").sendKeys(<string> cpf);
        await element(by.buttonText('Adicionar')).click();
        
    
        var allcpfs : ElementArrayFinder = element.all(by.name('cpflist'));
        await allcpfs;
        var samecpfs = allcpfs.filter(elem =>
                                      elem.getText().then(text => text === cpf));
        await samecpfs;
        await samecpfs.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When(/^eu tento remover o aluno "([^\"]*)" com o CPF "(\d*)"$/, async (nome, cpf) => {
        await $("input[name='namebox']").sendKeys(<string> nome);
        await $("input[name='cpfbox']").sendKeys(<string> cpf);
        await element(by.buttonText('Remover')).click();
    });

    Then(/^eu não vejo mais o aluno "([^\"]*)" com CPF "(\d*)" na lista de alunos$/, async (nome, cpf) => {
        var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
        allalunos.filter(elem => pAND(sameCPF(elem,cpf),sameName(elem,nome))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });
})
