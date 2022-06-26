import { Header, Title, BtnBack } from "./HomeStyle";
import { Link } from "react-router-dom";
import { useState } from "react";
import Api from "../../Services/Api";
import UserSalutation from "../../Components/UserSalutation/UserSalutation";
import Skills from "../../Components/Skills/Skills";
import AddSkill from "../../Components/AddSkill/AddSkill";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditSkill from "../../Components/EditSkill/EditSkill";

export default function Home({ authenticated, setAuthenticated }) {
  const [Modal, setModal] = useState(false);
  const [skillEdit, setskillEdit] = useState(false);
  const [skill, setSkill] = useState({});

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [skills, setSkills] = useState([]);

  const headers = {
    "Content-type": "application/JSON",
    Authorization: `Bearer ${token}`,
  };

  async function loadSkills() {
    await Api.get(`users/${user.id}`).then((response) => {
      setSkills(response.data.techs);
    });
  }

  useEffect(() => {
    Api.get(`users/${user.id}`).then((response) => {
      setSkills(response.data.techs);
    });
  }, [Modal, skillEdit]);

  const toastStyle = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 1,
  };

  async function addSkill(data) {
    await Api.post(`users/techs`, data, { headers: headers })
      .then(() => toast.success("Tecnologia adicionada!", toastStyle))
      .catch(() =>
        toast.error("Verifique os campos, nome repetido ou vazio!", toastStyle)
      );
    Api.get(`users/${user.id}`).then((response) => {
      setSkills(response.data.techs);
    });
  }

  async function updateSkill(tech_id, data) {
    await Api.put(`/users/techs/${tech_id}`, data, { headers: headers })
      .then(() => toast.success("Tecnologia alterada!", toastStyle))
      .catch(() =>
        toast.error("Verifique os campos, nome repetido ou vazio!", toastStyle)
      );
    await Api.get(`users/${user.id}`).then((response) => {
      setSkills(response.data.techs);
    });
  }

  async function deleteSkill(tech_id) {
    await Api.delete(`/users/techs/${tech_id}`, { headers: headers })
      .then((response) => toast.success("Tecnologia excluida!", toastStyle))
      .catch(() =>
        toast.error("Verifique os campos, nome repetido ou vazio!", toastStyle)
      );
    await Api.get(`users/${user.id}`).then((response) => {
      setSkills(response.data.techs);
    });
  }

  return (
    <>
      {Modal && (
        <AddSkill
          addSkill={addSkill}
          setModal={setModal}
          loadSkills={loadSkills}
        />
      )}
      {skillEdit && (
        <EditSkill
          skillEdit={skillEdit}
          setskillEdit={setskillEdit}
          updateSkill={updateSkill}
          deleteSkill={deleteSkill}
          skill={skill}
          setSkill={setSkill}
        />
      )}
      <Header>
        <Title>Kenzie Hub</Title>
        <Link to={"/"}>
          <BtnBack
            onClick={() => {
              localStorage.removeItem("@KenzieHub:token");
              localStorage.removeItem("user");
            }}
          >
            Voltar
          </BtnBack>
        </Link>
      </Header>
      <UserSalutation />
      <Skills
        skills={skills}
        setModal={setModal}
        setskillEdit={setskillEdit}
        skill={skill}
        setSkill={setSkill}
      />
      <ToastContainer />
    </>
  );
}

/*
[{…}, {…}]0: created_at: "2022-06-24T17:09:42.686Z"id: "43534579-6804-47bb-b091-52ad739820ee"status: "Iniciante"title: "React"updated_at: "2022-06-24T17:09:42.686Z"[[Prototype]]: Object1: created_at: "2022-06-24T17:09:42.690Z"id: "eec86813-06bb-4126-a478-09ade31edefb"status: "Iniciante"title: "React"updated_at: "2022-06-24T17:09:42.690Z"[[Prototype]]: Objectlength: 2[[Prototype]]: Array(0)
Home.js:42 {data: '', status: 204, statusText: 'No Content', headers: {…}, config: {…}, …}config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}data: ""headers: {content-length: '0'}request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}status: 204statusText: "No Content"[[Prototype]]: Object
Home.js:51 (2) [{…}, {…}]0: created_at: "2022-06-24T17:09:42.686Z"id: "43534579-6804-47bb-b091-52ad739820ee"status: "Iniciante"title: "React"updated_at: "2022-06-24T17:09:42.686Z"[[Prototype]]: Object1: created_at: "2022-06-24T17:09:42.690Z"id: "eec86813-06bb-4126-a478-09ade31edefb"status: "Iniciante"title: "React"updated_at: "2022-06-24T17:09:42.690Z"[[Prototype]]: Objectlength: 2[[Prototype]]: Array(0)
Home.js:42 AxiosError {message: 'Request failed with status code 404', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}code: "ERR_BAD_REQUEST"config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}message: "Request failed with status code 404"name: "AxiosError"request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}onabort: ƒ handleAbort()onerror: ƒ handleError()onload: nullonloadend: ƒ onloadend()onloadstart: nullonprogress: nullonreadystatechange: nullontimeout: ƒ handleTimeout()readyState: 4response: "{\"status\":\"error\",\"message\":\"Not found tech with this id\"}"responseText: "{\"status\":\"error\",\"message\":\"Not found tech with this id\"}"responseType: ""responseURL: "https://kenziehub.herokuapp.com/users/techs/43534579-6804-47bb-b091-52ad739820ee"responseXML: nullstatus: 404statusText: "Not Found"timeout: 0upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}withCredentials: false[[Prototype]]: XMLHttpRequestresponse: config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}data: {status: 'error', message: 'Not found tech with this id'}headers: {content-length: '58', content-type: 'application/json; charset=utf-8'}request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}status: 404statusText: "Not Found"[[Prototype]]: Object[[Prototype]]: Error
Home.js:51 [{…}]0: created_at: "2022-06-24T17:09:42.690Z"id: "eec86813-06bb-4126-a478-09ade31edefb"status: "Iniciante"title: "React"updated_at: "2022-06-24T17:09:42.690Z"[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)
Home.js:42 AxiosError {message: 'Request failed with status code 404', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}code: "ERR_BAD_REQUEST"config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}message: "Request failed with status code 404"name: "AxiosError"request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}response: config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}data: {status: 'error', message: 'Not found tech with this id'}headers: {content-length: '58', content-type: 'application/json; charset=utf-8'}request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}status: 404statusText: "Not Found"[[Prototype]]: Object[[Prototype]]: Error
Home.js:51 [{…}]0: created_at: "2022-06-24T17:09:42.690Z"id: "eec86813-06bb-4126-a478-09ade31edefb"status: "Iniciante"title: "React"updated_at: "2022-06-24T17:09:42.690Z"[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)
Home.js:35 {data: {…}, status: 201, statusText: 'Created', headers: {…}, config: {…}, …}
Home.js:51 [{…}]0: created_at: "2022-06-24T17:09:42.690Z"id: "eec86813-06bb-4126-a478-09ade31edefb"status: "Iniciante"title: "React"updated_at: "2022-06-24T17:09:42.690Z"[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)
Home.js:35 
*/
