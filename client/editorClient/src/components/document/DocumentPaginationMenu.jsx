import { useState } from "react";
import "./DocumentPaginationMenu.css";
import "../../styles/inputFieldDesign.css";

export default function DocumentPaginationMenu({
  settings,
  setSettings,
  paginationData,
}) {
  const pages = [];
  let i;
  for (i = 1; i <= paginationData.totalPages; i++) {
    pages[i - 1] = i;
  }

  const pageSelection = pages.map((pageNumber) => {
    return (
      <option key={pageNumber} value={pageNumber}>
        {pageNumber}
      </option>
    );
  });

  const handleElementCountChange = (e) => {
    setSettings((prev) => ({
      ...prev,
      pageSize: Number(e.target.value),
      pageNumber: 1,
    }));
  };

  const handlePageChange = (e) => {
    setSettings((prev) => ({ ...prev, pageNumber: Number(e.target.value) }));
  };

  const handleSearchBarChange = (e) => {
    setSettings((prev) => ({ ...prev, titleContains: e.target.value }));
  };

  return (
    <div className="documentSettingsContainer">
      <form className="menuPanel">
        <section>
          <input
            onChange={handleSearchBarChange}
            placeholder="seach by title"
            className="basicInputField"
          />
        </section>

        <section>
          <label>quantity</label>
          <select value={settings.pageSize} onChange={handleElementCountChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </section>

        <section>
          <label>page</label>
          <select
            id="documentsPageNumber"
            value={settings.pageNumber}
            onChange={handlePageChange}
          >
            {pageSelection}
          </select>
        </section>
      </form>
    </div>
  );
}
