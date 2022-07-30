import convertNumberToLetter from "../../helper-functions/convert-number-to-letter.js";
import convertLetterToNumber from "../../helper-functions/convert-letter-to-number.js";

export default function getKingPattern(cell, gameState) {
    const oldColumn = cell.substring(0,1);
    const oldColumnAsNumber = convertLetterToNumber(oldColumn);
    const oldRow = parseInt(cell.substring(1,2));
    let pattern = [];

    for (let i = -1; i < 2; i++) {
        let newColumn1 = convertNumberToLetter(oldColumnAsNumber - 1);
        let newColumn2 = convertNumberToLetter(oldColumnAsNumber + 1);
        let newCell1 = "";
        let newCell2 = "";
        let newCell3 = "";
        let newRow = oldRow + i;
        let displacementVertically = Math.abs(i);
        

        if(displacementVertically === 0) {
            newCell1 = newColumn1 + oldRow;
            newCell2 = newColumn2 + oldRow;
        }

        if(displacementVertically === 1) {
            newCell1 = newColumn1 + newRow;
            newCell2 = newColumn2 + newRow;
            newCell3 = oldColumn + newRow;
        }

        if(gameState[newCell1] !== undefined) {
            pattern.push(newCell1);
        }

        if(gameState[newCell2] !== undefined) {
            pattern.push(newCell2);
        }

        if(gameState[newCell3] !== undefined) {
            pattern.push(newCell3);
        }
    }

    return pattern;
}