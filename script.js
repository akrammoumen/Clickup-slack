document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;

  // استبدل هذا الرابط برابط Google Apps Script الخاص بك
  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `email=${encodeURIComponent(email)}`
  });

  document.getElementById("message").innerText = "تم إرسال البريد بنجاح!";
  document.getElementById("emailForm").reset();

  // إظهار نموذج الحجز بعد الإرسال
  document.getElementById("bookingStep").style.display = "block";
});
