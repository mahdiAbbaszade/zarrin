import { useState } from "react";
import Select from "../Select";
import { camiuon, second, three, four, five } from "./dataFirst";

const First = ({ setSelectFirst, selectFirst }) => {
  const itemsSecond = second.filter(
    (e) => e.idItem === (selectFirst && selectFirst.first1.id)
  );
  const itemsThree = three.filter(
    (e) => e.idItem === (selectFirst && selectFirst.first2.id)
  );
  const ItemFour = four.filter(
    (e) => e.idItem === (selectFirst && selectFirst.first3.id)
  );
  const ItemFive = five.filter(
    (e) => e.idItem === (selectFirst && selectFirst.first4.id)
  );
  return (
    <div className="select-container-single bg-tab py-5">
      <Select
        options={camiuon}
        onChange={(data) => {
          setSelectFirst({
            ...selectFirst,
            first1: data,
            first2: {},
            first3: {},
            first4: {},
            first5: {},
          });
        }}
        placeholder="کامیون مورد نظر را انتخاب کنید"
      />

      {itemsSecond.some(
        (i) => i.idItem === (selectFirst && selectFirst.first1.id)
      ) && (
        <Select
          options={itemsSecond}
          value={selectFirst.first2}
          onChange={(data) => {
            setSelectFirst({
              ...selectFirst,
              first2: data,
              first3: {},
              first4: {},
              first5: {},
            });
          }}
        />
      )}
      {itemsThree.some(
        (i) => i.idItem === (selectFirst && selectFirst.first2.id)
      ) && (
        <Select
          options={itemsThree}
          value={selectFirst.first3}
          onChange={(data) => {
            setSelectFirst({
              ...selectFirst,
              first3: data,
              first4: {},
              first5: {},
            });
          }}
        />
      )}

      {ItemFour.some(
        (i) => i.idItem === (selectFirst && selectFirst.first3.id)
      ) && (
        <Select
          options={ItemFour}
          value={selectFirst.first4}
          onChange={(data) =>
            setSelectFirst({
              ...selectFirst,
              first4: data,
              first5: {},
            })
          }
        />
      )}
      {ItemFive.some(
        (i) => i.idItem === (selectFirst && selectFirst.first4.id)
      ) && (
        <Select
          options={ItemFive}
          value={selectFirst.first5}
          onChange={(data) =>
            setSelectFirst({
              ...selectFirst,
              first5: data,
            })
          }
        />
      )}
    </div>
  );
};

export default First;
