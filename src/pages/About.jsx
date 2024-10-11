
import countryFacts from '../api/countryData.json';

export const About = ()=>{

    // console.log(countryFacts)

    return(
        <>
        <section className="sectionPadding">
            <div className="container">
                <div className="text-center">
                    <h2>Here are the intresting  <br /> Facts We're proud of</h2>
                </div>
                <div className="row mt-5">
                    {
                    countryFacts.map((country)=>{

                        const{id,country_name,population,interesting_facts} = country;

                        return(
                        <div className="col-md-3 mb-3" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">India</h4>
                                    <p className="card-text mb-1 font14"><span className="text-secondary">Capital:</span> {country_name}</p>
                                    <p className="card-text mb-1 font14"><span className="text-secondary">Population:</span> {population}</p>
                                    <p className="card-text mb-1 font14"><span className="text-secondary">Interesting Facts:</span> {interesting_facts}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                    }                   
                </div>
            </div>
        </section>
        
        </>
    )
}