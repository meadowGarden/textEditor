import BasicButton from "../ui/basicButton/BasicButton";
import "./DocumentMenuTab.css";

function DocumentMenuTab({ handleSave, handleDelete, handleReturn }) {
  return (
    <div className="menuTabContainer">
      <BasicButton onClick={handleSave} label={"save document"} />
      <BasicButton onClick={handleDelete} label={"delete document"} />
      <BasicButton onClick={handleReturn} label={"return to list"} />
    </div>
  );
}

export default DocumentMenuTab;
