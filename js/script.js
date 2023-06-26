const url = 'https://evaluacionapi.onrender.com/api/estudiante'
const listarDatos = async () => {
  let respuesta = ''
  let body = document.getElementById('contenido')
  //url: Es la url de la api.
  //Al deslpegarla en el servidor colocar la api del servidor
  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
    .then(function (data) {
      let listaEstudiantes = data.estudiantes //Capturar el array devuelto por la api
      datos =
        listaEstudiantes.map(function (estudiante) {//Recorrer el array
          respuesta += `<tr><td>${estudiante.documento}</td>` +
            `<td>${estudiante.nombre}</td>` +
            `<td>${estudiante.nota1}</td>` +
            `<td>${estudiante.nota2}</td>` +
            `<td>${estudiante.nota3}</td>` +
            `<td>${estudiante.promedio}</td>` +
            `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(estudiante)})' >Editar</a> 
            <a class="waves-effect waves-light btn modal-danger red"  onclick='eliminar(${JSON.stringify(estudiante)})'>Eliminar</a></td>` +
            `</tr>`
          body.innerHTML = respuesta
        })
    })
}


const editar = (estudiante) => {
    document.getElementById('documento').value = ''
    document.getElementById('nombre').value = ''
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
  
    document.getElementById('documento').value = estudiante.documento
    document.getElementById('nombre').value = estudiante.nombre
    document.getElementById('nota1').value = estudiante.nota1
    document.getElementById('nota2').value = estudiante.nota2
    document.getElementById('nota3').value = estudiante.nota3
  
  }


  const eliminar = (documento) =>{
    const url = 'https://evaluacionapi.onrender.com/api/estudiante';
  
    if(confirm('¿esta seguro que desea realizar la eliminacion ')== true){
    
        let estudiante = {
            documento: documento.documento}
  
        fetch(url,  {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(estudiante),//Convertir el objeto _usuario  a un JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(json => {
            alert(json.msg)//Mensaje que retorna la API
            
        })
    }
  }
  
  const registrar = async () => {
    let _documento = document.getElementById('documento').value 
    let _nombre = document.getElementById('nombre').value 
    let _nota1 = document.getElementById('nota1').value 
    let _nota2 = document.getElementById('nota2').value 
    let _nota3 = document.getElementById('nota3').value 
    const url = 'https://evaluacionapi.onrender.com/api/estudiante';
  
      let estudiante = {
        documento: _documento,
        nombre: _nombre,
        nota1: _nota1,
        nota2: _nota2,
        nota3:_nota3
      }
  
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(estudiante),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      if ((_documento !== '') && (_nombre !== '') && (_nota1 !== '') && (_nota2 !== '') && (_nota3 !== '')){
        if (response.ok) {
          const data = await response.json();
          // Mostrar mensaje de éxito
          Swal.fire(data.msg, 'El estudiante se registro correctamente!', 'success');
  
          setTimeout(() => {
            window.location.href = '/listarEstudiante.html';
          }, 3000);
        } else {
          // Mostrar mensaje de error
          Swal.fire('Hubo un error en el registro.', 'Haz clic en el botón!', 'error');
        }
      }else{
        if (_documento === ''){
          document.getElementById("mensajeDocumento").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese el documento es obligatorio</div>';
        }else{
          document.getElementById("mensajeDocumento").innerHTML = '';
        }

        if (_nombre === ''){
          document.getElementById("mensajeNombre").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese el nombre obligatorio</div>';
        }else{
          document.getElementById("mensajeNombre").innerHTML = '';
        }

        if (_nota1 === ''){
          document.getElementById("mensajeNota1").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota 1</div>';
        
        }else if ((_nota1 >5) || (_nota1 < 0)) {
          document.getElementById("mensajeNota1").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota del 1 al 5</div>';

        }else{
          document.getElementById("mensajeNota1").innerHTML = '';
        }

        if (_nota2 === ''){
          document.getElementById("mensajeNota2").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota 2</div>';
        
        }else if ((_nota2 >5) || (_nota2 < 0)) {
          document.getElementById("mensajeNota2").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota del 1 al 5</div>';

        }else{
          document.getElementById("mensajeNota2").innerHTML = '';
        }

        if (_nota3 === ''){
          document.getElementById("mensajeNota3").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota 1</div>';
        
        }else if ((_nota3 >5) || (_nota3 < 0)) {
          document.getElementById("mensajeNota3").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota del 1 al 5</div>';

        }else{
          document.getElementById("mensajeNota3").innerHTML = '';
        }
      }
      }
      // Verificar el estado de la respuesta
      
  
  const actualizar = async () => {
    let _documento = document.getElementById('documento').value 
    let _nombre = document.getElementById('nombre').value 
    let _nota1 = document.getElementById('nota1').value 
    let _nota2 = document.getElementById('nota2').value 
    let _nota3 = document.getElementById('nota3').value 
    const url = 'https://evaluacionapi.onrender.com/api/estudiante';
  
    let estudiante = {
        documento: _documento,
        nombre: _nombre,
        nota1: _nota1,
        nota2: _nota2,
        nota3:_nota3
      }
  
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(estudiante),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      if ((_documento !== '') && (_nombre !== '') && (_nota1 !== '') && (_nota2 !== '') && (_nota3 !== '')){
        if (response.ok) {
          const data = await response.json();
          // Mostrar mensaje de éxito
          Swal.fire(data.msg, 'El estudiante se actualizo correctamente!', 'success');
  
          setTimeout(() => {
            window.location.href = '/listarEstudiante.html';
          }, 3000);
        } else {
          // Mostrar mensaje de error
          Swal.fire('Hubo un error en el registro.', 'Haz clic en el botón!', 'error');
        }
      }else{
        if (_documento === ''){
          document.getElementById("mensajeDocumento").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese el documento es obligatorio</div>';
        }else{
          document.getElementById("mensajeDocumento").innerHTML = '';
        }

        if (_nombre === ''){
          document.getElementById("mensajeNombre").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese el nombre obligatorio</div>';
        }else{
          document.getElementById("mensajeNombre").innerHTML = '';
        }

        if (_nota1 === ''){
          document.getElementById("mensajeNota1").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota 1</div>';
        
        }else if ((_nota1 >5) || (_nota1 < 0)) {
          document.getElementById("mensajeNota1").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota del 1 al 5</div>';

        }else{
          document.getElementById("mensajeNota1").innerHTML = '';
        }

        if (_nota2 === ''){
          document.getElementById("mensajeNota2").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota 2</div>';
        
        }else if ((_nota2 >5) || (_nota2 < 0)) {
          document.getElementById("mensajeNota2").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota del 1 al 5</div>';

        }else{
          document.getElementById("mensajeNota2").innerHTML = '';
        }

        if (_nota3 === ''){
          document.getElementById("mensajeNota3").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota 1</div>';
        
        }else if ((_nota3 >5) || (_nota3 < 0)) {
          document.getElementById("mensajeNota3").innerHTML = '<div class="alert alert-danger" role="alert">Ingrese la nota del 1 al 5</div>';

        }else{
          document.getElementById("mensajeNota3").innerHTML = '';
        }
      }
    } 
  
  if (document.querySelector('#btnRegistrar')) {
    document.querySelector('#btnRegistrar')
      .addEventListener("click", () => { registrar() })
  }
  
  if (document.querySelector('#btnActualizar')) {
    document.querySelector('#btnActualizar')
      .addEventListener("click", () => { actualizar() })
  }
