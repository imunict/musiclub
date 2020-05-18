//CARGAR CIUDADES Y DEPARTANMENTOS
$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: '../Controlador/cargar_departamentos.php'
  })
  .done(function(listas_dep){
    $('#lista_departamentos').html(listas_dep);
  })
  .fail(function(){
    alert('Hubo un errror al cargar las listas_dep');
  });

  $('#lista_departamentos').on('change', function(){
    var id = $('#lista_departamentos').val();
    $.ajax({
      type: 'POST',
      url: '../Controlador/cargar_ciudad.php',
      data: {'id': id}
    })
    .done(function(listas_dep){
      $('#ciudad').html(listas_dep);
    })
    .fail(function(){
      alert('Hubo un errror al cargar departamentos');
    });
  });
});

//validar formulario
const form = document.getElementById('form');
const button = document.getElementById('submitbut');
const id = document.getElementById('id');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const direction = document.getElementById('direction');
const phone = document.getElementById('phone');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const condition = document.getElementById('condition');
const phonetwo = document.getElementById('phonetwo');
const nametwo = document.getElementById('nametwo');
const lastnametwo = document.getElementById('lastnametwo');
const mailtwo = document.getElementById('mailtwo');

const uffernt=
        {
            id: false,
            name: false,
            lastname: false,
            direction: false,
            phone: false,
            mail: false,
            condition:false,
        };
form.addEventListener('submit', (e)=>
       {
           e.preventDefault();
           validate();
       });
       
id.addEventListener('change', (e)=>
       {
         limpiarerror(id);
         if(e.target.value.trim().length>0)uffernt.id = true ;
              if(isNaN(id.value))
             {
                 alert ("las cedulas\n deben ser  tipos numericos");
                 error(id);
               return false;
             }
             if(id.value == 0)
             {
                 alert ("El campo\n no puede estar vacio ");
                 error(id);
             }
            
            
       else  {
              return true;
             }
       });       
name.addEventListener('change', (e)=>
       {
         limpiarerror(name);  
         if(e.target.value.trim().length>0)uffernt.name = true ;
         if (!name.checkValidity())
         {
             error(name);
             alert ("El campo\n no puede contener numeros  ");
             return false;
         }
       });  
nametwo.addEventListener('change', (e)=>
       {
         limpiarerror(nametwo);  
         if(e.target.value.trim().length>0)uffernt.name = true ;
         if (!nametwo.checkValidity())
         {
             error(nametwo);
             alert ("El campo\n no puede contener numeros  ");
             return false;
         }
       });        
lastname.addEventListener('change', (e)=>
       {
         limpiarerror(lastname);  
         if(e.target.value.trim().length>0)uffernt.lastname = true;
          if (!lastname.checkValidity())
         {
             alert ("El campo\n no puede contener numeros  ");
             error(lastname);
             return false;
             
         }
       });  
lastnametwo.addEventListener('change', (e)=>
       {
         limpiarerror(lastnametwo);  
         if(e.target.value.trim().length>0)uffernt.lastname = true;
          if (!lastnametwo.checkValidity())
         {
             alert ("El campo\n no puede contener numeros  ");
             error(lastnametwo);
             return false;
             
         }
       });          
direction.addEventListener('change', (e)=>
       {
         limpiarerror(direction);  
         if(e.target.value.trim().length>0)uffernt.direction = true ;
          if (!direction.checkValidity())
         {
             error(direction);
             return false;
             
         }
       });       
phone.addEventListener('change', (e)=>
       {
         limpiarerror(phone);  
         if(e.target.value.trim().length>0)uffernt.phone = true;
             if(isNaN(phone.value))
             {
              alert ("los campos Telefono\n deben ser numericos");
              error(phone);
               return false;
             }
       else  {
              return true;
             }
       }       );  
 phonetwo.addEventListener('change', (e)=>
       { 
             limpiarerror(phonetwo);
             if(isNaN(phonetwo.value))
             {
              alert ("los campos Telefono\n deben ser numericos");
              error(phonetwo);
               return false;
             }
       else  {
              return true;
             }
       }       ); 
mail.addEventListener('change', (e)=>
       {
         limpiarerror(mail);
         if(e.target.value.trim().length>0)uffernt.mail = true ;
 
          if (!mail.checkValidity())
         {
             error(mail);
             return false;
             
         }
         
         var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mail.value.match(mailformat))
{
return true;
}
else
{
alert("hay una expresion \ninvalida en el correo");
 error(mail);
return false;
}
       }); 
       
mailtwo.addEventListener('change', (e)=>
       {
         limpiarerror(mailtwo);
         if(e.target.value.trim().length>0)uffernt.mailtwo = true ;
   
          if (!mailtwo.checkValidity())
         {
             error(mailtwo);
             return false;
             
         }

         var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailtwo.value.match(mailformat))
{
return true;
}
else
{
alert("hay una expresion \ninvalida en el correo");
 error(mailtwo);
return false;
}
       }); 
         
condition.addEventListener('change', (e)=>
{
    uffernt.condition = e.target.checked;
    e.target.checked ? button.removeAttribute('disabled'): button.setAttribute('disabled', true);
});       
const validate = ()=>{
    const formValues = Object.values(uffernt)
    const valid = formValues.findIndex(value => value == false)
    if (valid == -1)form.submit()
            else alert("Complete el formulario\n Correctamente")
}
function error(element)
{
    element.className=" form-control error";
    element.focus();
}
function limpiarerror(element)
{
    element.className="form-control";
}

 
 $(document).ready(function() {

	$('#mailtwo').keyup(function() {

		var pass1 = $('#mail').val();
		var pass2 = $('#mailtwo').val();

		if ( pass1 == pass2 ) {
			$('#error2').css("background", "url(../img/check.png)");
		} else if (pass1 !== pass2)
                {
			$('#error2').css("background", "url(../img/check-.png)");
                        error(mailtwo);
                        return false;
            
		}

	});

});

   $(document).ready(function () {
            //Click al boton para pedir permisos
            $("#pedirvan").click(function () {
                //Si el navegador soporta geolocalizacion
                if (!!navigator.geolocation) {
                    //Pedimos los datos de geolocalizacion al navegador
                    navigator.geolocation.getCurrentPosition(
                            //Si el navegador entrega los datos de geolocalizacion los imprimimos
                            function (position) {
                                window.alert("nav permitido");
                                $("#nlat").text(position.coords.latitude);
                                $("#nlon").text(position.coords.longitude);
                            },
                            //Si no los entrega manda un alerta de error
                            function () {
                                window.alert("nav no permitido");
                            }
                    );
                }
            });

        });

  
