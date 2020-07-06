document.getElementById("doPrint").addEventListener("click",
function(){
    let printContents =
    document.getElementById("bills-form").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
});