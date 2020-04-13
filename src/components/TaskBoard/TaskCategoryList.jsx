import React, {useState} from "react";
import TaskCategory from "./TaskCategory";

const TaskCategoryList = ()=>{

    const [allTasks,setAllTasks] = useState({
        tasks: [
            {
                "category_name": "work in progress",
                "tasks": [
                    {
                        "id": 1,
                        "title": "Upload profile picture"
                    },
                    {
                        "id": 2,
                        "title": "remove unused imports"
                    },
                    {
                        "id": 3,
                        "title": "clean and refactor the code"
                    }
                ]
            },
            {
                "category_name": "completed",
                "tasks": [
                    {
                        "id": 4,
                        "title": "fix the bug in the login page"
                    },
                    {
                        "id": 5,
                        "title": "use aop proxy for logging latency time"
                    }
                ]
            }
        ]
    });

    const onDragOver = (event) => {
        console.log("on drag over ");
        event.preventDefault();
    };

    const onDragStart = (event, id) => {
        console.log(" started to drag element [" + id + "] ");
        //this will work in IE and all other browsers
        event.dataTransfer.setData("text/plain", id);
    };

    const onDrop = (event, movedCategory) => {
        let taskId = event.dataTransfer.getData("text/plain");

        console.log("moved task id ["+taskId+"]  to category [" + movedCategory);

        setAllTasks({
            tasks: [
                {
                    "category_name": "work in progress",
                    "tasks": [
                        {
                            "id": 1,
                            "title": "Upload profile picture"
                        },
                        {
                            "id": 2,
                            "title": "remove unused imports"
                        }
                    ]
                },
                {
                    "category_name": "completed",
                    "tasks": [
                        {
                            "id": 4,
                            "title": "fix the bug in the login page"
                        },
                        {
                            "id": 5,
                            "title": "use aop proxy for logging latency time"
                        },
                        {
                            "id": 3,
                            "title": "clean and refactor the code"
                        }
                    ]
                }
            ]
        })

    };

    return (
        <div className="row">
           {
               allTasks.tasks.map((taskCategory)=>{
                   return <TaskCategory
                       onDragOver={onDragOver}
                       onDragStart={onDragStart}
                       onDrop={onDrop.bind(this)}
                       tasks={taskCategory.tasks}
                       // key={category.category}
                       // category={category.category}
                       // tasks={category.tasks}
                       title={taskCategory.category_name}/>
               })
           }
            {/*<TaskCategory title={"Upcoming"}/>*/}
            {/*<TaskCategory title={"In Progress"}/>*/}
            {/*<TaskCategory title={"Review"}/>*/}
            {/*<TaskCategory title={"Completed"}/>*/}
        </div>
    );
};

export default TaskCategoryList;