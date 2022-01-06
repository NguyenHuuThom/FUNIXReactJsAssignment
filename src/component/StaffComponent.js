import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';
import dateFormat from "dateformat";


function RenderStaffList({ staff, onClick }) {
    return (
        <Card onClick={() => onClick(staff.id)}>
            <CardImg width="100%" src={staff.image} alt={staff.name} />
            <CardTitle className="text-center m-1" heading="true">{staff.name}</CardTitle>
        </Card>
    )
}

const Staffs = (props) => {
    console.log(props);
    const staff = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-sm-6 col-md-4 col-xl-2 mt-4">
                <RenderStaffList staff={staff} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {staff}
            </div>
        </div>
    );
}

export default Staffs