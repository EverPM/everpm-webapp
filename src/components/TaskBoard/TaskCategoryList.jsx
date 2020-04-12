import React from "react";
import TaskCategory from "./TaskCategory";

const TaskCategoryList = ()=>{
    return (
        <div className="row">
            <TaskCategory title={"Upcoming"}/>
            <TaskCategory title={"In Progress"}/>
            <TaskCategory title={"Review"}/>
            <TaskCategory title={"Completed"}/>
        </div>
    );
};

export default TaskCategoryList;