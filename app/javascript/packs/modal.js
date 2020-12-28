const modal = document.getElementById('delete-modal');
const deleteButtons = document.getElementsByClassName('delete-button');
const modalCloser = document.getElementById('modal-closer');
const modalCloseButton = document.getElementById('modal-close-button');
const modalDeleteButton = document.getElementById('modal-delete-button');
let deletingBookId = null;

const openModal = () => {
  modal.classList.add('modal-visible');
};

const closeModal = () => {
  deletingBookId = null;
  modal.classList.remove('modal-visible');
};

const deleteBook = (id) => {
  window.open(`/books/${id}/destroy`, '_self');
};

for (const button of deleteButtons) {
  button.addEventListener('click', e => {
    e.preventDefault();
    deletingBookId = button.getAttribute('data-book-id');
    openModal();
  });
}

modalCloser.addEventListener('click', e => {
  e.preventDefault();
  closeModal();
});

modalCloseButton.addEventListener('click', e => {
  e.preventDefault();
  closeModal();
});

modalDeleteButton.addEventListener('click', e => {
  e.preventDefault();
  deleteBook(deletingBookId);
});