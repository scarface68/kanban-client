import React, { useState } from "react";
import Wrapper from "../components/common/Wrapper/Wrapper";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import addIcon from "../assets/icons/add.svg";
import logout from "../assets/icons/logout.svg";
import DropDown from "../components/form/dropDown/DropDown";
import ActionButton from "../components/navigation/ActionButton";
import Navigation from "../components/navigation/Navigation";
import AddTaskContainer from "./AddTaskContainer";
import { useDispatch, useSelector } from "react-redux";
import { createNewBoard, fetchActiveBoard } from "../store/board-actions";
import Button from "../components/form/button/Button";
import CreateNewBoard from "../components/appSideBar/CreateNewBoard";
import EditDialog from "../components/common/editDialog/EditDialog";
import { signOut } from "../store/auth-actions";

export default function NavigationContainer() {
  const activeBoard = useSelector((state) => state.board.activeBoard);
  const activeBoardList = useSelector((state) => state.board.activeBoardList);
  const allBoards = useSelector((state) => state.board.allBoards);
  const [showCreate, setShowCreate] = useState(false);
  const dispatch = useDispatch();
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  let boardsDropdownList = allBoards?.map((item) => ({
    id: item._id,
    value: item.title,
  }));

  const onBoardClickedHandler = (board) => {
    dispatch(fetchActiveBoard(board.id));
  };
  const toggleCreateDialog = () => setShowCreate((prev) => !prev);
  const toggleAddTaskModal = () => setShowAddTaskModal((prev) => !prev);
  const createNewBoardHandler = (boardTitle) => {
    dispatch(createNewBoard({ boardTitle }));
    toggleCreateDialog();
  };

  return (
    <>
      <Navigation>
        {/* <Logo /> */}
        <Wrapper
          width="90%"
          justify="space-between"
          alignItems="center"
          margin="0 0 0 1em"
          minHeight="3rem"
        >
          <DropDown
            dataSource={boardsDropdownList}
            onItemClicked={onBoardClickedHandler}
            shouldHide={true}
            initialValue={activeBoard?.title}
          />

          <CreateNewBoard handler={toggleCreateDialog} title="New board" />

          {allBoards.length > 0 && activeBoardList.length > 0 && (
            <ActionButton
              title="Add new task"
              icon={addIcon}
              handler={toggleAddTaskModal}
            />
          )}
        </Wrapper>

        <ActionButton
          title="Logout"
          icon={logout}
          handler={() => dispatch(signOut())}
        />
      </Navigation>
      {showAddTaskModal && <AddTaskContainer onClose={toggleAddTaskModal} />}
      {showCreate && (
        <EditDialog
          onClose={toggleCreateDialog}
          onSubmit={createNewBoardHandler}
          title="Enter title for board"
        />
      )}
    </>
  );
}
