import { useState } from "react";
import "./DocumentPaginationMenu.css";

export default function DocumentPaginationMenu({
  settings,
  setSettings,
  paginationData,
}) {
  const [pageCount, setPageCount] = useState(paginationData.totalPages);
  const [currentPage, setCurrentPage] = useState(paginationData.number + 1);

  const pages = [];
  let i;
  for (i = 1; i <= pageCount; i++) {
    pages[i - 1] = i;
  }

  const pageSelection = pages.map((pageNumber) => {
    return <option key={pageNumber}>{pageNumber}</option>;
  });

  return (
    <div className="documentSettingsContainer">
      <form>
        <section>
          <input placeholder="seach by title" />
        </section>

        <section>
          <select>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </section>

        <section>
          <select>{pageSelection}</select>
        </section>
      </form>
    </div>
  );
}
