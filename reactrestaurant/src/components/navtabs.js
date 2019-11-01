import React from 'react'
import Badge from './badge';
import ApiMenuCall from './apimenucall';

function NavTabs() {
    return (
        <>
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="pills-specials-tab" data-toggle="pill" href="#pills-specials" role="tab" aria-controls="pills-specials" aria-selected="true">Specials <Badge /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-breakfast-tab" data-toggle="pill" href="#pills-breakfast" role="tab" aria-controls="pills-breakfast" aria-selected="false">Breakfast <Badge /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-lunch-tab" data-toggle="pill" href="#pills-lunch" role="tab" aria-controls="pills-lunch" aria-selected="false">Lunch <Badge /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-dinner-tab" data-toggle="pill" href="#pills-dinner" role="tab" aria-controls="pills-dinner" aria-selected="false">Dinner <Badge /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-bar-tab" data-toggle="pill" href="#pills-bar" role="tab" aria-controls="pills-bar" aria-selected="false">Bar <Badge /></a>
                </li>
            </ul>
            <div className="tab-content justify-content-center" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-specials" role="tabpanel" aria-labelledby="pills-specials-tab"> <ApiMenuCall /> </div>
                <div className="tab-pane fade" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab"><ApiMenuCall /> </div>
                <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab"><ApiMenuCall /> </div>
                <div className="tab-pane fade show" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab"><ApiMenuCall /> </div>
                <div className="tab-pane fade show" id="pills-bar" role="tabpanel" aria-labelledby="pills-bar-tab"><ApiMenuCall /> </div>
            </div>
        </>
    );
}

export default NavTabs;