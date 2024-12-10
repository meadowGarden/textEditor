import "./DocumentTitleField.css";

export default function DocumentTitleField({ onClick, title }) {
  return (
    <div className="documentTitleField" onClick={onClick}>
      {title}
    </div>
  );
}
