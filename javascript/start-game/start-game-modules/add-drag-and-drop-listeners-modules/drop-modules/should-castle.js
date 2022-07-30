function shouldCastle(dragElement, targetElementCell) {

    //check if castle
    if(dragElement.id === "black_king" && targetElementCell.id === "cell_g8" && dragElement.dataset.previousCell === "") {
      const rook_move_cell = document.getElementById('cell_f8');
      const rook = document.getElementById('black_rook_1');
      rook_move_cell.appendChild(rook);
    }
    else if(dragElement.id === "black_king" && targetElementCell.id === "cell_c8" && dragElement.dataset.previousCell === "") {
      const rook_move_cell = document.getElementById('cell_d8');
      const rook = document.getElementById('black_rook_2');
      rook_move_cell.appendChild(rook);
    }
    else if(dragElement.id === "white_king" && targetElementCell.id === "cell_g1" && dragElement.dataset.previousCell === "") {
      const rook_move_cell = document.getElementById('cell_f1');
      const rook = document.getElementById('white_rook_1');
      rook_move_cell.appendChild(rook);
    }
    else if(dragElement.id === "white_king" && targetElementCell.id === "cell_c1" && dragElement.dataset.previousCell === "") {
      const rook_move_cell = document.getElementById('cell_d1');
      const rook = document.getElementById('white_rook_2');
      rook_move_cell.appendChild(rook);
    }
  
}