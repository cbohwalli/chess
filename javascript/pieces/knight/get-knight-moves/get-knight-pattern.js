import convertLetterToNumber from "../../helper-functions/convert-letter-to-number.js";
import convertNumberToLetter from "../../helper-functions/convert-number-to-letter.js";

export default function getKnightPattern(cell, gameState) {
    const oldColumnAsNumber = convertLetterToNumber(cell.substring(0,1));
    const oldRow = parseInt(cell.substring(1,2));
    let pattern = [];

// Knight pattern has a displacement of either 1 on the x-axis and 2 on the y-axis or vice versa, in all directions, hence the for loop starting point is at -2 and ends at 2. observe that 0 is skipped.
    for (let i = -2; i < 3; i++) {
        let newRow = oldRow + i;
        let newColumnAsNumber = 0;
        let newColumn1 = "";
        let newColumn2 = "";
        let newCell1 = "";
        let newCell2 = "";
        let displacement = Math.abs(i);

        if(i === 0) {
            continue;
        }

        if(displacement === 2) {
            newColumnAsNumber = 1;
        }

        if(displacement === 1) {
            newColumnAsNumber = 2;
        }

        newColumn1 = convertNumberToLetter(oldColumnAsNumber + newColumnAsNumber);
        newColumn2 = convertNumberToLetter(oldColumnAsNumber - newColumnAsNumber);
        newCell1 = newColumn1 + newRow;
        newCell2 = newColumn2 + newRow;

        if(gameState[newCell1] !== undefined) {
            pattern.push(newCell1);
        }

        if(gameState[newCell2] !== undefined) {
            pattern.push(newCell2);
        }
    }

    return pattern;
}