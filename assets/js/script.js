function openclose() {
  var link = document.getElementById("linkmobile");
  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
}

function valida_campus(){
  let nome = document.getElementById("inputName").value;
  var email = document.getElementById("inputEmail").value;
  var assunto = document.getElementById("inputAssunto").value;
  var tel = document.getElementById("inputTel").value;
  var msg = document.getElementById("inputMsg").value;

  if(nome == ""){
  Swal.fire(
    'Atenção',
    'O campo "nome" não pode estar vazio...',
    'error'
  )
  meu_form.nome.focus();
  return false;
  }

  if(email == ""){
    Swal.fire(
      'Atenção',
      'O campo e-mail não pode estar vazio...',
      'error'
    )
    meu_form.email.focus();
    return false;
  }
  if(assunto==""){
    Swal.fire(
      'Atenção',
      'O campo "assunto" não pode estar vazio...',
      'error'
    )
    meu_form.empresa.focus();
    return false;
  }
  if(tel==""){
    Swal.fire(
      'Atenção',
      'O campo "Telefone" não pode estar vazio...',
      'error'
    )
    meu_form.tel.focus();
    return false;
  }
  if(msg==""){
    Swal.fire(
      'Atenção',
      'Digite sua mensagem...',
      'error'
    )
    meu_form.msg.focus();
    return false;
  }
}

$(document).ready(function() {
  $('#Carousel').carousel({
      interval: 3000
  })
});

    
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 500);

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


