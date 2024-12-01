import "../../styles/ComponentDesign.css";

const UserListElement = ({ user }) => {
  const { id, username, firstName, lastName } = user;
  return (
    <>
      <div className="listElementUser">
        <span>{id}</span>
        <span>{username}</span>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
    </>
  );
};

export default UserListElement;
