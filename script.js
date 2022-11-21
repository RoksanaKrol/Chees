function createBoard() {
    var board = "";
    var a = "abcdefgh";
    
    board +="<table>";
        for(i=0; i<8; i++) {
        board+="<td>"+a[i]+"</td>";
    }
    for (var i=8; i>0; i--) {
        board +="<tr>";
        for (var j=0; j<8; j++) {
            board +="<td><div id='"+a[j]+i+"'class='field ";
            if (i%2==0) {
                if (j%2==0) {
                    board +="white";
                } else {
                    board +="black";
                }
            } else {
                if (j%2==0) {
                    board +="black";
                } else {
                    board +="white";
                }
            }    
            board +="'>"+a[j]+i+"</div></td>";
        }
      board +="</tr>";
    }
        for(i=0; i<8; i++) {
        board+="<td>"+a[i]+"</td>";
    }
    board +="</table>";
    document.getElementById("board").innerHTML = board;
}