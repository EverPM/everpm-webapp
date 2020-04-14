import React from "react";
import TaskCategory from "./TaskCategory";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";


const TaskCategoryList = () => {

    const onDragEnd = (result) => {
        console.log("on drag ed ", result);
    };

    return (
        <div className="row">
            <DragDropContext
                onDragEnd={result => onDragEnd(result)}
            >
                {/*<TaskCategory title={"Upcoming"}/>*/}
                {/*<TaskCategory title={"In Progress"}/>*/}
                {/*<TaskCategory title={"Review"}/>*/}
                {/*<TaskCategory title={"Completed"}/>*/}

                <TaskCategory data={{id: "10", title: "Upcoming", tasks: [1, 2, 3]}}/>
                <TaskCategory data={{id: "15", title: "In Progress", tasks: [4]}}/>
                <TaskCategory data={{id: "20", title: "Review", tasks: [7, 8, 9]}}/>
                <TaskCategory data={{id: "25", title: "Completed", tasks: [10, 11, 12]}}/>

            </DragDropContext>
        </div>
    );
};

export default TaskCategoryList;