var a = " abcdefgh";
var f = [
    ["P","a2","w"],
    ["P","b2","w"],
    ["P","c2","w"],
    ["P","d2","w"],
    ["P","e2","w"],
    ["P","f2","w"],
    ["P","g2","w"],
    ["P","h2","w"],
    
    ["R","a1","w"],
    ["R","h1","w"],
    
    ["P","a7","b"],
    ["P","b7","b"],
    ["P","c7","b"],
    ["P","d7","b"],
    ["P","e7","b"],
    ["P","f7","b"],
    ["P","g7","b"],
    ["P","h7","b"],
    
    ["R","a8","b"],
    ["R","h8","b"],
];

function setFigures() {
    for (var i=0; i<20; i++) {
        document.getElementById(f[i][1]).innerHTML="<div id='"+f[i][0]+" "+f[i][1]+"' class='F "+f[i][0]+f[i][2]+"'></div>";
    }
}


function createBoard() {
    var board = "";
    
    board +="<table>";
        for(i=0; i<9; i++) {
        board+="<td>"+a[i]+"</td>";
    }
    for (var i=8; i>0; i--) {
        board +="<tr>";
        for (var j=0; j<10; j++) {
            if (j==0 || j==9) {
                board+="<td class='num'>"+i+"</td>";
            } else {
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
                board +="'>"/*+a[j]+i*/+"</div></td>";
            }
        }
      board +="</tr>";
    }
        for(i=0; i<9; i++) {
        board+="<td>"+a[i]+"</td>";
    }
    
    board +="</table>";
    document.getElementById("board").innerHTML = board;
    
    setFigures();
}