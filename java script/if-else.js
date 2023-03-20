prompt("what is your name?");
prompt("who is your crush?");

var loveScore = Math.random() * 100 ;
loveScore = Math.floor(loveScore) + 1;
if(loveScore > 70){
    alert("your love score is " + loveScore + "%" + ", you love more with each other.");    
}
else
{
    alert("your love score is " + loveScore + "%");
}
