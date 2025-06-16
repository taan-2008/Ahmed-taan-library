// إضافة صور جديدة للمعرض من جهاز المستخدم
const addImagesBtn = document.getElementById('addImagesBtn');
const imageInput = document.getElementById('imageInput');
const gallery = document.getElementById('gallery');

addImagesBtn.onclick = () => imageInput.click();

imageInput.onchange = (e) => {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = evt => {
      const img = document.createElement('img');
      img.src = evt.target.result;
      img.alt = "صورة جديدة";
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
  imageInput.value = '';
};

// توليد وعرض كود QR لرابط الموقع
const showQRBtn = document.getElementById('showQRBtn');
const qrContainer = document.getElementById('qrContainer');
const qrCodeCanvas = document.getElementById('qrCode');

showQRBtn.onclick = () => {
  qrContainer.style.display = 'block';
  const url = window.location.href;
  const qr = new QRious({
    element: qrCodeCanvas,
    value: url,
    size: 200,
    level: 'H'
  });
};