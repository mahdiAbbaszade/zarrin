import Select from "./../Select";
import { miniBus, second, three, four, five } from "./dataFour";

const Four = ({ selectFour, setSelectFour }) => {
  const itemsSecond = second.filter(
    (e) => e.idItem === (selectFour && selectFour.four1.id)
  );
  const itemsThree = three.filter(
    (e) => e.idItem === (selectFour && selectFour.four2.id)
  );
  const ItemFour = four.filter(
    (e) => e.idItem === (selectFour && selectFour.four3.id)
  );
  const ItemFive = five.filter(
    (e) => e.idItem === (selectFour && selectFour.four4.id)
  );
  return (
    <div className="select-container-single bg-tab py-5">
      <Select
        options={miniBus}
        onChange={(data) => {
          setSelectFour({
            ...selectFour,
            four1: data,
            four2: {},
            four3: {},
            four4: {},
            four5: {},
          });
        }}
        placeholder="مینی بوس مورد نظر را انتخاب کنید"
      />

      {itemsSecond.some(
        (i) => i.idItem === (selectFour && selectFour.four1.id)
      ) && (
        <Select
          options={itemsSecond}
          value={selectFour.four2}
          onChange={(data) => {
            setSelectFour({
              ...selectFour,
              four2: data,
              four3: {},
              four4: {},
              four5: {},
            });
          }}
        />
      )}
      {itemsThree.some(
        (i) => i.idItem === (selectFour && selectFour.four2.id)
      ) && (
        <Select
          options={itemsThree}
          value={selectFour.four3}
          onChange={(data) => {
            setSelectFour({
              ...selectFour,
              four3: data,
              four4: {},
              four5: {},
            });
          }}
        />
      )}

      {ItemFour.some(
        (i) => i.idItem === (selectFour && selectFour.four3.id)
      ) && (
        <Select
          options={ItemFour}
          value={selectFour.four4}
          onChange={(data) =>
            setSelectFour({
              ...selectFour,
              four4: data,
              four5: {},
            })
          }
        />
      )}
      {ItemFive.some(
        (i) => i.idItem === (selectFour && selectFour.four4.id)
      ) && (
        <Select
          options={ItemFive}
          value={selectFour.four5}
          onChange={(data) =>
            setSelectFour({
              ...selectFour,
              four5: data,
            })
          }
        />
      )}
    </div>
  );
};

export default Four;
