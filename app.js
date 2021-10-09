// What's app contact  

var frm = document.querySelector('#contact')
frm.addEventListener("submit", (err) => {
    // Prevents from refresh
    err.preventDefault();
    var name = document.getElementById("name").value;
    var messege = document.getElementById("messege").value;
    var win = window.open(`https://wa.me/+919041063244?text=Hello%2C%20my%20name%20is%20%20${name},%20${messege}`, '_blank');
});