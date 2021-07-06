

$(".submit").click(function () {
    console.log('Submited')
    $("#proposal-form").hide();
    $("#submitted").show("slow", "swing", function () {
        return false;
    })
    return false;
});


$(".submit").click(function (){
    if (document.getElementById('rname').value == "" || document.getElementById("remail").value == "") {
        alert("enter something valid");
location.reload();
        return false;
    }
})