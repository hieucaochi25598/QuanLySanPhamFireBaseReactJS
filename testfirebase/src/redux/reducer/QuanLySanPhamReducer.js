import { LAY_DANH_SACH_SAN_PHAM, THEM_SAN_PHAM, SAN_PHAM_DANG_CHON, ON_TOGGLE_MODAL, SUA_SAN_PHAM, XOA_SAN_PHAM } from "../constants/QuanLySanPham"

const initialStates = {
    danhSachSanPham: [],
    sanPhamDangChon: {},
    isOpen: false
}
const quanLySanPhamReducer = (state = initialStates, action) => {
    switch(action.type){
        case LAY_DANH_SACH_SAN_PHAM:
            {
                return {...state, danhSachSanPham: action.data}
            }
        case THEM_SAN_PHAM: 
        {
            const danhSachSanPham = [...state.danhSachSanPham]
            danhSachSanPham.push(action.data)
            return {...state, danhSachSanPham}
        }
        case SAN_PHAM_DANG_CHON:
            {
                return {...state, sanPhamDangChon: action.data}
            }
        case ON_TOGGLE_MODAL: 
        {
            return {...state, isOpen: action.data}
        }
        case SUA_SAN_PHAM:{
            const danhSachSanPham = [...state.danhSachSanPham]
            const sanPhamDangChon = {...state.sanPhamDangChon}
            const index = danhSachSanPham.findIndex(item => item.maSP === sanPhamDangChon.maSP)
            if(index !== -1){
                danhSachSanPham[index].tenSP = action.data.tenSP
                danhSachSanPham[index].namSX = action.data.namSX
            }
            return {...state, danhSachSanPham}
        }
        case XOA_SAN_PHAM: {
            const danhSachSanPham = [...state.danhSachSanPham]
            const index = danhSachSanPham.findIndex(item => item.maSP === action.data)
            if(index !== -1) {
                danhSachSanPham.splice(index, 1)
                console.log(danhSachSanPham)
            }
            return {...state, danhSachSanPham}
        }
        default:
            return state
    }
}
export default quanLySanPhamReducer