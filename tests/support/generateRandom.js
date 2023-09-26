exports.generateRandom = class generateRandom {

    generateRandom (param) {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let formedString = "";
        let result = ""
        for (let i=0;i<15; i++) {
            formedString +=chars[Math.floor(Math.random() * chars.length)]
        }
        result = param === "email" ? `${formedString}@gmail.com` : param === "" ? formedString : ""
        return result;
    }
}