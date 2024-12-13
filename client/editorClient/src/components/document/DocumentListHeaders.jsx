import "./DocumentListHeaders.css";

export default function DocumentListHeaders() {
  return (
    <div className="headersContainer">
      <span className="header">id</span>
      <span className="header">title</span>
      <span className="header">author id</span>
      <span className="header">date of creation</span>
      <span className="header">date of update</span>
    </div>
  );
}
