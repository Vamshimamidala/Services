import React, { useState } from 'react'

const Bookservices = () => {
    const [cat,setCat]=useState("");
    const [subname, setSubname]= useState("");
    const [servicename,setServicename]= useState("");
    const [name,setName]= useState("")
    const [phone,setPhone] = useState("");
    const [email,setEmail]=useState("");
    const [subject,setSubject] = useState("")
  return (
    <div>
        <section>
            <div className='container bookserices'>
                <div className='row'>
                    <div className='col-md-12'>
                    <h1>Book services</h1>
                    </div>
                </div>
            </div>
        </section>
      <section>
        <div className='container bookser'>
            <div className='row'>

                <div className='col-md-4'>
                    <form>
                        
                    <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter caterogy name "
                      className="form-control p-3"
                      value={cat}
                      onChange={(e) => setCat(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Sub caterogy name"
                      className="form-control p-3"
                      value={subname}
                      onChange={(e) => setSubname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Serive provider"
                      className="form-control p-3"
                      value={servicename}
                      onChange={(e) => setServicename(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="form-control p-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter your phone"
                      className="form-control p-3"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="form-control p-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter your subject"
                      className="form-control p-3"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                       className='btn btn-danger'
                    />
                  </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Bookservices
