import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Staff from './StaffComponent';
import { STAFFS } from '../shared/staffs';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    }
  }

  render() {

    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <Staff staffs={this.state.staffs} />
      </div>
    );
  }
}

export default Main;