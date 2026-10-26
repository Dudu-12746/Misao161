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
});
