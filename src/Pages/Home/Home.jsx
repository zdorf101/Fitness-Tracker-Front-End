import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useDisclosure, BeatLoader } from "@chakra-ui/react";
import {
  RoutinesWrapper,
  Routines,
  Heading,
  RoutineCard,
  HomeItems,
  Activities,
  Title,
  ItemContent,
  ActivitiesWrapper,
  Activity,
  Actions,
  Action,
} from "./HomeElements";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

function Home({ logout }) {
  const [clicked, setClicked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const username = window.localStorage.getItem("username");
  const alert = useAlert();

  const [routines, setRoutines] = useState([]);
  const [activity, setActivity] = useState([]);
  const getRoutinesActivities = async (usernames) => {
    await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/users/${usernames}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setRoutines(result);
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    getRoutinesActivities(username);
  }, []);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          alert.show(result.error, {
            type: "error",
          });
        } else {
          alert.show("Deleted successfully", {
            type: "success",
          });
        }
      })
      .catch((err) => console.error);
  };

  const handleEdit = (item) => {
    setClicked(true);
    console.log(item);
    window.localStorage.setItem("name", item.name);
    window.localStorage.setItem("creatorId", item.creatorId);
    window.localStorage.setItem("goal", item.goal);
    window.localStorage.setItem("public", item.isPublic);
    window.localStorage.setItem("creatorName", item.creatorName);
    window.localStorage.setItem("id", item.id);
    window.localStorage.setItem("edit", true);
    navigate("/my-routine");
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

      <RoutinesWrapper>
        <Heading>All routines</Heading>
        <HomeItems>
          <Routines>
            {routines.length > 0 &&
              routines.map((item) => {
                return (
                  <RoutineCard key={item.id} onClick={() => setActivity(item)}>
                    <Title>Name</Title>
                    <ItemContent>{item.name}</ItemContent>
                    <Title>Goal</Title>
                    <ItemContent>{item.goal}</ItemContent>

                    <Actions>
                      <Action onClick={() => handleEdit(item)}>
                        <PencilAltIcon height={20} />
                      </Action>
                      <Action onClick={() => handleDelete(item.id)}>
                        <TrashIcon height={20} />
                      </Action>
                    </Actions>
                  </RoutineCard>
                );
              })}
          </Routines>

          {activity.name ? (
            <ActivitiesWrapper>
              <Heading>Activities</Heading>
              <Activities>
                {activity.activities.length > 0 ? (
                  activity.activities.map((item) => {
                    return (
                      <Activity>
                        <div>{item.name}</div>
                        <div>{item.count}</div>
                        <div>{item.duration}</div>
                        <div>{item.description}</div>
                      </Activity>
                    );
                  })
                ) : (
                  <div>No Activities</div>
                )}
              </Activities>
            </ActivitiesWrapper>
          ) : (
            <ActivitiesWrapper>
              <Activities>No Activities</Activities>
            </ActivitiesWrapper>
          )}
        </HomeItems>
      </RoutinesWrapper>
    </div>
  );
}

export default Home;
