const EditButton = ({ action, title }) => {
  return <button onClick={() => action()}>{title}</button>;
};

export default EditButton;
