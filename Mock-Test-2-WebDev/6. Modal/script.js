const openModalBtn = document.getElementById("openModalBtn");
const modalContainer = document.getElementById("modalContainer");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open modal on button click
openModalBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
  document.body.style.overflow = "hidden";
});

// Close modal on close button click
closeModalBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal on clicking outside the modal
window.addEventListener("click", function (event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
