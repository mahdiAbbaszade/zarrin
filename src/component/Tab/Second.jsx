
import Select from "../Select";
import { camiuonet, second, three, four, five } from "./dataSecond";

const Second = ({ selectSecond, setSelectSecond }) => {
  const itemsSecond = second.filter(
    (e) => e.idItem === (selectSecond && selectSecond.second1.id)
  );
  const itemsThree = three.filter(
    (e) => e.idItem === (selectSecond && selectSecond.second2.id)
  );
  const ItemFour = four.filter(
    (e) => e.idItem === (selectSecond && selectSecond.second3.id)
  );
  const ItemFive = five.filter(
    (e) => e.idItem === (selectSecond && selectSecond.second4.id)
  );


  return (
    <div className="select-container-single bg-tab py-5">
      <Select
        options={camiuonet}
        onChange={(data) => {
          setSelectSecond({
            ...selectSecond,
            second1: data,
            second2: {},
            second3: {},
            second4: {},
            second5: {},
          });
        }}
        placeholder="کامیونت مورد نظر را انتخاب کنید"
      />


      {itemsSecond.some(
        (i) => i.idItem === (selectSecond && selectSecond.second1.id)
      ) && (
        <Select
          options={itemsSecond}
          value={selectSecond.second2}
          onChange={(data) => {
            setSelectSecond({
              ...selectSecond,
              second2: data,
              second3: {},
              second4: {},
              second5: {},
            });
          }}
        />
      )}
      {itemsThree.some(
        (i) => i.idItem === (selectSecond && selectSecond.second2.id)
      ) && (
        <Select
          options={itemsThree }
          value={selectSecond.second3}
          onChange={(data) => {
            setSelectSecond({
              ...selectSecond,
              second3: data,
              second4: {},
              second5: {},
            });
          }}
        />
      )}

      {ItemFour.some(
        (i) => i.idItem === (selectSecond && selectSecond.second3.id)
      ) && (
        <Select
          options={ItemFour}
          value={selectSecond.second4}
          onChange={(data) =>
            setSelectSecond({
              ...selectSecond,
              second4: data,
              second5: {},
            })
          }
        />
      )}
      {ItemFive.some(
        (i) => i.idItem === (selectSecond && selectSecond.second4.id)
      ) && (
        <Select
          options={ItemFive}
          value={selectSecond.second5}
          onChange={(data) =>
            setSelectSecond({
              ...selectSecond,
              second5: data,
            })
          }
        />
      )}
    </div>
  );
};

export default Second;
