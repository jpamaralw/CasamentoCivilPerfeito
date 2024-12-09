$(document).ready(function() {
    // ... (existing code for mobile menu and scroll detection)
  
    // ScrollReveal with more customization
    ScrollReveal({
      origin: 'left',
      distance: '20%',
      duration: 1000,
      reset: true // Reset animations on page reload
    }).reveal('#cta, .dish, #testimonial_chef, .feedback');
  
    // Lightbox with improved styling and functionality
    $('.space-item img').on('click', function() {
      const imgSrc = $(this).attr('src');
      const lightbox = $('<div id="lightbox"></div>');
      const img = $('<img>').attr('src', imgSrc);
      const closeBtn = $('<button id="close-lightbox">✕</button>');
  
      lightbox.css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      });
  
      img.css({
        maxWidth: '90%',
        maxHeight: '90%',
        borderRadius: '10px'
      });
  
      closeBtn.css({
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: '#fff',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        fontSize: '18px'
      });
  
      lightbox.append(img, closeBtn);
      $('body').append(lightbox);
  
      closeBtn.on('click', () => {
        lightbox.remove();
      });
    });
  
    // Additional features:
  
    // 1. Smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    });
  
    // 2. Form validation
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      // Add your validation logic here
      // ...
      // Submit the form using AJAX or other methods
    });
    // Validação do formulário de contato
$('#contact-form').submit(function(e) {
    e.preventDefault();
    // Adicione sua lógica de validação aqui
    // ...
    // Envie os dados do formulário usando fetch ou outro método
    fetch('seu_endpoint', {
      method: 'POST',
      body: JSON.stringify({
        nome: $('#nome').val(),
        email: $('#email').val(),
        // ... outros campos
      })
    })
    .then(response => response.json())
    .then(data => {
      // Trate a resposta do servidor
    })
    .catch(error => {
      console.error('Erro ao enviar o formulário:', error);
    });
  });
  });
  