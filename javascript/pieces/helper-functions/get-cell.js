import convertLetterToNumber from "./convert-letter-to-number.js";
import convertNumberToLetter from "./convert-number-to-letter.js";

export function getCellRight(cell) {
    let cellColumn = cell.substring(0,1);
    cellColumn = convertLetterToNumber(cellColumn);
    cellColumn += 1;

    if (cellColumn < 9 && cellColumn > 0) {
        cellColumn = convertNumberToLetter(cellColumn);
        return cellColumn + cell.substring(1,2);
    }

    return null;   
}

export function getCellLeft(cell) {
    let cellColumn = cell.substring(0,1);
    cellColumn = convertLetterToNumber(cellColumn);
    cellColumn -= 1;
    
    if (cellColumn < 9 && cellColumn > 0) {
        cellColumn = convertNumberToLetter(cellColumn);
        return cellColumn + cell.substring(1,2);
    }

    return null;   
}

export function getCellUp(cell) {
    let cellRow = parseInt(cell.substring(1,2));
    cellRow += 1;
    return cell.substring(0,1) + cellRow;  
}

export function getCellDown(cell) {
    let cellRow = parseInt(cell.substring(1,2));
    cellRow -= 1;
    return cell.substring(0,1) + cellRow;  
}