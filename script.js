function addRecommendation() {
  const input = document.getElementById("new-recommendation");
  const text = input.value.trim();
  if (text) {
    const list = document.getElementById("recommendation-list");
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    alert("Thank you! Your recommendation has been added.");
    input.value = "";
  } else {
    alert("Please write something before submitting.");
  }
}
