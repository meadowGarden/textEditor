import "./UserListHeaders.css";

export default function UserListHeaders() {
  return (
    <div className="usersHeadersContainer">
      <span className="header">id</span>
      <span className="header">username</span>
      <span className="header">first name</span>
      <span className="header">last name</span>
      <span className="header">actions</span>
    </div>
  );
}
