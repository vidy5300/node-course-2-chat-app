const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'jen';
        var text = 'someMessage';
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'jen';
        var latitutde = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19'

        var message = generateLocationMessage(from, latitutde, longitude)

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});