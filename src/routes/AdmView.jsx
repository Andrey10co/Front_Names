import React from 'react'
import RegisterName from '../component/RegisterName'
import NameList from '../component/NameList'
import NanVarUserView from '../component/NanVarUserView'

function AdmView() {
  return (
    <div>
      <NanVarUserView/>
      <RegisterName/>
      <NameList/>
    </div>
    
  )
}

export default AdmView