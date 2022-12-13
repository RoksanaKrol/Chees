var aF = 0;

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
    ["P","h3","w"],
    
    ["R","a1","w"],
    ["R","h1","w"],
    
    ["B","c1","w"],
    ["B","f1","w"],
    
    ["P","a7","b"],
    ["P","b7","b"],
    ["P","c7","b"],
    ["P","d7","b"],
    ["P","e7","b"],
    ["P","f7","b"],
    ["P","g7","b"],
    ["P","h7","b"],
    ["P","g6","b"],
    
    ["R","a8","b"],
    ["R","h8","b"],
    
    ["B","c8","b"],
    ["B","f8","b"],
];

// unselecting fields possible for a figure to move onto
function unSelectFields() {
    for (var i=1; i<9; i++) {
        for(var j=1; j<9; j++) {
            document.getElementById(a[j]+i).classList.remove("green");
        }
    }
}
// select figure
function selectF(id) {
    if (id!=aF) {
        unSelectFields();
        aF=id;
        document.getElementById("notation").innerHTML = aF;// for tests only
        switch (id[0]) {
                case "P": pawn(); break;
        }
    } 
}

// if the figure is black revert direction
function ifB(num) {
    if (aF[3]=="b") {
        num = -num;
    }
    return num;
}
// if the position taken
function isInArrayF(position) {
    let isInArray = false;
    for(var i=0; i<f.length; i++) {
        if(f[i][1]==position) {
            isInArray = true;
            document.getElementById("notation").innerHTML += f[i][1];// for tests only
       }
    }
    return isInArray;
}

function pawn() {
    let x = +parseInt(aF[2])+ifB(1);
    if(!isInArrayF(aF[1]+x)) {
        document.getElementById(aF[1]+x).classList.add("green");
        document.getElementById("notation").innerHTML +=" tak "+aF[1]+x;// for tests only
    }
}

function setFigures() {
    for (var i=0; i<f.length; i++) {
        document.getElementById(f[i][1]).innerHTML="<div onclick='selectF(this.id)' id='"+f[i][0]+""+f[i][1]+f[i][2]+"' class='F "+f[i][0]+f[i][2]+"'></div>";
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