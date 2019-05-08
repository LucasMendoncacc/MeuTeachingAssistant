Feature: As a professor
         I want to remove students
         So that I can remove student from the list of students

Scenario: Removendo aluno pelo CPF
Given eu estou na pagina de Aluno
Given vejo o aluno "Paulo" com o CPF "683" na lista de alunos
When eu tento remover o aluno "Paulo" com o CPF "683"
Then eu não vejo mais o aluno "Paulo" com CPF "683" na lista de alunos