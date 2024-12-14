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
  firstNameContains: "",
  sortBy: "id",
  sortAsc: true,
};

export default function UserListPage() {
  const [users, setUsers] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [paginationSettings, setPaginationSettings] = useState(
    defaultPaginatioSettings
  );

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

  const handleUserDelete = (userID) => {
    axios
      .delete(`http://localhost:8080/api/users/${userID}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const usersToDisplay = users.map((user) => {
    return <UserListElement key={user.id} user={user} />;
  });

  return (
    <div className="basicPageContainer">
      <UserListHeaders />
      {usersToDisplay}
    </div>
  );
}
