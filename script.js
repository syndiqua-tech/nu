<script>
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "Tservice_nub98ka",
    "template_rmftl2v",
    this
  ).then(function() {
    alert("Message envoyé !");
  }, function(error) {
    alert("Erreur: " + JSON.stringify(error));
  });
});
</script>