import React, { Component, Fragment } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "./Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={{index}} >
          <HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/BookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning display-4">
                  ĐẶT VÉ XEM PHIM CYBERSOFT
                </h1>
                <div className="mt-5 text-light" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <div style={{ fontSize: "35px" }} className="text-light mt-2">
                  DANH SÁCH GHẾ BẠN CHỌN{" "}
                </div>
                <ThongTinDatGhe></ThongTinDatGhe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
