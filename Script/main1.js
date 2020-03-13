function palindrome(){
rev= "";
input= document.getElementById("text").value;
i=input.length;
for(var j=i; j>=0; j--){
    rev = rev+input.charAt(j);
}
if(rev == input)
        document.getElementById("result").innerHTML = "String is a pallindrome";
    else
        document.getElementById("result").innerHTML = "String is not a pallindrome";
}