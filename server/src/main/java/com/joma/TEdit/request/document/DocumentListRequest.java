package com.joma.TEdit.request.document;

public class DocumentListRequest {

    private int pageNumber;
    private int pageSize;
    private String titleContains;
    private String sortBy;
    private boolean sortAsc;

    public DocumentListRequest(
            int pageNumber,
            int pageSize,
            String titleContains,
            String sortBy,
            boolean sortAsc
    ) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.titleContains = titleContains;
        this.sortBy = sortBy;
        this.sortAsc = sortAsc;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public String getTitleContains() {
        return titleContains;
    }

    public void setTitleContains(String titleContains) {
        this.titleContains = titleContains;
    }

    public String getSortBy() {
        return sortBy;
    }

    public void setSortBy(String sortBy) {
        this.sortBy = sortBy;
    }

    public boolean isSortAsc() {
        return sortAsc;
    }

    public void setSortAsc(boolean sortAsc) {
        this.sortAsc = sortAsc;
    }
}
