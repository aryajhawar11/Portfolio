import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'




gsap.registerPlugin(ScrollTrigger);
const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
  const ctx = gsap.context(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });

    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, sectionRef);

  return () => ctx.revert(); // 👈 Clean up on unmount
}, []);


    return (
        <div id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                       <a href="https://forever-frontend-gamma-six.vercel.app/" target='_blank'><div className='image-wrapper'>
                            <img src="/images/Forever_project.png" alt="" />
                        </div> </a> 

                        <div className='text-content'>
                            <a href="https://forever-frontend-gamma-six.vercel.app/" target='_blank'><h2>Forever - A Seamless E-Commerce Experience with Smart Payments and Order Management.</h2></a>
                            <p className='text-white-50 md:text-xl'>Forever is a full-stack e-commerce web app that offers a seamless shopping experience with dynamic product displays, secure authentication, smart cart handling, and integrated payment options like Stripe and Cash on Delivery. It features a responsive user interface, real-time order placement, and an admin dashboard for efficient order management. Built using React.js, Node.js, Express, and MongoDB, Forever is designed for performance, scalability, and ease of use.</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                           <a href="https://knowfootball.vercel.app/" target='_blank'> <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/KnowFootball_project.png" alt="AI-powered Football Assistant" />
                            </div>
                            <h2>KnowFootball - AI-Powered Football Assistant </h2> </a>

                        </div>

                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/Pulse_chat_project.png" alt="Pulse Chat" />
                            </div>
                           <a href="https://github.com/aryajhawar11/Chat-App" target='_blank'> <h2>PulseChat – Real-Time Chat App </h2></a>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ShowCaseSection
