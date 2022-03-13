const iota = (function ()
{
    let counter = 0;

    return function (reset = false)
    {
        if (reset) counter = 0;
        return counter++;
    }
});

const OP_PUSH = iota(true);
const OP_ADD = iota();
const OP_SUB = iota();
const OP_MUL = iota();
const OP_DIV = iota();
const OP_STRING = iota();
const OP_PRINT = iota();

/**
 * @param {string} text
 */
const lex = function (text)
{
    const result = [];

    let inString = false;
    let escaped = false;
    let tokenStart = 0;

    const addToken = function(endIndex)
    {
        if (tokenStart >= endIndex) return;
        const token = text.substring(tokenStart, endI)

    };

    for (let index = 0; index < text.length; index++)
    {
        if (text[index] === "/" && index + 1 < text.length && text.[index + 1] === "/") break;

        if (inString)
        {

        }
        else if (text[index] === " " || text[index] === "\r" || text[index] === "\n")
        {

        }
    }

    return result;
}