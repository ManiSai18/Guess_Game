document.getElementById("res1").innerHTML = localStorage.getItem("textvalue3");

function generate() {
    var N = Math.floor(Math.random() * 100) + 1;
    return N
    //return 99;
}
function msg() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 1000);
    document.getElementById("res").innerHTML = "Play Now"
}
var Num = generate();

let ch = 10;
function check() {
    ch--; 
    if (ch == 0) {
        document.getElementById("res5").innerHTML = "Sorry! YOU LOST.\n Page Reloads in 5 sec";
        setTimeout(reloadPage, 5000);
        document.getElementById("res").innerHTML = "Play Again"
    }
    else if (ch==1){
        document.getElementById("res5").innerHTML = "One Last Chance: END GAME";
        cal();
    }
    else{
        document.getElementById("res5").innerHTML = "Chances left: " + ch;
        cal();
    }
   
}

function reloadPage() {
    location.reload(true);
}

function cal() {
    N1 = parseInt(document.getElementById('a4').value);
    if (N1 == Num) {
        document.getElementById("res5").innerHTML = "BINGO!!! You Won!!\n      Page Reloads in 5 sec";
        setTimeout(reloadPage, 5000);
        document.getElementById("res").innerHTML = "Play Again"
    }
    else {
        l1 = [];
        a1 = N1.toString();
        for (var i = 0, len = a1.length; i < len; i += 1) {
            l1.push(+a1.charAt(i));
        }
        l2 = [];
        a2 = Num.toString();
        for (var j = 0, len = a2.length; j < len; j += 1) {
            l2.push(+a2.charAt(j));
        }
        if (l2.length == 1) {
            if (l1.length == 2) {
                if (l1[0] == l2[0] & l1[1] != l2[0]) {
                    document.getElementById("res").innerHTML = "Numbers Matched: 1";
                }
                else if (l1[1] == l2[0] & l1[0] != l2[0]) {
                    document.getElementById("res").innerHTML = "Numbers Matched: 1";
                }
                else if (l1[0] == l2[0] & l1[1] == l2[0]) {
                    document.getElementById("res").innerHTML = "Numbers Matched: 1";
                }
                else {
                    document.getElementById("res").innerHTML = "Numbers Matched: 0";
                }
            }
            else if (l1[0] != l2[0]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 0";
            }
        }
        else if (l2.length == 2 & l1.length == l2.length) {
            if (l1[0] == l2[0] | l1[1] == l2[1]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 1";
            }
            else if (l1[0] == l2[1] & l1[1] == l2[0]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 2";
            }
            else if (l1[0] == l2[1] | l1[1] == l2[0]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 1";
            }
            else {
                document.getElementById("res").innerHTML = "Numbers Matched: 0";
            }
        }
        else if (l1.length == 2 & l1.length > l2.length) {
            if (l1[0] == l2[0] & l1[1] != l2[0]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 1";
            }
            else if (l1[1] == l2[0] & l1[0] != l2[0]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 1";
            }
        }
        else if (l2.length == 2 & l1.length < l2.length) {
            if (l1[0] == l2[0]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 1";

            }
            else if (l1[0] == l2[1]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 1";
            }
            else if (l1[0] != l2[0] & l1[0] != l2[1]) {
                document.getElementById("res").innerHTML = "Numbers Matched: 0";
            }

        }

    }

}