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
                    <div class="enter-email">
                        <input type="email" name="email" class="input-email" placeholder="Client's Name">
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
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div>

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
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div>

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
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div>

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
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div>

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
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div>
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
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div>
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
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div>
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
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="car_conditions">
                                                <div class="car_condition">
                                                    <div class="good_">G</div>
                                                    <div class="faulty_">F</div>
                                                    <div class="bad_">B</div>
                                                    <p>Hood</p>
                                                </div>
                                                <div class="edit_"><font-awesome-icon icon="pen" class=""/></div>
                                            </div>
                                            <div class="general-observe">
                                                <p>General Observation (optional)</p>
                                                <font-awesome-icon icon="pen" class=""/>
                                            </div>
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