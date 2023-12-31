import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Wrapper from "../components/common/Wrapper/Wrapper";
import DropDown from "../components/form/dropDown/DropDown";
import {
  EditTaskPane,
  EditTaskTitle,
  SubTaskTitle,
  StatusTitle,
} from "../components/editTask/styles";
import EditSubTaskList from "../components/editTask/EditSubTaskList";
import FormInput from "../components/form/input/FormInput";
import Button from "../components/form/button/Button";
import FormTextArea from "../components/form/textArea/FormTextArea";
import BackDrop from "../components/common/backDrop/BackDrop";
import { useDispatch, useSelector } from "react-redux";
import { updateCardData } from "../store/board-actions";

export default function EditTaskContainer({ onClose, task }) {
  const activeBoardList = useSelector((state) => state.board.activeBoardList);
  const [titleInput, setTitleInput] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.due);
  const [labels, setLabels] = useState(task.labels);
  const [subTaskList, setSubTaskList] = useState(task.checkList);
  const [descInput, setDescInput] = useState(task.description);
  const [statusInput, setStatusInput] = useState(null);

  const statusChangeHandler = (status) => setStatusInput(status);
  const titleChangeHandler = (e) => setTitleInput(e.target.value);
  const priorityChangeHandler = (e) => setPriority(e.target.value);
  const dueDateChangeHandler = (e) => setDueDate(e.target.value);
  const descChangeHandler = (e) => setDescInput(e.target.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const list = activeBoardList.find((item) => item.id === task.listId);
    setStatusInput(list);

    const subTasks = task.checkList.map((item) => item.body);
    setSubTaskList(subTasks);
  }, [activeBoardList, task.listId, task.checkList]);

  const editTaskHandler = () => {
    const card = {
      _id: task._id,
      title: titleInput,
      description: descInput,
      checkList: subTaskList.map((item) => ({
        body: item,
        isCompleted: false,
      })),
      listId: statusInput.id,
      boardId: task.boardId,
      priority,
      due:dueDate,
      labels,
    };

    dispatch(updateCardData(card));
    onClose();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <EditTaskPane>
          <Wrapper
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
            padding="1.75em"
            borderRadius="8px"
            width="100%"
          >
            <EditTaskTitle>Edit Task</EditTaskTitle>
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
            <EditSubTaskList
              subTaskList={labels}
              setSubTaskList={setLabels}
              btnText={"Add new label"}
              placeholderTxt={"e.g. assignment, chores, meeting"}
            />
            <SubTaskTitle>Subtasks</SubTaskTitle>
            <EditSubTaskList
              subTaskList={subTaskList}
              setSubTaskList={setSubTaskList}
              btnText={"Add new sub task"}
              placeholderTxt={"e.g. This is a subtask."}
              initialValue={statusInput?.value}
            />
            <StatusTitle>Status</StatusTitle>
            <DropDown
              dataSource={activeBoardList}
              onItemClicked={statusChangeHandler}
              initialValue={statusInput?.value}
              width="100%"
            />
            <Button title="Submit" onClick={editTaskHandler} />
          </Wrapper>
        </EditTaskPane>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
