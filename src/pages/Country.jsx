
import { useTransition, useEffect, useState } from 'react';
import { getCountryData } from '../api/postApi';
import { Loader } from '../component/UI/Loader';
import { CountryCard } from '../component/Layout/CountryCard';
import '../App.css';

export const Country = ()=>{

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);


  useEffect( ()=>{

    startTransition( async() => {
      const res = await getCountryData();
      setCountries(res.data)
      console.log(res);
    })

    
    
    if(isPending) return <Loader />;

    

  }, [] );


    return(
        <>
           <section className="sectionPadding countrySection">
              <div className="container">
                <div className="text-center">
                    <h2>Country List</h2>
                </div>
                <div className="row mt-4">
                  {
                    countries.map((curCountry, index)=>{                      
                      return <CountryCard country={curCountry} key={index} />                    
                    }
                   )
                  }                   
                 </div>
              </div>
            </section>
        </>
    )
}