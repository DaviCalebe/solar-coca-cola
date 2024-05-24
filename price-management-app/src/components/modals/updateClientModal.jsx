import { useState, useEffect } from "react";
import AddModal from "./addClientModal";

export default function UpdateModal({ isOpen, setOpenUpdateModal, handleUpdateClient, selectedClient }) {
  const [name, setName] = useState(selectedClient ? selectedClient.name : '');
  const [region, setRegion] = useState(selectedClient ? selectedClient.region.id.toString() : '');
  const [level, setLevel] = useState(selectedClient ? selectedClient.level.id.toString() : '');
  const [cnpj, setCnpj] = useState(selectedClient ? selectedClient.cnpj : '');
  const [email, setEmail] = useState(selectedClient ? selectedClient.email : '');
  const [phone_number, setPhone_number] = useState(selectedClient ? selectedClient.phone_number : '');

  useEffect(() => {
    if (selectedClient) {
      setName(selectedClient.name);
      setRegion(selectedClient.region.id.toString());
      setLevel(selectedClient.level.id.toString());
      setCnpj(selectedClient.cnpj);
      setEmail(selectedClient.email);
      setPhone_number(selectedClient.phone_number);
    }
  }, [selectedClient]);

    return (
      <AddModal
        isOpen={isOpen}
        setOpenAddModal={setOpenUpdateModal}
        handleAddClient={handleUpdateClient}
        selectedClient={selectedClient}
      />
    );
  }