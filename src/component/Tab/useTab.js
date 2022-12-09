import { useState } from "react";

export const useTab = () => {
  const [selectFirst, setSelectFirst] = useState({
    first1: {},
    first2: {},
    first3: {},
    first4: {},
    first5: {},
  });
  const [selectSecond, setSelectSecond] = useState({
    second1: {},
    second2: {},
    second3: {},
    second4: {},
    second5: {},
  });
  const [selectThree, setSelectThree] = useState({
    three1: {},
    three2: {},
    three3: {},
    three4: {},
    three5: {},
  });

  const [selectFour, setSelectFour] = useState({
    four1: {},
    four2: {},
    four3: {},
    four4: {},
    four5: {},
  });
  return {
    selectFirst,
    setSelectFirst,
    selectSecond,
    setSelectSecond,
    selectThree,
    setSelectThree,
    selectFour,
    setSelectFour,
  };
};
