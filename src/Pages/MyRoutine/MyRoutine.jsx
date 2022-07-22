import React, { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import { useDisclosure, BeatLoader } from "@chakra-ui/react";
import { useAlert } from "react-alert";

import {
  ActivitiesWrapper,
  FormWrapper,
  Heading,
  GroupWrapper,
  LabelTag,
  InputTag,
  GroupWrapper2,
  GroupWrapper3,
} from "./MyRoutineElements";

import Sidebar from "../../component/Sidebar/Sidebar";
import { useEffect } from "react";

function MyRoutine({ logout }) {
  const { isOpen, onOpen, onClose, isLoading } = useDisclosure();

  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updateItem, setUpdateItem] = useState([]);

  const alert = useAlert();

  const handleRoutine = async (e) => {
    e.preventDefault();

    if (edit) {
      await fetch(
        `https://fitnesstrac-kr.herokuapp.com/api/routines/${window.localStorage.getItem(
          "id"
        )}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic,
          }),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            alert.show(result.error, {
              type: "error",
            });
          } else {
            window.localStorage.setItem("edit", false);
            alert.show("Routine edited successfully!", {
              type: "success",
            });
          }
        })
        .catch((err) => console.error);

      return;
    }
    await fetch("https://fitnesstrac-kr.herokuapp.com/api/routines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          alert.show(result.error, {
            type: "error",
          });
        } else {
          alert.show("Routine added successfully!", {
            type: "success",
          });
          setGoal("");
          setIsPublic(false);
          setName("");
        }
      })
      .catch((err) => console.error);
  };

  useEffect(() => {
    const item = window.localStorage.getItem("edit");
    if (item) {
      setEdit(true);
      setName(window.localStorage.getItem("name"));
      setGoal(window.localStorage.getItem("goal"));
    } else {
      setEdit(false);
    }
  }, []);

  console.log(updateItem);

  return (
    <div>
      <Navbar onOpen={onOpen} />
      <Sidebar
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        logout={logout}
      />
      <ActivitiesWrapper>
        <Heading>Create Routine</Heading>
        <FormWrapper onSubmit={(e) => handleRoutine(e)}>
          <GroupWrapper>
            <LabelTag>Name</LabelTag>
            <InputTag
              onChange={(e) => {
                setError(false);
                setValidationError(false);
                setName(e.target.value);
              }}
              value={name}
              required
              placeholder="Name"
              type="text"
            />
          </GroupWrapper>
          <GroupWrapper>
            <LabelTag>Goal</LabelTag>
            <InputTag
              onChange={(e) => {
                setError(false);
                setValidationError(false);
                setGoal(e.target.value);
              }}
              value={goal}
              required
              placeholder="Goal"
              type="text"
            />
          </GroupWrapper>

          <GroupWrapper2>
            <LabelTag>Is public?</LabelTag>
            <InputTag
              onChange={(e) => {
                setError(false);
                setValidationError(false);
                setIsPublic(!isPublic);
              }}
              value={isPublic}
              placeholder="Name"
              type="checkbox"
            />
          </GroupWrapper2>
          <GroupWrapper3>
            <InputTag
              onChange={(e) => {
                setError(false);
                setValidationError(false);
                setIsPublic(e.target.value);
              }}
              value="Submit"
              type="submit"
            />
          </GroupWrapper3>
        </FormWrapper>
      </ActivitiesWrapper>
    </div>
  );
}

export default MyRoutine;
