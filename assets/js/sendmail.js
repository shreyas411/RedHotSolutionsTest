
function sendEmail(){
    var Name =  document.getElementById('name').value != '' ? "This is  " + document.getElementById('name').value + ". " : '';
    var PhoneNumber = document.getElementById('number').value != '' ? "My phone number is " + document.getElementById('number').value +".  " : '';
    var Subject = document.getElementById('subject').value;
    var Email = document.getElementById('email').value;
    var Message = Name + PhoneNumber + Subject;
    
    if(Message != '') {
        
    emailjs.send("gmail","template_32trv5j", {
        from_name: document.getElementById('name').value,
        to_name: 'ThanaSelvan',
        message: Message,
        Email: Email
        }).then(function(response){
            alert('Thanks for your feedback');
            console.log('success', response.status);
        },function(error) {
            console.log(error);
        })
            
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('number').value = "";
        document.getElementById('subject').value = "";
    }
}