import React, { useRef } from 'react'

const GlowCard = ({card, children,index}) => {

    const cardRefs = useRef([]);

    const handleMouseMove =(index) => (e) =>{
        const card= cardRefs.current[index];
        if(!card) return ;

        //Get mouse position relative to the card
        const rect= card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width /2;
        const mouseY = e.clientY - rect.top - rect.width /2;

        //calc angle of mouse pointer from the center of the card
        let angle= Math.atan2(mouseY, mouseX)*(180/ Math.PI);

        angle=(angle+360) % 360;

        card.style.setProperty('--start', angle+60)
    }
  return (
    <div ref={(el)=>(cardRefs.current[index]=el)} 
    onMouseMove={handleMouseMove(index)}
    className='card card-border timeline-card rounded-xl p-10'>
        < div className='glow' /> 
        {/* <div>
            {Array.from({length:5}, (_, i)=>(
                img
            ))}
        </div> */}

      <div className='mb-5'>
          <p className='text-white-50 rext-lg'>{card.review}</p>  
      </div>
      {children}
    </div>
  )
}

export default GlowCard
