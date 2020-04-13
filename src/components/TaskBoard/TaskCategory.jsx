import React from "react";
import TaskItem from "./TaskItem";

const TaskCategory = (props) => {

    return (
        <div className="col-12 col-xl">
            <div className="card-box">
                <h4 className="header-title">{props.title}</h4>
                <p className="sub-header">
                    Your awesome text goes here. Your awesome text goes here.
                </p>
                <ul
                    onDragOver={props.onDragOver}
                    onDrop={(event) => {
                        props.onDrop(event, props.title)
                    }}
                    className="sortable-list taskList list-unstyled" id="upcoming">

                    {
                        props.tasks.map((task) => {
                            return <TaskItem
                                key={task.id}
                                taskId={task.id}
                                onDragStart={props.onDragStart}/>
                        })
                    }

                    {/*<TaskItem/>*/}
                    {/*<TaskItem/>*/}
                    {/*<TaskItem/>*/}
                    {/*<TaskItem/>*/}

                </ul>
                <a href="#" className="btn btn-primary btn-block mt-3 waves-effect waves-light"><i
                    className="mdi mdi-plus-circle"></i> Add New</a>
            </div>
        </div>
    );
};

export default TaskCategory;