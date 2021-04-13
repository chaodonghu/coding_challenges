function textEditor(input) {
    // instantiate our 3 stacks
    const res = [];
    const undo = [];
    const redo = [];
    const actions = [];

    for (let i = 0; i < input.length; i++) {
        let [index, action, word] = input[i];
        if (action === 'APPEND') {
            res.push([index, action, word]);
            undo.push([index, action, word]);
        } else if (action === 'BACKSPACE') {
            const [resultIndex, resultAction, lastWord] = res.pop();
            const lastLetter = lastWord[lastWord.length - 1];
            const newLastWord = lastWord.slice(0, -1);

            // push the BACKSPACE index, action and new lastWord
            res.push([index, action, newLastWord]);
            undo.push([index, action, lastLetter]);
        } else if (action === 'UNDO') {
            if (undo.length > 0) {
                const undoInput = undo.pop();
                const [index, action, word] = undoInput;
                if (action === 'APPEND') {
                    res.pop();
                } else if (action === 'BACKSPACE') {
                    res.push([index, action, word]);
                }
                // push the action and word into the redo stack
                redo.push([index, action, word]);
            }
        } else if (action === 'REDO') {
            let [lastIndex, lastAction, lastWord] = input[i - 1];
            // only perform a redo if the last action before it was an UNDO
            if (redo.length > 0 && lastAction === 'UNDO') {
                input.push(redo.pop());
            }
        } else if (action === 'SELECT') {
            if (res.length > 0) {
                const [lastIndex, lastAction, lastWord] = res.pop();

                const [actionIndex, actionAction, startIndex, endIndex] = input[i];

                const newWord = lastWord.substr(startIndex - 1, endIndex);
                res.push([lastIndex, lastAction, newWord]);
            }
        }
    }

    let string = '';
    for (let [index, action, word] of res) {
        string += word;
    }

    return string;
}

// Test cases:
// input:
// [["0","APPEND","Hello"],
//  ["1","APPEND"," there"],
//  ["2","APPEND","!"],
//  ["3","UNDO"],
//  ["4","UNDO"],
//  ["5","REDO"],
//  ["6","REDO"]]
//  "Hello there!"

// input: [["1548185072722","APPEND","ey"],
// ["1548185072721","APPEND","H"]]
// "Hey"

// input:
// [["0","APPEND","Hello"],
 // ["1","APPEND"," there"],
 // ["2","APPEND","!"],
 // ["3","UNDO"],
 // ["4","REDO"],
 // ["5","BACKSPACE"]
// "Hello there"

// input:
// [["0","APPEND","Hello"],
 // ["1","SELECT", "1", "3"],
 // ["2","BACKSPACE"]
// We select the indexes from 1 - 3, so the word we work on is "ell" -> therefore producing "Helo"
