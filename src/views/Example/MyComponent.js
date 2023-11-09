import React, { Component } from "react";
import "./MyComponent.scss";
import ChildComponent from "./Child/ChildComponent";
import Alert from "./Alert/Alert";
class MyComponent extends Component {
  state = {
    us: "",
    pw: "",
    repw: "",
    checkUser: "",
    checkPass: "",
    checkRePass: "",
    colorU: "",
    colorP: "",
    colorRp: "",
    showRe: false,
    showPass: false,
  };
  arrayCheck = {
    userCheck: false,
    passCheck: false,
  };
  arrayList = [];
  shoot = () => {
    alert("Great Shot!");
  };
  handleOnclickLogin = (event) => {
    event.preventDefault();
    if (this.arrayCheck.userCheck && this.arrayCheck.passCheck) {
      const check = this.arrayList.find((e) => e.user === this.state.us);
      if (!check) {
        this.arrayList.push({ user: this.state.us, pass: this.state.pw });
        console.log(this.arrayList);
        console.log("check var" + check);

        <Alert />;
      } else {
        console.log("Tài khoản đã tồn tại");
        console.log("check var" + check);
      }
    }
  };
  handleChangeUserName = (event) => {
    if (event.target.value.length <= 12) {
      this.setState({
        us: event.target.value.replace(/^\s+|\s+$/gm, ""),
      });
    }
    if (event.target.value.replace(/^\s+|\s+$/gm, "").length < 6) {
      this.setState({
        checkUser: "* Thông tin tài khoản phải từ 6 đến 12 kí tự",
        colorU: "Red",
      });
      this.arrayCheck.userCheck = false;
    } else {
      this.setState({
        checkUser: "* Thông tin tài khoản phù hợp",
        colorU: "Green",
      });
      this.arrayCheck.userCheck = true;
    }
    if (event.target.value === "") {
      this.setState({
        checkUser: "* Thông tin tài khoản không được để trống",
        colorU: "Red",
      });
      this.arrayCheck.userCheck = false;
    }
  };
  handleChangePassword = (event) => {
    if (event.target.value.length <= 12) {
      this.setState({
        pw: event.target.value.replace(/^\s+|\s+$/gm, ""),
      });
    }
    if (event.target.value.replace(/^\s+|\s+$/gm, "").length < 6) {
      this.setState({
        checkPass: "* Thông tin mật khẩu phải từ 6 đến 12 kí tự",
        colorP: "Red",
      });
    } else {
      this.setState({
        checkPass: "* Mật khẩu phù hợp",
        colorP: "Green",
      });
    }

    if (event.target.value === "") {
      this.setState({
        checkPass: "* Thông tin mật khẩu không được để trống",
        colorP: "Red",
      });
    }
  };
  handleChangeRePassword = (event) => {
    if (event.target.value.replace(/^\s+|\s+$/gm, "").length <= 12) {
      this.setState({ repw: event.target.value.replace(/^\s+|\s+$/gm, "") });
    }
    if (
      event.target.value.replace(/^\s+|\s+$/gm, "").length > 5 &&
      event.target.value.replace(/^\s+|\s+$/gm, "").length <= 12
    ) {
      if (event.target.value.replace(/^\s+|\s+$/gm, "") === this.state.pw) {
        this.setState({
          checkRePass: "Mật khẩu trùng khớp",
          colorRp: "Green",
        });
        this.arrayCheck.passCheck = true;
      } else {
        this.setState({
          checkRePass: "Mật khẩu không trùng khớp",
          colorRp: "Red",
        });
        this.arrayCheck.passCheck = false;
      }
    } else {
      this.setState({
        checkRePass: "Mật khẩu không trùng khớp",
        colorRp: "Red",
      });
      this.arrayCheck.passCheck = false;
    }
  };
  handleShowRepass = () => {
    this.setState({
      showRe: !this.state.showRe,
    });
  };
  handleShowPass = () => {
    this.setState({
      showPass: !this.state.showPass,
    });
  };
  render() {
    return (
      <>
        <div className="small-box">
          <div className="label">
            <label htmlFor="userName">Tài khoản:</label>
          </div>
          <input
            className="userName"
            id="userName"
            type="text"
            placeholder="username"
            minLength={6}
            maxLength={12}
            value={this.state.us}
            onChange={(event) => this.handleChangeUserName(event)}
          />
          <div
            className="checkAlert"
            style={{
              color: this.state.colorU,
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {this.state.checkUser}
          </div>
          <div className="label">
            <label htmlFor="password">Mật khẩu:</label>
          </div>
          <div className="Password">
            <input
              className="inputPass"
              id="password"
              type={this.state.showPass === true ? "text" : "password"}
              placeholder="password"
              value={this.state.pw}
              onChange={(event) => this.handleChangePassword(event)}
            />
            <input
              className="showPass"
              type="checkbox"
              onChange={() => this.handleShowPass()}
            ></input>
          </div>

          <div
            className="checkAlert"
            style={{
              color: this.state.colorP,
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {this.state.checkPass}
          </div>
          {/* Repass */}
          <div className="label">
            <label htmlFor="Repassword">Nhập lại mật khẩu:</label>
          </div>
          <div className="Password">
            <input
              className="inputPass"
              id="Repassword"
              type={this.state.showRe === true ? "text" : "password"}
              placeholder="Re-password"
              value={this.state.repw}
              onChange={(event) => this.handleChangeRePassword(event)}
            />
            <input
              className="showPass"
              type="checkbox"
              id="showRePass"
              onChange={() => this.handleShowRepass()}
            ></input>
          </div>
          <div
            className="checkAlert"
            style={{
              color: this.state.colorRp,
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {this.state.checkRePass}
          </div>
          <br></br>
          {/* Repass */}
          <div className="buttonUnderForm">
            <button type="button" onClick={() => this.shoot()}>
              Click me please
            </button>
            <button
              type="button"
              onClick={(event) => this.handleOnclickLogin(event)}
            >
              Đăng ký
            </button>
          </div>
        </div>
        <div>
          Hello my component {this.state.us.length}, My name is {this.state.us}{" "}
          and {this.state.us[0]}
        </div>
        <div>
          My chanel is {this.state.pw} length {this.state.pw.length}
        </div>
        <ChildComponent user={this.state.us} pass={this.state.pw} />
      </>
    );
  }
}
export default MyComponent;
