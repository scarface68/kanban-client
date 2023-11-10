import React, { useState } from "react";
import { AddSubTaskListPane, AddSubTaskListItem, SubTaskBody } from "./styles";
import FormInput from "../form/input/FormInput";
import { ReactComponent as CloseIconLight } from "../../assets/icons/close-light.svg";
import Wrapper from "../common/Wrapper/Wrapper";
import Button from "../form/button/Button";

export default function 
SubTaskList({ subTaskList, setSubTaskList, btnText, placeholderTxt }) {
  const addSubTaskClickHandler = () => {
    setSubTaskList((prev) => {
      const newState = [...prev, ""];
      return newState;
    });
  };
  const removeClickHandler = (index) => {
    if (subTaskList.length === 0) return;
    setSubTaskList((prev) => {
      const newState = prev.filter((item, idx) => index !== idx);
      return newState;
    });
  };
  const inputChangeHandler = (index, event) => {
    setSubTaskList((prev) => {
      const newState = [...prev];
      newState[index] = event.target.value;
      return newState;
    });
  };

  const subTaskInputItems = subTaskList.map((item, index) => {
    return (
      <AddSubTaskListItem key={index}>
        <FormInput
          width="100%"
          placeholder={placeholderTxt}
          value={item}
          onChange={inputChangeHandler.bind(null, index)}
        />
        <CloseIconLight onClick={removeClickHandler.bind(null, index)} />
      </AddSubTaskListItem>
    );
  });

  return (
    <Wrapper direction="column" width="100%">
      <AddSubTaskListPane>{subTaskInputItems}</AddSubTaskListPane>
      <Button title={btnText} onClick={addSubTaskClickHandler} />
    </Wrapper>
  );
}
