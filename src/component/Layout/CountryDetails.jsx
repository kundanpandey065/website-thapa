import { useTransition, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {getCountryIndData} from '../../api/postApi'
import { Loader } from "../UI/Loader";
import axios from 'axios';



export const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();



    useEffect( ()=>{
        startTransition( async() => {
          const res = await getCountryIndData(params.id);
          setCountry(res.data[0])
          console.log(res.data[0]);
        })
        if(isPending) return <Loader />;
      }, [] );


    console.log("Country: ",country);
   
    if (isPending) return <Loader />

    return(
        <>
            <section>
                <div>
                    <h2>{country.name.common}</h2>
                </div>
            </section>
        </>
    );

}