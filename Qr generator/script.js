let qr;

function generateQR() {
  const text = document.getElementById("qrText").value.trim();
  const color = document.getElementById("qrColor").value;
  const qrContainer = document.getElementById("qrcode");
  const error = document.getElementById("error");
  const downloadBtn = document.getElementById("downloadBtn");

  qrContainer.innerHTML = "";
  error.textContent = "";
  downloadBtn.disabled = true;

  // ❌ Error handling
  if (text === "") {
    error.textContent = "Please enter text or URL";
    return;
  }

  // ✅ Generate QR
  qr = new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: color,
    colorLight: "#ffffff"
  });

  // Enable download
  setTimeout(() => {
    downloadBtn.disabled = false;
  }, 300);
}

// ⬇ Download QR
function downloadQR() {
  const img = document.querySelector("#qrcode img");
  if (!img) return;

  const link = document.createElement("a");
  link.href = img.src;
  link.download = "qr-code.png";
  link.click();
}
