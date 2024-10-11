import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryCard = ({country}) => {
    const{ name, population, region, capital, flags} = country;
    return(
        <>  
            <div className="col-md-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <div>
                           <img src={flags.svg} alt={flags.alt} /> 
                        </div>
                        <div className="mt-3">
                            <h4 className="card-title">{name.common.length > 20 ? `${name.common.slice(0,20)}...` : name.common }</h4>
                            <p className="card-text mb-1 font14"> <span className="text-secondary">Capital: <i className="text-white">{capital[0]}</i></span></p>
                            <p className="card-text mb-1 font14"><span className="text-secondary">Population: <i className="text-white">{population.toLocaleString()}</i></span> </p>
                            <p className="card-text mb-1 font14"><span className="text-secondary">Region: <i className="text-white">{region}</i></span></p>
                        
                           <div className="mt-3">
                            <NavLink to={`/country/${name.common}`} className="btn btn-primary py-1 font14" >Read More <FaLongArrowAltRight /></NavLink>
                           </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};