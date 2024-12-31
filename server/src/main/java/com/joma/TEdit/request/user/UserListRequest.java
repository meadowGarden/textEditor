package com.joma.TEdit.request.user;

public class UserListRequest {
    private int pageNumber;
    private int pageSize;
    private String firstNameContains;
    private String lastNameContains;
    private String sortBy;
    private boolean sortAsc;

    public UserListRequest(int pageNumber,
                           int pageSize,
                           String firstNameContains,
                           String lastNameContains,
                           String sortBy,
                           boolean sortAsc) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.firstNameContains = firstNameContains;
        this.lastNameContains = lastNameContains;
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

    public String getFirstNameContains() {
        return firstNameContains;
    }

    public void setFirstNameContains(String firstNameContains) {
        this.firstNameContains = firstNameContains;
    }

    public String getLastNameContains() {
        return lastNameContains;
    }

    public void setLastNameContains(String lastNameContains) {
        this.lastNameContains = lastNameContains;
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
