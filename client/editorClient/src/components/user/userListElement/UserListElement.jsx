import ListButton from "../../ui/listButton/ListButton";
import "./UserListElement.css";

const UserListElement = ({ user, deleteUser }) => {
  const { id, username, firstName, lastName } = user;
  return (
    <>
      <div className="userListElement">
        <span>{id}</span>
        <span>{username}</span>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <ListButton label={"delete"} onClick={() => deleteUser(id)} />
      </div>
    </>
  );
};

export default UserListElement;
