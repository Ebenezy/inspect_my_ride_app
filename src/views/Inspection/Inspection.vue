<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Vehicle Inspection</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <form action="" class="form-inspect-section">
                    <div class="vehicle-status">
                        <div class="good_2"><div class="dot1"></div> G - Good</div>
                        <div class="fair_2"><div class="dot2"></div> F - Fair</div>
                        <div class="bad_2"><div class="dot3"></div> B - Bad</div>
                        <div class="note_2">
                            <div class="edit-pen"><font-awesome-icon icon="pen" class=""/></div><p>- Note</p>
                        </div>
                    </div>
                    <div class="btop">
                        <div class="inspection-dropdown">
                            <div>
                                <badger-accordion>
                                    <badger-accordion-item>
                                        <template slot="header" >Exterior <font-awesome-icon icon="caret-down" class="caretdown"/></template>
                                        <template slot="content">
                                            <div class="status_code">
                                                <p>G</p>
                                                <p>F</p>
                                                <p>B</p>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Hood</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Front</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Front Bumper</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Fenders</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Doors</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Roof</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Rear</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Rear Bumper</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Trunk</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Trim</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Fuel Door</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Paint Condition</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <router-link to="General"><div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div></router-link>

                                        </template>
                                    </badger-accordion-item>

                                    <badger-accordion-item>
                                        <template slot="header" >Interior <font-awesome-icon icon="caret-down" class="caretdown"/></template>
                                        <template slot="content">
                                            <div class="status_code">
                                                <p>G</p>
                                                <p>F</p>
                                                <p>B</p>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Seats</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Headliner</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Carpet</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Door Panels</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Glove Box</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Vanity Mirrors</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Interior Trim</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Dashboard Gauge</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Air Condition</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Heater</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Defroster</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <router-link to="General"><div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div></router-link>

                                        </template>
                                    </badger-accordion-item>
                                    <badger-accordion-item>
                                        <template slot="header" >Glass <font-awesome-icon icon="caret-down" class="caretdown"/></template>
                                        <template slot="content">
                                            <div class="status_code">
                                                <p>G</p>
                                                <p>F</p>
                                                <p>B</p>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Windshield</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Windows</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Mirrors</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Rear Windows</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>

                                            <router-link to="General"><div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div></router-link>

                                        </template>
                                    </badger-accordion-item>
                                    <badger-accordion-item>
                                        <template slot="header" >Tyres & Wheels <font-awesome-icon icon="caret-down" class="caretdown"/></template>
                                        <template slot="content">
                                            <div class="status_code">
                                                <p>G</p>
                                                <p>F</p>
                                                <p>B</p>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Condition of Tyre</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Condition of Wheels</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Spare Tyre</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Jack and Wheel Tools</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Mould Flap</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>

                                            <router-link to="General"><div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div></router-link>

                                        </template>
                                    </badger-accordion-item>
                                    <badger-accordion-item>
                                        <template slot="header" >Underbody <font-awesome-icon icon="caret-down" class="caretdown"/></template>
                                        <template slot="content">
                                            <div class="status_code">
                                                <p>G</p>
                                                <p>F</p>
                                                <p>B</p>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Frame</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Exhaust System</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Transmission</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Drive Axle</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Suspension</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Brake System</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>

                                            <router-link to="General"><div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div></router-link>
                                        </template>
                                    </badger-accordion-item>
                                    <badger-accordion-item>
                                        <template slot="header" >Underhood <font-awesome-icon icon="caret-down" class="caretdown"/></template>
                                        <template slot="content">
                                            <div class="status_code">
                                                <p>G</p>
                                                <p>F</p>
                                                <p>B</p>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Engine Compartment</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Battery</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Oil</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Fluids</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Wiring</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Belts</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Hoses</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Any Non-Stock</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>

                                            <router-link to="General"><div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div></router-link>
                                        </template>
                                    </badger-accordion-item>
                                    <badger-accordion-item>
                                        <template slot="header" >Electrical System <font-awesome-icon icon="caret-down" class="caretdown"/></template>
                                        <template slot="content">
                                            <div class="status_code">
                                                <p>G</p>
                                                <p>F</p>
                                                <p>B</p>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Power Locks</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Power Seats</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Power Steering</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Power Windows</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Power Mirrors</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Audio System</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Onboard Computer</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Headlights</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Tail Light</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Signal Lights</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Brake Lights</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Parking Lights</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <router-link to="General"><div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div></router-link>
                                        </template>
                                    </badger-accordion-item>
                                    <badger-accordion-item>
                                        <template slot="header" >Road Test Findings <font-awesome-icon icon="caret-down" class="caretdown"/></template>
                                        <template slot="content">
                                            <div class="status_code">
                                                <p>G</p>
                                                <p>F</p>
                                                <p>B</p>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Starting</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Idling</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Engine Performance</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Acceleration</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Transmission Shift</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Steering</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Braking</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_" ><input type="checkbox" value="good" placeholder="G" class="checked"> </div>
                                                    <div class="faulty_" ><input type="checkbox" value="faulty" placeholder="F" class="checked"></div>
                                                    <div class="bad_" ><input type="checkbox" value="bad" placeholder="B" class="checked"></div>
                                                    <p>Suspension Performance</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <router-link to="General"><div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div></router-link>
                                        </template>
                                    </badger-accordion-item>
                                </badger-accordion>
                            </div>
                        </div>
                    </div>

                    <div class="login">
                        <router-link to="Finish">
                            <div class="start-inspection2">
                                <button class="inspect-btn">Complete Inspection</button>
                                <div class="inspect-icons2">
                                    <img src="../../assets/images/next-btn.svg" class="bounce-1">
                                </div>
                            </div>
                        </router-link>
                    </div>
                </form>

            </div>
            <div class="logo_footer">

            </div>
        </div>
    </div>
</template>

<script>
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

    export default {
        name: "Inspection.vue",
        components: {
            BadgerAccordion,
            BadgerAccordionItem

        },
        data: function() {
            return {

            }
        },
        methods : {

        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .status_code{
        display: flex;
    }
    .status_code p{
        padding: 5px 25px 0 15px;
        font-size: 25px;
        font-weight: 800;
        margin-bottom: 0;
    }
    .good_ input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 45px;
        height: 45px;
        background: #198E77;
        border-radius: 10px;
        opacity: 0.4;
    }
    .good_ input[type="checkbox"]:checked {
        opacity: 1;
        background: #198E77;
    }
    .faulty_ input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 45px;
        height: 45px;
        background: #E67E22;
        border-radius: 10px;
        opacity: 0.4;
    }
    .faulty_ input[type="checkbox"]:checked {
        opacity: 1;
        background: #E67E22;
    }
    .bad_ input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 45px;
        height: 45px;
        background: #FF1744;
        border-radius: 10px;
        opacity: 0.4;
    }
    .bad_ input[type="checkbox"]:checked {
        opacity: 1;
        background: #FF1744;
    }

    .badger-accordion__panel {
        max-height: 75vh;
        overflow: hidden;
    }

    .badger-accordion__panel.-ba-is-hidden {
        max-height: 0 !important;
        visibility: hidden;
    }

    .badger-accordion--initialized .badger-accordion__panel {
        transition: all ease-in-out 0.2s;
    }

</style>