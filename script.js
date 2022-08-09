function ValidateEmail() 
{
    var y = document.getElementById("email").value;
    var len = y.length;
    
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(y) || len == 0)
    {
        document.getElementById("emailWarning").innerHTML=""
    }
    else{
        document.getElementById("emailWarning").innerHTML="Enter email format correctly"
    }
} 

function scrollToTop() {
    window.scrollTo(0, 0);
}


