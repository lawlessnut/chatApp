const generateMessage = (from,text) => {
    return {
        from : from,
        text : text,
        createdAt : new Date().getTime()
    }
}

const generateLocation = (from, coords) =>{
    return {
        from,
        url : `https://www.google.com/maps?q=${coords}`,
        createdAt: new Date().getTime()
    }
}

module.exports = { generateMessage, generateLocation }