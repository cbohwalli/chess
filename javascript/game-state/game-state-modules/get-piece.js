import Bishop from "../../pieces/bishop/bishop.js";
import Knight from "../../pieces/knight/knight.js";
import Rook from "../../pieces/rook/rook.js";
import Queen from "../../pieces/queen/queen.js";
import King from "../../pieces/king/king.js";
import Pawn from "../../pieces/pawn/pawn.js";

export default function getPieceByType(typeOfPiece, color, pieceId, cell) {
    let piece = {};

    if(typeOfPiece === "Bish") {
        piece = new Bishop(color, pieceId, cell);
    }
    if(typeOfPiece === "Knig") {
        piece = new Knight(color, pieceId, cell);
    }
    if(typeOfPiece === "Rook") {
        piece = new Rook(color, pieceId, cell);
    }
    if(typeOfPiece === "Quee") {
        piece = new Queen(color, pieceId, cell);
    }
    if(typeOfPiece === "King") {
        piece = new King(color, pieceId, cell);
    }
    if(typeOfPiece === "Pawn") {
        piece = new Pawn(color, pieceId, cell);
    }

    return piece;
} 