<script>
let counts=setInterval(updated);
let upto=0;
function updated(){
    var count= document.getElementById("counter");
    count.innerHTML=++upto;
    if(upto===999)
    {
        clearInterval(counts);
    }
}
</script>