import { FaLongArrowAltRight } from "react-icons/fa";


export const HeroSection = ()=>{
    return(
        <>
        <section className="sectionPadding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h1>Explore the world. One country at a time</h1>
                            <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            <button className="btn btn-primary">Start Exploring <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img src='/images/hero.png' alt="hero_img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}