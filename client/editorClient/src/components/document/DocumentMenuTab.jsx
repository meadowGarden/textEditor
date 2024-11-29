import TextSizePanel from "./TextSizePanel";

function DocumentMenuTab({ handleSave, handleDelete, handleReturn }) {
  return (
    <>
      <div className="menuButtonsContainer">
        <button onClick={() => handleSave()}>save document</button>
        <button onClick={() => handleDelete()}>delete document</button>
        <button onClick={() => handleReturn()}>return to list</button>
        <TextSizePanel />
      </div>
    </>
  );
}

export default DocumentMenuTab;
