import { expect } from 'chai';
import { describe, it } from 'mocha';
import { decollage } from './decolage.js';


describe('Tests sur le code decalage.js', function(){

    describe('Tests qui reussissent', function(){
        it('Ca devrait retourner booster lorsque le parametre est le suivant: [6, "rocket", "rocket", "booster", "fire", "rocket", "booster"]', function(){
            expect(decollage([6, "rocket", "rocket", "booster", "fire", "rocket", "booster"])).to.equal("booster");
        });
        it('Ca devrait retourner rocket lorsque le parametre est le suivant: [5, "rocket", "sparkles", "fire", "booster", "rocket"]', function(){
            expect(decollage([5, "rocket", "sparkles", "fire", "booster", "rocket"])).to.equal("rocket");
        });
        it('Ca devrait retourner fire lorsque le parametre est le suivant: [4, "rocket", "fire", "booster", "fire"]', function(){
            expect(decollage([4, "rocket", "fire", "booster", "fire"])).to.equal("fire");
        });
    });

    describe('Tests qui ne reussissent pas', function(){
        it('Ca devrait retourner une erreur si le parametre donne n\'est pas correct ', function(){
            expect(() => decollage(String)).to.throw(Error);
        });
        it('Ca devrait retourner une erreur si le parametre donne n\'est pas correct ', function(){
            expect(() => decollage(Number)).to.throw(Error);
        });
    });
});