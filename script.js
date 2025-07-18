document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;

  fetch("https://script.google.com/macros/s/AKfycbzH443JGf1z0ggiUNAOX00HDVYpx3Z10REVZ-N14nlEDLG5kuo8CX9cVex7osboi-KK/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `email=${encodeURIComponent(email)}`,
  });

  document.getElementById("message").innerText = "تم إرسال البريد بنجاح!";
  document.getElementById("emailForm").reset();
});
