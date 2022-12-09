import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Kamiuon from "./../../assest/truck1a.png";
import Icon from "./../../assest/Truck.png";
import MiniBus from "./../../assest/minibus.png";
import Bus from "./../../assest/bus.png";
import "./Tab.css";

import { useTab } from "./../Tab/useTab";
import First from "./../Tab/First";
import Second from "./../Tab/Second";
import Three from "./../Tab/Three";
import Four from "./../Tab/Four";

const TabComponent = () => {
  const {
    selectFirst,
    setSelectFirst,
    selectSecond,
    setSelectSecond,
    selectThree,
    setSelectThree,
    selectFour,
    setSelectFour,
  } = useTab();

  return (
    <div className="tab-trw">
      <div className="">
        <Tabs defaultActiveKey="kamiuon" className="mb-3">
          <Tab
            onClick={() => {
              setSelectSecond({
                second1: {},
                second2: {},
                second3: {},
                second4: {},
                second5: {},
              });
              setSelectThree({
                three1: {},
                three2: {},
                three3: {},
                three4: {},
                three5: {},
              });
              setSelectFour({
                four1: {},
                four2: {},
                four3: {},
                four4: {},
                four5: {},
              });
            }}
            eventKey="kamiuon"
            title={<img src={Icon} className=" icons-tabs-trw Truck" alt="" />}
          >
            <First setSelectFirst={setSelectFirst} selectFirst={selectFirst} />
          </Tab>
          <Tab
            onClick={() => {
              setSelectFirst({
                first1: {},
                first2: {},
                first3: {},
                first4: {},
                first5: {},
              });
              setSelectThree({
                three1: {},
                three2: {},
                three3: {},
                three4: {},
                three5: {},
              });
              setSelectFour({
                four1: {},
                four2: {},
                four3: {},
                four4: {},
                four5: {},
              });
            }}
            eventKey="kamiuonent"
            title={<img src={Kamiuon} className="icons-tabs-trw" alt="" />}
          >
            <Second
              setSelectSecond={setSelectSecond}
              selectSecond={selectSecond}
            />
          </Tab>
          <Tab
            onClick={() => {
              setSelectFirst({
                first1: {},
                first2: {},
                first3: {},
                first4: {},
                first5: {},
              });
              setSelectSecond({
                second1: {},
                second2: {},
                second3: {},
                second4: {},
                second5: {},
              });
              setSelectFour({
                four1: {},
                four2: {},
                four3: {},
                four4: {},
                four5: {},
              });
            }}
            eventKey="bus"
            title={<img src={MiniBus} className="icons-tabs-trw" alt="" />}
          >
            <Three selectThree={selectThree} setSelectThree={setSelectThree} />
          </Tab>
          <Tab
            onClick={() => {
              setSelectFirst({
                first1: {},
                first2: {},
                first3: {},
                first4: {},
                first5: {},
              });
              setSelectSecond({
                second1: {},
                second2: {},
                second3: {},
                second4: {},
                second5: {},
              });
            }}
            eventKey="minibus"
            title={<img src={Bus} className="icons-tabs-trw" alt="" />}
          >
            <Four setSelectFour={setSelectFour} selectFour={selectFour} />
          </Tab>
        </Tabs>
      </div>
      {/* <h4 className="yekanBold">کاتالوگ محصولات</h4> */}
    </div>
  );
};

export default TabComponent;
