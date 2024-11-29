const TextSizePanel = () => {
  return (
    <>
      <section>
        <label htmlFor="size-select">text size</label>
        <select id="size-select" defaultValue={18}>
          <option id="size-10">10</option>
          <option id="size-12">12</option>
          <option id="size-14">14</option>
          <option id="size-16">16</option>
          <option id="size-18">18</option>
          <option id="size-20">20</option>
        </select>
      </section>
    </>
  );
};

export default TextSizePanel;
