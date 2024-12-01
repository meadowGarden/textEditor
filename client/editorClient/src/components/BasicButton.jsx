function BasicButton({ buttonLabel, action }) {
  return (
    <button onClick={action} className="basicButton">
      {buttonLabel}
    </button>
  );
}

export default BasicButton;
