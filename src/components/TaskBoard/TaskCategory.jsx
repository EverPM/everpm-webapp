import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import TaskItem from "./TaskItem";

const TaskCategory = (props) => {

    return (

        <div className="col-12 col-xl">
            <Droppable droppableId={props.data.id} key={props.data.id}>
                {(provided, snapshot) => {
                    return (
                        <div className="card-box"
                             {...provided.droppableProps}
                             ref={provided.innerRef}
                             style={{
                                 background: snapshot.isDraggingOver
                                     ? "lightblue"
                                     : ""
                             }}>
                            <h4 className="header-title">{props.data.title}</h4>
                            <p className="sub-header">
                                Your awesome text goes here. Your awesome text goes here.
                            </p>
                            <ul className="sortable-list taskList list-unstyled" id="upcoming">

                                {/*<TaskItem id={10}/>*/}
                                {/*<TaskItem id={20}/>*/}
                                {/*<TaskItem id={30}/>*/}
                                {/*<TaskItem id={40}/>*/}
                                {
                                    props.data.tasks.map((task) => {
                                        return <TaskItem
                                            key={task}
                                            taskId={task}
                                            onDragStart={props.onDragStart}/>
                                    })
                                }

                            </ul>
                            {provided.placeholder}
                            <a href="#" className="btn btn-primary btn-block mt-3 waves-effect waves-light">
                                <i className="mdi mdi-plus-circle"></i> Add New</a>
                        </div>
                    )
                }}
            </Droppable>
        </div>
    );
};

export default TaskCategory;