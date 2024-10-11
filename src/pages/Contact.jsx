

export const Contact = ()=>{

        const handleFormSubmit = (formData) => {

            // console.log(formData.entries());

            const formInputData = Object.fromEntries(formData.entries());
            console.log(formInputData);

            // formData.preventDefault();
        }

    return(
        <>
         <section className="sectionPadding">
            <div className="container">
                <div className="text-center">
                    <h2>Contact Us</h2>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mb-3"></div>
                    <div className="col-md-4 mb-3">
                        <form action={handleFormSubmit}>
                            <div className="mb-3 mt-3">
                                <input 
                                type="text" 
                                className="form-control py-3" 
                                placeholder="Type your name" 
                                name="username"
                                autoComplete='false' 
                                required
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <input 
                                type="email" 
                                className="form-control py-3" 
                                placeholder="Type your email" 
                                name="email" 
                                autoComplete='false' 
                                required
                                />
                            </div>
                            <div className="mb-3">
                                <textarea  
                                className="form-control py-3" 
                                placeholder="Type your message" 
                                rows="4"
                                name="message"
                                autoComplete='false' 
                                required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning w-100 fw-bold py-3">Submit</button>
                        </form>
                    </div>      
                </div>
            </div>
        </section>
        </>
    )
}