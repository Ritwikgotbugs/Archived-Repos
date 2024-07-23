import React from 'react'

interface HeaderProps {
    page: String,
}
export default function Header({page}: HeaderProps) {
  return (
    <div className='text-white text-3xl py-3'>{page}</div>
  )
}
