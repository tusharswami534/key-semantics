import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='bg-black-rock py-6'>
        <div className="container justify-between flex items-center mx-auto">
            <p className='text-xs text-moody-blue leading-225 '>©{year} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland</p>
            <a className='text-moody-blue leading-225 text-xs underline' href="mailto:info@keysemantics.ch">
            info@keysemantics.ch
            </a>
        </div>
    </div>
  )
}

export default Footer
