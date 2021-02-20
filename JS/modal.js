// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}

const clients = {
  name: "",
  phoneNumber: "",
  email: "",
  comment: "",
};

// const refs = {
//   openModalBtn: document.querySelector("[data-modal-open]"),
//   closeModalBtn: document.querySelector("[data-modal-close]"),
//   modal: document.querySelector("[data-modal]"),
//   backdrop: document.querySelector("[data-backdrop]"),
// };
// console.log(refs.openModalBtn);

// const openModal = () => {
//   window.addEventListener("keydown", pressOnEsc);
//   refs.modal.classList.add("is-open");
// };
// const closeModal = () => {
//   window.removeEventListener("keydown", pressOnEsc);
//   refs.modal.classList.remove("is-open");
// };
// const clickOnBackdrop = (e) => {
//   if (e.target === e.currentTarget) {
//     closeModal();
//   }
// };
// const pressOnEsc = (e) => {
//   if (e.code === "Escape") {
//     closeModal();
//   }
// };

// refs.openModalBtn.addEventListener("click", openModal);
// refs.closeModalBtn.addEventListener("click", closeModal);
// refs.backdrop.addEventListener("click", clickOnBackdrop);
