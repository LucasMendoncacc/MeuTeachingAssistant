Scenario: Removendo o aluno cadastrado no servidor.

Given o sistema tem o aluno com o cpf "683"
When eu removo o aluno "Paulo" com o CPF "683"
Then o sistema agora não tem armazenado "Paulo" com o CPF "683"