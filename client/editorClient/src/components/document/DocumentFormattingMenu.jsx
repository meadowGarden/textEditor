import FormatMenuElement from "../ui/formatMenuElement/FormatMenuElement";
import DocumentFormatCard from "./DocumentFormattingCard";
import "./DocumentFormattingMenu.css";

export default function DocumentFormattingMenu() {
  return (
    <div className="menuContainer">
      <FormatMenuElement>
        <DocumentFormatCard />
      </FormatMenuElement>
      <FormatMenuElement>format menu element</FormatMenuElement>
      <FormatMenuElement>format menu element</FormatMenuElement>
      <FormatMenuElement>format menu element</FormatMenuElement>
      <FormatMenuElement>format menu element</FormatMenuElement>
      <FormatMenuElement>format menu element</FormatMenuElement>
      <FormatMenuElement>format menu element</FormatMenuElement>
      <FormatMenuElement>format menu element</FormatMenuElement>
    </div>
  );
}
