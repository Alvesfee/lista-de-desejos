// Botão Confirmar
document.getElementById("confirmar").addEventListener("click", () => {
  const nome = document.getElementById("nome").value.trim();
  if (!nome) {
    alert("Por favor, digite seu nome!");
    return;
  }

  const selecionados = [...document.querySelectorAll("input[type=checkbox]:checked")];
  if (selecionados.length === 0) {
    alert("Selecione pelo menos 1 item!");
    return;
  }

  selecionados.forEach(item => {
    set(ref(db, "reservas/" + item.value), nome);
  });

  alert("Reserva confirmada! ✔️ Obrigado, " + nome);

  // 🔹 Limpa o campo nome
  document.getElementById("nome").value = "";

  // 🔹 Desmarca os checkboxes já confirmados
  selecionados.forEach(item => item.checked = false);

  // 🔹 (Opcional) Força atualização visual sem recarregar a página
  onValue(ref(db, "reservas"), () => {});
});
