function provera(){
var ispis=document.getElementById("greska");
var ime=document.getElementById("name").value;
var email=document.getElementById("email").value;
var ime_ispis=JSON.stringify({"polje":"ime","greska":"Ime mora biti popunjeno!"});
var email_ispis=JSON.stringify({"polje":"email","greska":"email mora biti popunjen!"});


try{
 if (ime=="") {throw ime_ispis;}
 else if(email==""){throw email_ispis; }
 else {
 	alert("Poruka poslata!");
 }
}
	catch(error){
		ispis.innerHTML=error;
	}
}
