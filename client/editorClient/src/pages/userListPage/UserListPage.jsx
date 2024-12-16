import { useEffect, useState } from "react";
import axios from "axios";
import DataLoadingSign from "../../components/ui/dataLoadingSign/DataLoadingSign";
import UserListElement from "../../components/user/userListElement/UserListElement";
import "../../styles/pageDesign.css";
import UserListHeaders from "../../components/user/userListHeaders/UserListHeaders";

const defaultPaginatioSettings = {
  pageNumber: 1,
  pageSize: 15,
  firstNameContains: "",
  lastNameContains: "",
  sortBy: "id",
  sortAsc: true,
};

export default function UserListPage() {
  const [users, setUsers] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [paginationSettings, setPaginationSettings] = useState(
    defaultPaginatioSettings
  );
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users`, {
        params: paginationSettings,
      })
      .then((response) => {
        setUsers(response.data.content);
        setIsDataLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isDataLoading) {
    return <DataLoadingSign />;
  }

  const handleUserUpdate = (id, updatedUser) => {
    axios
      .put(`http://localhost:8080/api/users/${id}`, updatedUser)
      .then(() => {
        const updatedUserList = users.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        );

        setUsers(updatedUserList);
        setIsEditModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const handleUserDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/users/${id}`)
      .then((response) => {
        console.log(response);
        const listAfterDeletion = users.filter(
          (userInList) => userInList.id !== id
        );
        setUsers(listAfterDeletion);
      })
      .catch((error) => console.log(error));
  };

  const usersToDisplay = users.map((user) => {
    return (
      <UserListElement
        key={user.id}
        user={user}
        onDeleteUserClick={handleUserDelete}
        onUpdateUserClick={handleUserUpdate}
        isEditModalVisible={isEditModalVisible}
        setIsEditModalVisible={setIsEditModalVisible}
      />
    );
  });

  return (
    <div className="basicPageContainer">
      <UserListHeaders />
      {usersToDisplay}
    </div>
  );
}
