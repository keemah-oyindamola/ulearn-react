import React,{useState} from 'react'
import './Landingpg.css'
import pic from './udemy.jpg'
import udemypic from './udemypic.jpeg'

const images = [
    pic,udemypic
]

const Landingpg = () => {
    const [index, setIndex] = useState(0)


     
    const prevpic = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? images.length - 1 : newIndex);
    };

    const nextpic = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= images.length ? 0 : newIndex);
    };
    // const prevpic = ()=>{
    //     const newIndex = index - 1;
    //     setindex(newIndex < 0 ? images.length - 1 : newIndex);
    // //     setindex((previndex)=>
    // //     previndex === images.length - 1 ? 0 : previndex + 1 
    // // )
    // }
    return (
        <>
            <div className='maainn-div'>
                <div className='pic-div'>
                    <img src={images[index]} alt="" />
                </div>
                <div>
                    <div className='text-overlay-carosel'>
                    <span onClick={prevpic} class="material-symbols-outlined">arrow_back_ios</span> 
                    </div>
                    <div  className='text-overlay'>
                    <h1>Skills that drive you <br /> forward</h1>
                    <p>Technology and the world of work change fast — with <br /> us, you’re faster. Get the skills to achieve goals and <br /> stay competitive.</p>
                    <button>Plan For Organizations</button>
                    </div>
                    <div className='text-overlay-carousel'>
                    <span onClick={nextpic} class="material-symbols-outlined">arrow_forward_ios</span> 
                    </div>
                </div>

                <div className='seconddiv'>
                    <h3>Trusted by over 16,000 companies and millions of learners around the world</h3>
                </div>
            </div>
        </>
    )
}

export default Landingpg