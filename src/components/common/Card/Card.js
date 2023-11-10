import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CardContainer } from "./styles";

export default function Card({ children, width, index, idForKey,...rest }) {
  return (
    <Draggable key={idForKey} draggableId={idForKey} index={index}>
      {(provided) => (
        <CardContainer
          width={width}
          {...rest}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </CardContainer>
      )}
    </Draggable>
  );
}
