import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachSanPham, themSanPham, sanPhamDangChonAction, suaSanPham, onToggleModal, xoaSanPham } from "../../redux/actions/QuanLySanPham";
import {Formik, Form, useField} from 'formik'
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const DanhSachSanPham = () => {
  const dispatch = useDispatch();
  const { danhSachSanPham, sanPhamDangChon, isOpen } = useSelector(state => state.quanLySanPhamReducer);
  useEffect(() => {
    dispatch(layDanhSachSanPham());
  }, []);
  const MyInput = ({...props}) => {
    const [field, meta] = useField(props)
    return <input {...field} {...props}/>
  }
 
  
  return (
    <div>
      <h2>Danh sach san pham</h2>
      <Modal isOpen={isOpen} toggle={() => dispatch(onToggleModal(false))} >
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
        <Formik
      initialValues={
        {
          maSP: '',
          tenSP: '',
          namSX: ''
        }
      }
      onSubmit={values => dispatch(suaSanPham(values))}>
        {({handleSubmit}) => 
        <Form>
        
        <label>Ma SP</label>
          <MyInput type="text" name="maSP"/>
          <label>Ten SP</label>
          <MyInput type="text" name="tenSP"/>

          <label>Nam Sx</label>
          <MyInput type="text" name="namSX"/>
          
          <button className="btn btn-success" onClick={handleSubmit}>them san pham</button>
        </Form>
        }
      </Formik>
        </ModalBody>
      
      </Modal>
      
      <Formik
      initialValues={
        {
          maSP: '',
          tenSP: '',
          namSX: ''
        }
      }
      onSubmit={values => dispatch(themSanPham(values))}>
        {({handleSubmit}) => 
        <Form>
        
        <label>Ma SP</label>
          <MyInput type="text" name="maSP"/>
          <label>Ten SP</label>
          <MyInput type="text" name="tenSP"/>

          <label>Nam Sx</label>
          <MyInput type="text" name="namSX"/>
          
          <button className="btn btn-success" onClick={handleSubmit}>Them san pham</button>
        </Form>
        }
      </Formik>
      <div className="row">
        {danhSachSanPham.length !== 0 &&
          danhSachSanPham.map(item => (
            <div key={item.maSP} className="card col-3">
              <div className="card-body">
                <h4 className="card-title">{item.tenSP}</h4>
                <p className="card-text">{item.namSX}</p>
                <button className="btn btn-danger" onClick={() => dispatch(xoaSanPham(item.maSP))}>Xoa san pham</button>
                <button className="btn btn-success" onClick={() => {dispatch(sanPhamDangChonAction(item)); dispatch(onToggleModal(true))}}>Sua san pham</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default DanhSachSanPham;
