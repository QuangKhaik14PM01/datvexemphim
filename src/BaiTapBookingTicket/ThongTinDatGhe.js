import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button
            className="gheDuocChon"
            style={{ marginLeft: "-29px" }}
          ></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đã đặt
          </span>
          <br></br>
          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đang đặt
          </span>
          <br></br>
          <button className="ghe" style={{ marginLeft: "0" }}></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border='3'>
            <thead>
              <tr className="text-light" style={{fontSize:'35px'}}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>

             
              </tr>
            </thead>
            <tbody>
                
            <tr >
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>

             
              </tr> 
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>

             
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
