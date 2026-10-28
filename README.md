## Realizar teste nas aplicacoes desenvolvidas
## Eduardo da silva 

## Descricao e funcionalidade 

- Aplicacao de controle de tarefas 
- Cadastra tarefas INSERT -- CREATE
- Consulta/lista tarefas SELECT REACT
- Atualiza  tarefas UPDATE -- UPDATE
- Exclui tarefas DELETE --DELETE



## Tecnologia
|Tecnologia |Funcao|
|-----------|------|
| HTML |Estrutura o esqueleto da pagina web|
 |CSS  | Estelizacao/design da pagina|
| javascript|o JavaScript serve para criar interatividade |
| Node.js| Permitir execuntar o JS no servidor|
|Jest: |Framework de testes automatizandos|
| SQlite|Banco de dados Relacional |
|EXPLAIN|serve para mostrar o plano de execução que o banco de dados vai usar para rodar uma consulta.|
|Supertest|Uma biblioteca Node.js usada para testar APIs e servidores HTTP de forma automatizada.|

# Testes

## Testes Unitários

| Caso de teste |  Entrada | Saída esperada |
| ------------- | -------- | -------------- |
| 1  Título vazio| Titulo"" | Mostra o erro o titulo da tarefa em obrigatoria  |  
| 2  Texto muito longo| Texto com mais de 121  caracteres |  Mostra o titulo do texto dever ter 120 caracteres|  
| 3  Espaco em banco| Título: "  Estudar JavaScript  " | Remover os espacos em banco e retorna Estudar em JavaScript |  