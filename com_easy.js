document.getElementById("res1").innerHTML=localStorage.getItem("textvalue1");
function generate(){
    var N=Math.floor(Math.random() * 100) +1;
    return N;
}
function msg() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function reloadPage() {
    location.reload(true);
}

var Num=generate();
function hint(){
        if(Num<=37 & Num>=0){
            mn=0;
            mx=Num+30;
        }
        else if(Num==100){
            setTimeout(reloadPage,0);
            hint();
            msg();

        }
        else if(Num<=100 & Num>=74){
            mn=Num-37;
            mx=100;
        }
        else{
            mn=Num-37;
            mx=Num+26;
        }
        document.getElementById("res2").innerHTML="Hint :the Number is Between:";
        document.getElementById("res3").innerHTML=mn;
        document.getElementById("res4").innerHTML=mx;
        
} 
    

function cal(){
    N1=parseInt(document.getElementById("a4").value); 
    if (N1==Num){
        calc()
        function calc(){
            document.getElementById("res5").innerHTML = "BINGO!!! You Won!!\n      Page Reloads in 5 sec";
            setTimeout(reloadPage, 5000);
            document.getElementById("res").innerHTML = "Play Again"
        } 
           
    }
    else{
        l1=[];
        a1=N1.toString();
        for (var i = 0, len = a1.length; i < len; i += 1) {
            l1.push(+a1.charAt(i));
        }
        l2=[];
        a2=Num.toString();
        for (var j = 0, len = a2.length; j < len; j += 1) {
            l2.push(+a2.charAt(j));
        }
        if (l2.length == 1) {
            if (l1.length == 2) {
                if (l1[0] == l2[0] & l1[1] != l2[0]) {
                    document.getElementById("res").innerHTML = "Positions Matched:1\n Position Mismatched:0";
                }
                else if (l1[1] == l2[0] & l1[0] != l2[0]) {
                    document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:1";
                }
                else if (l1[0] == l2[0] & l1[1] == l2[0]) {
                    document.getElementById("res").innerHTML = "Positions Matched:1\n Position Mismatched:1";
                }
                else {
                    document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:0";
                }
            }
            else if (l1[0] != l2[0]) {
                document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:0";
            }
        }
        else if (l2.length == 2 & l1.length == l2.length) {
            if (l1[0] == l2[0] | l1[1] == l2[1]) {
                document.getElementById("res").innerHTML = "Positions Matched:1\n Position Mismatched:0";
            }
            else if (l1[0] == l2[1] & l1[1] == l2[0]) {
                document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:2";
            }
            else if (l1[0] == l2[1] | l1[1] == l2[0]) {
                document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:1";
            }
            else {
                document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:0";
            }
        }
        else if (l1.length == 2 & l1.length > l2.length) {
            if (l1[0] == l2[0] & l1[1] != l2[0]) {
                document.getElementById("res").innerHTML = "Positions Matched:1\n Position Mismatched:0";
            }
            else if (l1[1] == l2[0] & l1[0] != l2[0]) {
                document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:1";
            }
        }
        else if (l2.length == 2 & l1.length < l2.length) {
            if (l1[0] == l2[0]) {
                document.getElementById("res").innerHTML = "Positions Matched:1\n Position Mismatched:0";

            }
            else if (l1[0] == l2[1]) {
                document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:1";
            }
            else if (l1[0] != l2[0] & l1[0] != l2[1]) {
                document.getElementById("res").innerHTML = "Positions Matched:0\n Position Mismatched:0";
            }

        }

    }

}