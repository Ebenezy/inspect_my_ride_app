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
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Front</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Front Bumper</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Fenders</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Doors</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Roof</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Rear</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Rear Bumper</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Trunk</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Trim</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Fuel Door</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
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
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Seats</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Headliner</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Carpet</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Door Panels</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Glove Box</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Vanity Mirrors</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Interior Trim</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Dashboard Gauge</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Air Condition</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Heater</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
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
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Windshield</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Windows</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Mirrors</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
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
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Condition of Tyre</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Condition of Wheels</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Spare Tyre</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Jack and Wheel Tools</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
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
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Frame</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Exhaust System</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Transmission</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Drive Axle</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Suspension</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
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
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Engine Compartment</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Battery</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Oil</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Fluids</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Wiring</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Belts</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hoses</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
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
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Power Locks</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Power Seats</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Power Steering</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Power Windows</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Power Mirrors</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Audio System</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Onboard Computer</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Headlights</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Tail Light</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Signal Lights</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Brake Lights</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
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
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Starting</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Idling</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Engine Performance</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Acceleration</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Transmission Shift</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Steering</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Braking</p>
                                                </div>
                                                <router-link to="Notes"><div class="edit_"><font-awesome-icon icon="pen" class=""/></div></router-link>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
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
                        <router-link to="">
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