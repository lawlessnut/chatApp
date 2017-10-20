const expect = require("expect");
const { generateMessage,generateLocation } = require("./message");

describe("generateMessage", ()=>{
    it("should generate correct message object",()=>{
        var from = "Vipul",
            text = "Hello",
            message = generateMessage(from,text);
        expect(message.createdAt).toBeA("number");
        expect(message).toInclude({from,text});
    });
})

describe("generateLocationMessage", ()=>{
    it("should generate correct location object", ()=>{
            const from = "Vipul",
                coords = `${123},${456}`,
                locationMessage = generateLocation(from,coords);
            expect(locationMessage.createdAt).toBeA("number");
            expect(locationMessage.url).toEqual(`https://www.google.com/maps?q=${123},${456}`);
        });
});