import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const TaskItem = (props) => {

    return (
        <Draggable
            key={props.taskId}
            draggableId={props.taskId.toString()}
            index={props.taskId}
        >
            {(provided, snapshot) => {
                return (<li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            userSelect: "none",
                            backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                            color: "white",
                            ...provided.draggableProps.style
                        }}
                        className="task-warning" id="task1">
                        <div className="checkbox checkbox-primary checkbox-single float-right">
                            <input type="checkbox" aria-label="Single checkbox Two"/>
                            <label/>
                        </div>
                        When an unknown printer took a galley of type and scrambled it to make a
                        type
                        specimen book.
                        <div className="clearfix"></div>
                        <div className="mt-3">
                            <p className="float-right mb-0 mt-2">
                                <button type="button"
                                        className="btn btn-success btn-sm waves-effect waves-light">C
                                </button>
                            </p>
                            <p className="mb-0"><a href="" className="text-muted"><img
                                src="assets/images/users/avatar-2.jpg" alt="task-user"
                                className="avatar-sm rounded-circle mr-2"/>
                                <span className="font-bold font-secondary">Chathuranga Tennakoon</span>
                            </a>
                            </p>
                            {/*<span className="font-bold font-secondary">2010-11-10</span>*/}
                        </div>
                    </li>
                )
            }}
        </Draggable>
    )
};

export default TaskItem;