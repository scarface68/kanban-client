import React, { useState } from "react";
import Card from "../common/Card/Card";
import CardSubTitle from "../common/Card/CardSubTitle";
import CardTitle from "../common/Card/CardTitle";
import { TaskListItemTitle } from "./styles";
import Label from "./Label";
import MoreOptions from "../common/moreOptions/MoreOptions";

export default function TaskListItem({
  dataSource,
  onTaskClick,
  onTaskEdit,
  onTaskDelete,
  index,
  idForKey,
}) {
  const numOfSubTasks = dataSource.checkList.length;
  let numOfCompletedSubTask = 0;

  dataSource.checkList.forEach((subtask) => {
    if (subtask.isCompleted) numOfCompletedSubTask++;
  });

  const onClickHandler = () => {
    onTaskClick(dataSource);
  };

  const taskEditHandler = (e) => {
    e.stopPropagation();
    onTaskEdit(dataSource);
  };

  const taskDeleteHandler = (e) => {
    e.stopPropagation();
    onTaskDelete(dataSource);
  };
  return (
    <Card
      idForKey={idForKey}
      index={index}
      width="320px"
      onClick={onClickHandler}
    >
      <TaskListItemTitle>
        <CardTitle>{dataSource.title}</CardTitle>
        <MoreOptions
          datasource={[
            { title: "Edit", handler: taskEditHandler },
            { title: "Delete", handler: taskDeleteHandler },
          ]}
        />
      </TaskListItemTitle>
      {dataSource.priority && (
        <Label
          colour={
            dataSource.priority === "high"
              ? "danger"
              : dataSource.priority === "low"
              ? "sucess"
              : "info"
          }
          priority={dataSource.priority}
        />
      )}
      {dataSource.due && <Label colour="warning" due={dataSource.due} />}
      {dataSource.labels && (
        <Label colour="other" labels={dataSource.labels} />
      )}
      <CardSubTitle>{`${numOfCompletedSubTask} of ${numOfSubTasks} subtasks completed`}</CardSubTitle>
    </Card>
  );
}
