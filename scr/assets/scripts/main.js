

$(".submit").click(function () {
    console.log('Submited')
    $("#proposal-form").hide();
    $("#submitted").show("slow", "swing", function (){
        return false;
    })
    return false;
});


