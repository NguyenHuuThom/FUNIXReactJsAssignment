import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

function RenderStaff(staff) {
    const dateOfBirth = dateFormat(staff.staff.doB, "dd/mm/yyyy")
    const startDate = dateFormat(staff.staff.startDate, "dd/mm/yyyy")
    return (
        <div className="">
            <Card>
                <CardImg src={staff.staff.image} alt={staff.staff.name} />
                <CardBody>
                    <CardTitle><b>{`Họ và tên: ${staff.staff.name}`}</b></CardTitle>
                    <CardText>{`Ngày sinh: ${dateOfBirth}`}</CardText>
                    <CardText>{`Ngày vào công ty: ${startDate}`}</CardText>
                    <CardText>{`Phòng ban: ${staff.staff.department.name}`}</CardText>
                    <CardText>{`Ngày nghỉ còn lại: ${staff.staff.annualLeave}`}</CardText>
                    <CardText>{`Số ngày đã làm thêm : ${staff.staff.overTime}`}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const StaffInfo = (props) => {
    console.log(props);
    if (props.staff != null)
        return (
            <div className="container">
                {/* <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staff">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.staff.name}</h3>
                        <hr />
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderStaff staff={props.staff} />
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}

export default StaffInfo;