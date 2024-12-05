import { useState } from "react";
import InputModal from "../../ui/inputModal/InputModal";
import ListButton from "../../ui/listButton/ListButton";
import EditUserCard from "../editUserCard/EditUserCard";
import "./UserListElement.css";

const UserListElement = ({ user, deleteUser }) => {
  const { id, username, firstName, lastName } = user;
  const [editUserModalVisible, setEditAddUserModalVisible] = useState(false);

  const showEditUserModal = () => {
    setEditAddUserModalVisible(true);
  };

  const closeEditUserModal = () => {
    setEditAddUserModalVisible(false);
  };

  return (
    <>
      <div className="userListElement">
        <span>{id}</span>
        <span>{username}</span>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <ListButton label={"delete"} onClick={() => deleteUser(id)} />
        <ListButton label={"edit"} onClick={showEditUserModal} />
      </div>

      <InputModal
        isVisible={editUserModalVisible}
        close={closeEditUserModal}
        title={"edit user"}
      >
        <EditUserCard
          userID={id}
          close={closeEditUserModal}
        />
      </InputModal>
    </>
  );
};

export default UserListElement;
