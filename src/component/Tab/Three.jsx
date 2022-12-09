
import Select from "./../Select";
import { first, second, three, four, five } from "./data";

const Three = ({ selectThree, setSelectThree }) => {
  const itemsSecond = second.filter(
    (e) => e.idItem === (selectThree && selectThree.three1.id)
  );
  const itemsThree = three.filter(
    (e) => e.idItem === (selectThree && selectThree.three2.id)
  );
  const ItemFour = four.filter(
    (e) => e.idItem === (selectThree && selectThree.three3.id)
  );
  const ItemFive = five.filter(
    (e) => e.idItem === (selectThree && selectThree.three4.id)
  );
  return (
    <div className="select-container-single bg-tab py-5">
      <Select
        options={first}
        onChange={(data) => {
          setSelectThree({
            ...selectThree,
            three1: data,
            three2: {},
            three3: {},
            three4: {},
            three5: {},
          });
        }}
        placeholder="اتوبوس مورد نظر را انتخاب کنید"
      />

 
     
     {itemsSecond.some(
        (i) => i.idItem === (selectThree && selectThree.three1.id)
      ) && (
        <Select
          options={itemsSecond}
          value={selectThree.three2}
          onChange={(data) => {
            setSelectThree({
              ...selectThree,
              three2: data,
              three3: {},
              three4: {},
              three5: {},
            });
          }}
        />
      )}
      {itemsThree.some(
        (i) => i.idItem === (selectThree && selectThree.three2.id)
      ) && (
        <Select
          options={itemsThree}
          value={selectThree.three3}
          onChange={(data) => {
            setSelectThree({
              ...selectThree,
              three3: data,
              three4: {},
              three5: {},
            });
          }}
        />
      )}

      {ItemFour.some(
        (i) => i.idItem === (selectThree && selectThree.three3.id)
      ) && (
        <Select
          options={ItemFour}
          value={selectThree.three4}
          onChange={(data) =>
            setSelectThree({
              ...selectThree,
              three4: data,
              three5: {},
            })
          }
        />
      )}
      {ItemFive.some(
        (i) => i.idItem === (selectThree && selectThree.three4.id)
      ) && (
        <Select
          options={ItemFive}
          value={selectThree.three5}
          onChange={(data) =>
            setSelectThree({
              ...selectThree,
              three5: data,
            })
          }
        />
      )}
    </div>
  );
};

export default Three;
