import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Wrapper from "../components/common/Wrapper/Wrapper";
import DropDown from "../components/form/dropDown/DropDown";
import {
  AddTaskPane,
  AddTaskTitle,
  SubTaskTitle,
  StatusTitle,
} from "../components/addTask/styles";
import AddSubTaskList from "../components/addTask/AddSubTaskList";
import FormInput from "../components/form/input/FormInput";
import Button from "../components/form/button/Button";
import FormTextArea from "../components/form/textArea/FormTextArea";
import BackDrop from "../components/common/backDrop/BackDrop";
import { useDispatch, useSelector } from "react-redux";
import { createNewCard } from "../store/board-actions";

export default function AddTaskContainer({ onClose }) {
  const activeBoard = useSelector((state) => state.board.activeBoard);
  const activeBoardList = useSelector((state) => state.board.activeBoardList);
  const [titleInput, setTitleInput] = useState("");
  const [subTaskList, setSubTaskList] = useState([]);
  const [descInput, setDescInput] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [labels, setLabels] = useState([]);
  const [statusInput, setStatusInput] = useState("");

  useEffect(() => {
    if (activeBoardList) setStatusInput(activeBoardList[0]);
  }, [activeBoardList]);

  const statusChangeHandler = (status) => setStatusInput(status);
  const titleChangeHandler = (e) => setTitleInput(e.target.value);
  const priorityChangeHandler = (e) => setPriority(e.target.value);
  const dueDateChangeHandler = (e) => setDueDate(e.target.value);
  const descChangeHandler = (e) => setDescInput(e.target.value);
  const dispatch = useDispatch();

  const createTaskHandler = () => {
    const payload = {
      boardId: activeBoard._id,
      listId: statusInput.id,
      title: titleInput,
      description: descInput,
      checkList: subTaskList.map((item) => ({
        body: item,
        isCompleted: false,
      })),
      priority,
      due:dueDate,
      labels,
    };

    dispatch(createNewCard(payload));
    onClose();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AddTaskPane>
          <Wrapper
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            padding="1.75em"
            borderRadius="8px"
            width="100%"
          >
            <AddTaskTitle>Add New Task</AddTaskTitle>
            <FormInput
              label="Title"
              type="text"
              placeholder="e.g. Take coffee break"
              width="100%"
              value={titleInput}
              onChange={titleChangeHandler}
            />
            <FormTextArea
              label="Description"
              type="text"
              placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
              width="100%"
              minHeight="100px"
              value={descInput}
              onChange={descChangeHandler}
            />
            <FormInput
              label="Priority"
              type="text"
              placeholder="e.g. high, mid, low"
              width="100%"
              value={priority}
              onChange={priorityChangeHandler}
            />
            <FormInput
              label="Due Date"
              type="text"
              placeholder="e.g. dd/mm/yyyy , 4th July 2021"
              width="100%"
              value={dueDate}
              onChange={dueDateChangeHandler}
            />
            <SubTaskTitle>Labels</SubTaskTitle>
            <AddSubTaskList
              subTaskList={labels}
              setSubTaskList={setLabels}
              btnText={"Add new label"}
              placeholderTxt={"e.g. assignment, chores, meeting"}
            />
            <SubTaskTitle>Subtasks</SubTaskTitle>
            <AddSubTaskList
              subTaskList={subTaskList}
              setSubTaskList={setSubTaskList}
              btnText={"Add new sub task"}
              placeholderTxt={"e.g. This is a subtask."}
            />
            <StatusTitle>Status</StatusTitle>
            <DropDown
              dataSource={activeBoardList}
              onItemClicked={statusChangeHandler}
              width="100%"
            />
            <Button title="Create Task" onClick={createTaskHandler} />
          </Wrapper>
        </AddTaskPane>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
