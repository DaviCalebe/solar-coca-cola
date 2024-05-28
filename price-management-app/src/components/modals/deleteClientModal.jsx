import "./deleteClientModal.css";

export default function DeleteModal({ isOpen, setOpenDeleteModal, handleDeleteClient, client }) {
  if (isOpen) {
    return (
      <div className="modal">
        <div className="overlay"></div>
        <div className="crud-modal-delete">
          <div className="delete-modal-title">
            <h2>Confirmar Exclusão?</h2>
          </div>
          <p>Você realmente deseja excluir este Cliente? Esta ação não poderá ser desfeita.</p>
          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={() => {setOpenDeleteModal(false)}}>CANCELAR</button>
            <button
              className="modal-button delete"
              onClick={() => {
                handleDeleteClient(client.id);
                setOpenDeleteModal(false);
              }}
            >
              EXCLUIR
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}