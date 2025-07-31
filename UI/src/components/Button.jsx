import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, className, id}) => {
    return (
        <a className={`${className ?? ''} cta-wrapper`} onClick={(e)=>{
            e.preventDefault();

            const target= document.getElementById('counter');

            if(target && id){
                const offset= window.innerHeight*0.15;

                const top= target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({top, behavior:'smooth' })
            }
        }} >
            <div className='cta-button mt-6 group'>
                <div className='bg-circle' />
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
}

export default Button
