$( "#submit" ).click(function() {
    $.post( "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8", 
    $( "#form" ).serialize()
    
    );
});