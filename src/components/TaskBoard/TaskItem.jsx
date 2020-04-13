import React from "react";

const TaskItem = (props) => {

    return (
        <li draggable
            onDragStart={(event) => {
                props.onDragStart(event, props.taskId)
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
};

export default TaskItem;