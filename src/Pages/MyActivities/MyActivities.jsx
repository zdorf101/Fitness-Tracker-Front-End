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
} from "./MyActivitiesElements";

import Sidebar from "../../component/Sidebar/Sidebar";

function MyActivities({ logout }) {
  const { isOpen, onOpen, onClose, isLoading } = useDisclosure();

  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const alert = useAlert();

  const handleActivities = async (e) => {
    e.preventDefault();
    await fetch("https://fitnesstrac-kr.herokuapp.com/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        description: goal,
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
        <Heading>Create Activities</Heading>
        <FormWrapper onSubmit={(e) => handleActivities(e)}>
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
            <LabelTag>Description</LabelTag>
            <textarea
              onChange={(e) => {
                setError(false);
                setValidationError(false);
                setGoal(e.target.value);
              }}
              rows={4}
              value={goal}
              required
              placeholder="Goal"
              type="textarea"
            ></textarea>
          </GroupWrapper>

          <GroupWrapper3>
            <InputTag
              onChange={(e) => {
                setError(false);
                setValidationError(false);
                setIsPublic(e.target.value);
              }}
              value="Submit"
              required
              type="submit"
            />
          </GroupWrapper3>
        </FormWrapper>
      </ActivitiesWrapper>
    </div>
  );
}

export default MyActivities;
