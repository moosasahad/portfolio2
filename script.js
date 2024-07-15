function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    const serviceID="service_cn9p19u";
const templateID="template_885pp6c";

emailjs.send(serviceID,templateID,params)

.then(
    rest=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(rest);
        alert("Your response sent successfully")})
        .catch(err=>console.log(err));

}