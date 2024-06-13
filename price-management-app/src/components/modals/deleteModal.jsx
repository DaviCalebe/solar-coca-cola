import "./deleteModal.css";

export default function DeleteModal({ isOpen, setOpenDeleteModal, handleDeleteClient, handleDeleteProduct, handleDeletePromotion, handleDeleteClientProduct, mode, clientOrPromotionOrProduct }) {
  if (isOpen) {
    return (
      <div className="modal">
        <div className="overlay"></div>
        <div className="crud-modal-delete">
          <div className="delete-modal-title">
            <h2>Confirmar Exclusão?</h2>
          </div>
          <p>
            Você realmente deseja excluir {mode === 'client' ? 'este Cliente' : mode === 'promotion' ? 'esta Promoção' : 'este Produto'}? Esta ação não poderá ser desfeita.
          </p>
          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={() => {setOpenDeleteModal(false)}}>CANCELAR</button>
            <button
              className="modal-button delete"
              onClick={() => {
                if (mode === 'client') {
                  handleDeleteClient(clientOrPromotionOrProduct.client.id);
                } else if (mode === 'promotion') {
                  handleDeletePromotion(clientOrPromotionOrProduct.promotion.id);
                } else if (mode === 'product') {
                  handleDeleteProduct(clientOrPromotionOrProduct.product.id);
                } else if (mode === 'clientStorage') {
                  handleDeleteClientProduct(clientOrPromotionOrProduct.client.id, clientOrPromotionOrProduct.product.produto.id);
                }
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