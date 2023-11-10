import React from "react";
import MoreOptions from "../common/moreOptions/MoreOptions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  StatusColumnsListItem,
  StatusColumnsListHeader,
  StatusTitle,
  TaskList,
} from "./styles";
import TaskListItem from "./TaskListItem";

export default function StatusColumnsItem({
  dataSource,
  onTaskClick,
  onTaskEdit,
  onTaskDelete,
  onListEdit,
  onListDelete,
  provided,
}) {
  const listEditHandler = () => {
    onListEdit({ id: dataSource._id, title: dataSource.title });
  };
  const listDeleteHandler = () => {
    onListDelete({ id: dataSource._id, title: dataSource.title });
  };
  return (
    <StatusColumnsListItem>
      <StatusColumnsListHeader>
        <StatusTitle>{dataSource.title}</StatusTitle>
        <MoreOptions
          datasource={[
            { title: "Edit", handler: listEditHandler },
            { title: "Delete", handler: listDeleteHandler },
          ]}
        />
      </StatusColumnsListHeader>

      <TaskList {...provided.droppableProps} ref={provided.innerRef}>
        {dataSource.cards.map((item, index) => {
          return (
            <TaskListItem
              key={item._id}
              idForKey={item._id}
              index={index}
              dataSource={item}
              onTaskClick={onTaskClick}
              onTaskEdit={onTaskEdit}
              onTaskDelete={onTaskDelete}
            />
          );
        })}
        {provided.placeholder}
      </TaskList>
    </StatusColumnsListItem>
  );
}
