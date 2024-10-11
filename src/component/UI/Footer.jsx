
import footerApi from '../../api/footerApi.json'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import {NavLink} from 'react-router-dom'

export const Footer = ()=>{

    const footerIcon = {
        MdPlace : <MdPlace />,
        IoCallSharp : <IoCallSharp />,
        TbMailPlus : <TbMailPlus />
    };


    return(
        <>
        <footer>
            <div className='footerTop'>
                <div className='container'>
                    <div className='row'>
                        {
                            footerApi.map((curData, index)=>{

                                const {icon, title, detail} = curData;

                                return(
                                <div className='col-md-4' key={curData.id}>
                                    <div className='d-flex'>
                                        <div>
                                        <p className='text-white iconFoot'>{footerIcon[icon]}</p>
                                        </div>
                                        <div className='ms-3'>
                                            <p className='mb-0 text'>{title}</p>
                                            <p className='mb-0 text'>{detail}</p>
                                        </div>
                                    </div>
                                </div>
                                )                            
                            }
                            )
                        }
                        
                    </div>
                </div>
            </div>
            <div className='footerBottom bg-dark'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='py-3'>
                                <p className='mb-0 font14'>Designed by <NavLink to="https://kundanpandey065.github.io/cv" target='_blank'>Kundan Pandey</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}