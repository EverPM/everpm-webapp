import TaskCategoryList from "./TaskCategoryList";
import React from "react";

const TaskBoard = () => {

    return (
        <div className="col-lg-10">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a
                                    href="javascript: void(0);">Highdmin</a>
                                </li>
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a>
                                </li>
                                <li className="breadcrumb-item active">Task Board</li>
                            </ol>
                        </div>

                        {/*<div className="row">*/}
                        {/*    <div className="col-6">*/}
                        {/*        <a href="#" className="btn btn-success mt-2 mb-2 waves-effect waves-light"><i*/}
                        {/*            className="mdi mdi-plus-circle"></i> Add New</a>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-6">*/}
                        {/*        <h4 className="page-title">Task Board</h4>*/}
                        {/*    </div>*/}

                        {/*</div>*/}

                        {/*<a href="#" className="btn btn-success mt-2 mb-2 waves-effect waves-light"><i*/}
                        {/*    className="mdi mdi-plus-circle"></i> Add New</a>*/}
                        <h4 className="page-title">Task Board</h4>
                    </div>
                </div>
            </div>
            <TaskCategoryList/>
        </div>
    )
};

export default TaskBoard;
