const Test = require('supertest/lib/test');
// Importa a função 'normalizeTitle'
const { normalizeTitle } = require('../../src/validation');

describe('Validação de tarefas', () => {

    test('normalizeTitle deve remover espaços em branco do título', () => {
        expect(normalizeTitle('   Teste Unitário   ')).toBe('Teste Unitário')
    });
    test('normalizeTitle deve retornar uma string vazia se o número não for uma string', () => {
        expect(normalizeTitle(123)).toBe('');
        
    });
    //caso de teste para entrada nula
    test('normalizeTitle deve retornar uma string vazia se o título for nulo', () => {
        expect(normalizeTitle(null)).toBe('');
    });
    //caso de teste para entrada indefinida
    test('normalizeTitle deve retornar uma string vazia se o título for indefinido', () => {
        expect(normalizeTitle(undefined)).toBe('');
    });
    //caso de teste para entrada vazia
    test('caso 1: Deve mostrar erro quando o título da tarefa estiver vazio', () => {
        // Entrada especificada na tabela
    const entrada = ""; 
    
    // Função hipotética que valida a tarefa (substitua pela sua função real)
    const resultado = validateTaskInput(entrada);
    
    // Saída esperada baseada na tabela
    expect (resultado).toBe("O titulo da tarefa em obrigatoria");
  });
    
});
