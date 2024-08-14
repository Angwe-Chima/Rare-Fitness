import Aquatic from "./aquatic/Aquatic";
import Cardio from "./cardio/Cardio";
import Dance from "./dance/Dance";
import GroupExercise from "./groupExercise/GroupExercise";
import Indoor from "./indoor/Indoor";
import Sports from "./sports/Sports";
import StretchAndFlexibility from "./stretchAndFlexibility/StretchAndFlexibility";
import Weightlifting from "./weightlifting/Weightlifting";
import Yoga from "./yoga/Yoga";

export default [
  {
    id: "course1",
    Component: Aquatic,
  },
  {
    id: "course2",
    Component: Cardio,
  },
  {
    id: "course3",
    Component: Weightlifting,
  },
  {
    id: "course4",
    Component: Dance,
  },
  {
    id: "course5",
    Component: Yoga,
  },
  {
    id: "course6",
    Component: GroupExercise,
  },
  {
    id: "course7",
    Component: Indoor,
  },
  {
    id: "course8",
    Component: Sports,
  },
  {
    id: "course9",
    Component: StretchAndFlexibility,
  },
];
