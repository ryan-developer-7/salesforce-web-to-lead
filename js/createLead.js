$( "#submit" ).click(function() {
    $.post( "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8", 
    { 
        oid: "00D4K0000016LVA", 
        first_name: $( "#first_name" ).value,
        last_name: $( "#last_name" ).value,
        phone: $( "#phone" ).value,
        "00N4K000002A1uc": $( "#00N4K000002A1uc" ).value
    } 
    
    );
});