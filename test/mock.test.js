/* Just a quick fake/mock test to check that
Jest works as it should */

// We will write real unit tests in the future 

const { expect } = require('@jest/globals');
const { TestWatcher} = require ('jest');

describe('A test suite', () => {
    test('A fake test', () => {
        expect(3).toBe(3); //failing on purpose

    }); 
});
