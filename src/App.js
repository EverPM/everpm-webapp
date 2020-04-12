import React from 'react';
import './App.css';
import Footer from "./components/Main/Footer";
import Header from "./components/Main/Header/Header";
import TaskCategoryList from "./components/TaskBoard/TaskCategoryList";
import TaskBoard from "./components/TaskBoard/TaskBoard";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <TaskBoard/>
                        <div className="col-lg-2">
                            <div className="card-box h-100">
                                <h4 className="text-dark header-title m-t-0">Activities</h4>
                                <p className="text-muted m-b-30 font-13">
                                    Your awesome text goes here. Your awesome text goes here.
                                </p>

                                <div>
                                    <div className="timeline-box">
                                        <h5 className="text-primary">07 January 2018</h5>
                                        <p className="timeline-date text-muted">
                                            <small>08:25 am</small>
                                        </p>
                                        <p>Jonatha Smith added new milestone <span><a className="blue"
                                                                                      href="#">crishtian</a></span>
                                            Lorem ipsum dolor sit amet consiquest dio</p>
                                    </div>


                                    <p className="font-13 text-muted mb-0">
                                        <a href="" className="text-dark">@Michael</a>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio.
                                    </p>
                                    <p> 17 February 2018
                                        <small className="text-muted">12:00 PM</small>
                                    </p>

                                    <p className="font-13 text-muted mb-0">
                                        <a href="" className="text-dark">@Michael</a>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio.
                                    </p>
                                    <p> 17 February 2018
                                        <small className="text-muted">12:00 PM</small>
                                    </p>

                                    <p className="font-13 text-muted mb-0">
                                        <a href="" className="text-dark">@Michael</a>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio.
                                    </p>
                                    <p> 17 February 2018
                                        <small className="text-muted">12:00 PM</small>
                                    </p>

                                    <p className="font-13 text-muted mb-0">
                                        <a href="" className="text-dark">@Michael</a>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio.
                                    </p>
                                    <p> 17 February 2018
                                        <small className="text-muted">12:00 PM</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    );
}

export default App;
