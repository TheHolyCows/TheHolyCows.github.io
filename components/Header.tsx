import React, { useEffect, useRef } from 'react'

function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const emptyDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current && emptyDivRef.current) {
      emptyDivRef.current.style.height = `${headerRef.current.offsetHeight}px`
    }
  }, [headerRef, emptyDivRef])

  return (<>
    <div 
      className='bg-brand-black text-white py-4 fixed top-0 left-0 w-screen z-10'
      ref={headerRef}
    >
      <a
        href='/'
      >
        <img 
          src='/assets/Cowhead-White.png'
          className='w-7 ml-2'
        />
      </a>
    </div>
    <div ref={emptyDivRef}></div>
  </>)
}

export default Header