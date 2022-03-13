/**
 * @param {string} text
 */
function preCompile(text) {
    let outPut = [""];
    let inString = false;
    let escaped = false;

    while (text.length > 0) {
        let char = text[0];
        if (char === "\"") {
            if (escaped) {
                escaped = false;
            } else {
                inString = !inString;
            }
        } else if (char === "\\") {
            escaped = !escaped;
            outPut[outPut.length - 1] += char;
        } else if (char !== " " || (char == " " && inString)) {
            outPut[outPut.length - 1] += char;
        }

        if (char == " " && !inString) {
            outPut.push("");
        }

        text = text.slice(1);

    };

    return outPut;

};

module.exports = preCompile;