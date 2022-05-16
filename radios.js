var botao = (document.getElementById("btnSubmit").onclick = function () {
  var radios = document.getElementsByName("cor-camiseta");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      alert("Escolheu a camiseta de cor: " + radios[i].value);
    }
  }
});
