$("#form").submit(function(e) {
    e.preventDefault();
    $.post( "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8", 
    $( "#form" ).serialize()
    
    );
});