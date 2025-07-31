import React, { useRef, useState, useEffect } from 'react';
import { counterItems } from '../constants';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const containerRef = useRef();
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 70%',
      once: true,
      onEnter: () => setStartCount(true),
    });
  }, []);

  return (
    <div id='counter' ref={containerRef} className='padding-x-lg xll:mt-0 mt-32'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item) => (
          <div key={item.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
            <div className='counter-number text-white text-5xl font-bold mb-2'>
              {startCount ? (
                <CountUp suffix={item.suffix} end={item.value} duration={2} />
              ) : (
                `0${item.suffix}`
              )}
            </div>
            <div className='text-white-50 text-lg'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
