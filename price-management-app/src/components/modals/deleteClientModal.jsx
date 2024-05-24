import "./deleteClientModal.css";
import { useState, useEffect } from "react";

export default function DeleteModal({ isOpen, setOpenModal, handleDeleteClient, cl }) {

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
                      <button className="modal-button cancel" onClick={() => setOpenModal(false)}>CANCELAR</button>
                      <button className="modal-button delete" onClick={() => {handleDeleteClient(cl.id); setOpenModal(false)}}>EXCLUIR</button>
                  </div>
              </div>
          </div>
      );
  }

  return null;
}