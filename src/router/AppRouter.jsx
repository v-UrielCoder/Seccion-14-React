import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { DcPages, MarvelPage } from '../heroes'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
    
      <Navbar />

      <Routes >
        <Route path='marvel' element={<MarvelPage />}/>
        <Route path='dc' element={<DcPages />}/>

        <Route path='login' element={<LoginPage />}/>

        <Route path='/' element={<Navigate to={"/marvel"} />}/>

      </Routes>
    
    </>
  )
}
