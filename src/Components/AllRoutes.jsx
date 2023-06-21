import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HRA from '../Pages/HRA/HRA'
import AdvTax from '../Pages/AdvTax/AdvTax'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HRA />} />
      <Route path='/adv-tax' element={<AdvTax />} />
    </Routes>
  )
}

export default AllRoutes