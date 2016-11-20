import assert from 'assert';
import ESParser from '../../../src/Parser/ESParser.js';

/** @test {ESParser} */
describe('ESParser', ()=>{
  it('can parse "do expressions"', ()=>{
    const ast = ESParser.parse({experimentalProposal: {doExpressions: true}}, './test/fixture/syntax/DoExpressions.js');
    assert(ast.program.sourceType === 'module');
  });

  it('can parse "function bind"', ()=>{
    const ast = ESParser.parse({experimentalProposal: {functionBind: true}}, './test/fixture/syntax/FunctionBind.js');
    assert(ast.program.sourceType === 'module');
  });
});