    function mostrarCadastro(){
     document.getElementById("loginForm").style.display="none";
     document.getElementById("cadastroForm").style.display="block";
     document.getElementById("formTitle").innerText="Cadastro";
   }
   function mostrarLogin(){
     document.getElementById("loginForm").style.display="block";
     document.getElementById("cadastroForm").style.display="none";
     document.getElementById("formTitle").innerText="Login";
   }
   function cadastrar(){
     let nome = document.getElementById('nomeCadastro').value;
     let email = document.getElementById('emailCadastro').value;
     let senha = document.getElementById('senhaCadastro').value;
     let tipo = document.getElementById('tipoUsuario').value;
     let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
     if(usuarios.find(u => u.email === email)){
       alert("Este email já está cadastrado!");
       return;
     }
     usuarios.push({nome,email,senha,tipo});
     localStorage.setItem('usuarios', JSON.stringify(usuarios));
     alert("Cadastro realizado! Agora faça login.");
     mostrarLogin();
   }
   function login(){
     let email = document.getElementById('emailLogin').value;
     let senha = document.getElementById('senhaLogin').value;
     let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
     let user = usuarios.find(u => u.email===email && u.senha===senha);
     if(user){
       localStorage.setItem('usuarioLogado', JSON.stringify(user));
       window.location.href = "Index.html"; // redireciona
     } else {
       alert("Usuário ou senha inválidos");
     }
   }
 function handleCredentialResponse(response) {
   console.log("Credencial do Google:", response.credential);
   const user = parseJwt(response.credential);
   console.log(user);
   localStorage.setItem('usuarioLogado', JSON.stringify(user));
   // Redirecionar após login
   window.location.href = "Index.html";
 }
 function parseJwt(token) {
   const base64Url = token.split('.')[1];
   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));
   return JSON.parse(jsonPayload);
 }