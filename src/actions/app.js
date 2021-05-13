import * as constants from "../constants";
import ClickSound from "../assets/sound/click.mp3";

export const action1 = () => {
  return {
    type: constants.ACTION.ACTION_1,
  };
};

export const action2 = (param) => {
  return {
    type: constants.ACTION.ACTION_2,
    data: { param },
  };
};

export const playSoundClick = () => {
  const sound = new Audio(ClickSound);
  sound.play();
  return {
    type: constants.ACTION.CLICK_SOUND,
  };
};
