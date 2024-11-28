import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserListElement from "../components/user/UserListElement";
import BasicButton from "../components/BasicButton";
import "../styles/PageDesign.css";
import InModal from "../components/InModal";
import UserInfoCard from "../components/user/UserInfoCard";

const defaultPaginationSettings = {
  pageNumber: 1,
  pageSize: 10,
  firstNameContains: "",
  lastNameContains: "",
  sortBy: "id",
  sortAsc: true,
};

function UserListPage() {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [paginationSettings, setPaginationSettings] = useState(
    defaultPaginationSettings
  );

  const pageNumber = watch("pageNumber", defaultPaginationSettings.pageNumber);
  const pageSize = watch("pageSize", defaultPaginationSettings.pageSize);
  const firstNameContains = watch(
    "firstNameContains",
    defaultPaginationSettings.firstNameContains
  );
  const lastNameContains = watch(
    "lastNameContains",
    defaultPaginationSettings.lastNameContains
  );
  const sortBy = watch("sortBy", defaultPaginationSettings.sortBy);
  const sortAsc = watch("sortAsc", defaultPaginationSettings.sortAsc);

  useEffect(() => {
    setPaginationSettings((previousSettings) => ({
      ...previousSettings,
      pageNumber: pageNumber,
      pageSize: pageSize,
      firstNameContains: firstNameContains,
      lastNameContains: lastNameContains,
      sortBy: sortBy,
      sortAsc: sortAsc,
    }));
  }, [
    pageNumber,
    pageSize,
    firstNameContains,
    lastNameContains,
    sortBy,
    sortAsc,
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users`, {
        params: paginationSettings,
      })
      .then((response) => {
        setUsers(response.data.content);
      })
      .catch((error) => console.log(error));
  }, [paginationSettings, setUsers]);

  const usersToDisplay = users.map((user) => {
    return <UserListElement key={user.id} user={user} />;
  });

  const addUser = () => {
    axios
      .post(`http://localhost:8080/api/users`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="userControlPanel">
        <form className="formHeader">
          <section className="formHeaderElementUser">
            <input
              {...register("firstNameContains")}
              placeholder="first name contains"
            />
            <input
              {...register("lastNameContains")}
              placeholder="last name contains"
            />
          </section>
        </form>
        <BasicButton buttonLabel={"add user"} action={showModal} />
      </div>
      <div className="listOfElements">{usersToDisplay}</div>
      <div>
        <InModal
          modalVisibility={modalVisible}
          handleClosing={closeModal}
          title={"add user"}
        >
          <UserInfoCard />
        </InModal>
      </div>
    </>
  );
}

export default UserListPage;
