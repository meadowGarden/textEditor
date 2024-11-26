import "../../styles/ComponentDesign.css";

const UserListElement = ({ user }) => {
  const { id, firstName, lastName } = user;
  return (
    <>
      <div className="listElementUser">
        <span>{id}</span>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
    </>
  );
};

export default UserListElement;
