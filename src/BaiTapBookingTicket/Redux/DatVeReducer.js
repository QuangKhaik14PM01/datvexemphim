const stateDefault = {
  danhSachGheDangDat: [ ],
};

const DatVeReducer =(state=stateDefault,action)=>{
switch(action.type){
case 'DAT_GHE':{
  let danhSachGheDangDatUpdate=[...state.danhSachGheDangDat];
  let index=danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe===action.ghe.soGhe);
  if(index!==-1){
  danhSachGheDangDatUpdate.splice(index,1);
  }
  state.danhSachGheDangDat=danhSachGheDangDatUpdate;
return {...state}
}
  default: return {...state}

}
}

export default DatVeReducer;
