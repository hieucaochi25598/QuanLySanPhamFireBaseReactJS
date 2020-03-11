import * as firebase from "firebase";
import { LAY_DANH_SACH_SAN_PHAM, THEM_SAN_PHAM, SAN_PHAM_DANG_CHON, ON_TOGGLE_MODAL, SUA_SAN_PHAM, XOA_SAN_PHAM } from "../constants/QuanLySanPham";
export const layDanhSachSanPham = () => {
  return dispatch => {
    var data = firebase.database().ref("danhSachSanPham/");
    data.once("value").then(function(snapshot) {
      let danhSachSanPham = []
      // console.log(snapshot)
      snapshot.forEach(element => {
        const tenSP = element.val().tenSP
        const maSP = element.key
        const namSX = element.val().namSX
        danhSachSanPham.push({
          tenSP: tenSP,
          maSP: maSP,
          namSX: namSX,
        })
      })
      console.log(danhSachSanPham)
      dispatch(layDanhSachSanPhamAction(danhSachSanPham))
    });
  
  };
};
export const layDanhSachSanPhamAction = (danhSach) => {
    return {
        type: LAY_DANH_SACH_SAN_PHAM,
        data: danhSach
    }
}
export const themSanPham = (sanPham) => {
  return (dispatch, getState) => {
    var data = firebase.database().ref(`danhSachSanPham/${sanPham.maSP}`);
    data.set({
      tenSP: sanPham.tenSP,
      namSX: sanPham.namSX
    }).then(function(snapshot) {
      console.log('Them thanh cong')
      dispatch(themSanPhamAction(sanPham))
      dispatch(layDanhSachSanPham())
    });
  }
}
export const themSanPhamAction = (sanPham) => {
  return {
    type: THEM_SAN_PHAM,
    data: sanPham
  }
}
export const sanPhamDangChonAction = (sp) => {
  return {
    type: SAN_PHAM_DANG_CHON,
    data: sp
  }
}
export const onToggleModal = (status) => {
  return {
    type: ON_TOGGLE_MODAL,
    data: status
  }
}
export const suaSanPham = (sp) => {
  return (dispatch, getState) => {
    const {sanPhamDangChon} = getState().quanLySanPhamReducer
    var data = firebase.database().ref(`danhSachSanPham/${sanPhamDangChon.maSP}`);
    data.set(sp).then(function(snapshot) {
      console.log('Sua thanh cong')
      dispatch(suaSanPhamAction(sp))
    });
  }
}
export const suaSanPhamAction = (sp) => {
  return {
    type: SUA_SAN_PHAM,
    data: sp
  }
}

export const xoaSanPham = (maSP) => {
  return (dispatch, getState) => {
    var data = firebase.database().ref('danhSachSanPham/');
    data.child(maSP).remove().then(function(snapshot) {
      console.log('Xoa thanh cong')
      dispatch(xoaSanPhamAction(maSP))
    });
  }
}
export const xoaSanPhamAction = (maSP) => {
  return {
    type: XOA_SAN_PHAM,
    data: maSP
  }
}