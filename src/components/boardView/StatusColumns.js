import React from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import StatusColumnsItem from "./StatusColumnsItem";
import { StatusColumnsList } from "./styles";

export default function StatusColumns({
  dataSource,
  onTaskClick,
  onTaskEdit,
  onTaskDelete,
  onListEdit,
  onListDelete,
}) {
  let content = null;

  if (dataSource) {
    content = dataSource?.lists.map((item, index) => {
      return (
        <Droppable key={item._id} droppableId={item._id}>
          {(provided) => (
            <StatusColumnsItem
              provided={provided}
              dataSource={item}
              onTaskClick={onTaskClick}
              onTaskEdit={onTaskEdit}
              onTaskDelete={onTaskDelete}
              onListEdit={onListEdit}
              onListDelete={onListDelete}
            />
          )}
        </Droppable>
      );
    });
  }
  return <StatusColumnsList>{content}</StatusColumnsList>;
}
