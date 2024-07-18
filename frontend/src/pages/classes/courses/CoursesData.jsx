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
    id: 'course1',
    urlTitle: 'aquatic',
    title: 'Aquatic',
    courseImg: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D",
    Component: Aquatic
  },
  {
    id: 'course2',
    urlTitle: 'cardio',
    title: 'Cardio',
    courseImg: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    Component: Cardio
  },
  {
    id: 'course9',
    urlTitle: 'weightlifting',
    title: 'Weight Lifting',
    courseImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdlaWdodCUyMExpZnRpbmd8ZW58MHx8MHx8fDA%3D",
    Component: Weightlifting
  },
  {
    id: 'course3',
    urlTitle: 'dance',
    title: 'Dance',
    courseImg: "https://images.unsplash.com/photo-1546427660-eb346c344ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFuY2V8ZW58MHx8MHx8fDA%3D",
    Component: Dance
  },
  {
    id: 'course10',
    urlTitle: 'yoga',
    title: 'Yoga',
    courseImg: "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Component: Yoga
  },
  {
    id: 'course4',
    urlTitle: 'groupexercise',
    title: 'Group Exercise',
    courseImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjBleGNlcmNpc2V8ZW58MHx8MHx8fDA%3D",
    Component: GroupExercise
  },
  {
    id: 'course5',
    urlTitle: 'indoor',                
    title: 'Indoor',                
    courseImg: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kb29yJTIwRXhlcmNpc2V8ZW58MHx8MHx8fDA%3D",
    Component: Indoor
  },
  {
    id: 'course7',
    urlTitle: 'sports',
    title: 'Sports',
    courseImg: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww",
    Component: Sports
  },
  {
    id: 'course8',
    urlTitle: 'stretchandflexibility',
    title: 'Stretch And Flexibility',
    courseImg: "https://images.unsplash.com/photo-1597216174311-cb8bf6e6ef9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN0cmV0Y2h8ZW58MHx8MHx8fDA%3D",
    Component: StretchAndFlexibility
  }
]
