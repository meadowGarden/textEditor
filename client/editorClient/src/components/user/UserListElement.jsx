const UserListElement = ({ user }) => {
  const { id, firstName, lastName } = user;
  return (
    <>
      <div>
        {id} {firstName} {lastName}
      </div>
    </>
  );
};

export default UserListElement;
