const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', (done) => {
        var from = 'jen';
        var text = 'someMessage';
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
        done();
    });
});