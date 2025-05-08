document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("p7x1hfXPNBIR_QHoE");
    
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let form = this;
    
        emailjs.sendForm('service_fi9gcq8', 'template_4dkokqg', this)
        .then(function() {
            alert('✅ Mensaje enviado correctamente.');
            form.reset();
        }, function(error) {
            alert('❌ Error al enviar: ' + JSON.stringify(error));
        });
    });
  });