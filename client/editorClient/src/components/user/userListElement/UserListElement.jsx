import InputModal from "../../ui/inputModal/InputModal";
import ListButton from "../../ui/listButton/ListButton";
import EditUserCard from "../editUserCard/EditUserCard";
import "./UserListElement.css";

const UserListElement = ({
  user,
  onDeleteUserClick,
  onUpdateUserClick,
  isEditModalVisible,
  setIsEditModalVisible,
}) => {
  const { id, username, firstName, lastName } = user;

  const handleShowModalClick = () => {
    setIsEditModalVisible(true);
  };

  const handleClosingEditUserModal = () => {
    setIsEditModalVisible(false);
  };

  return (
    <>
      <div className="userListElement">
        <span>{id}</span>
        <span>{username}</span>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <ListButton
          label={"delete"}
          onClick={() => onDeleteUserClick(user.id)}
        />
        <ListButton label={"edit"} onClick={handleShowModalClick} />
      </div>

      <InputModal isVisible={isEditModalVisible} title={"edit user"}>
        <EditUserCard
          user={user}
          onUpdateUserClick={onUpdateUserClick}
          onCancelClick={handleClosingEditUserModal}
        />
      </InputModal>
    </>
  );
};

export default UserListElement;
