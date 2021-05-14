export const ACTION = {
  ACTION_1: "app/ACTION_1",
  ACTION_2: "app/ACTION_2",
  CLICK_SOUND: "app/CLICK_SOUND",
};

export const INIT_STATE = {
  currentActivity: {
    type: "hiking",
    status: "In progress",
    time: "00:00",
    date: "14.05.2021.",
  },
  scheduledActivities: [
    {
      type: "hiking",
      status: "Scheduled",
      time: "00:00",
      date: "15.06.2021.",
    },
    {
      type: "spinning",
      status: "Scheduled",
      time: "00:00",
      date: "21.06.2021.",
    },
  ],
  activityHistory: [
    {
      type: "surfing",
      status: "Done",
      time: "45:15",
      date: "01.03.2021.",
    },
    {
      type: "weights",
      status: "Done",
      time: "30:00",
      date: "05.03.2021.",
    },
  ],
};

export const ACTIVITY_TYPES = [
  { title: "surfing", subtitle: "ocean beach" },
  { title: "hiking", subtitle: "torrey pines" },
  { title: "weights", subtitle: "encinitas" },
  { title: "spinning", subtitle: "ride at home" },
];
