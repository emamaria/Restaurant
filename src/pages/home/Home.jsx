import React from 'react'

const Home = () => {
  return (
    <div className="home_container">
      <section className="par1">
      <div className="par_text">
        <h1 className="title">Delizioso</h1>
        <h2 className="sub_title">Restaurante Italiano</h2>
      </div>
    </section>
    <section className="par2">
      <div className="par_text">
        <p className="menu">Nuestra carta</p>
        <button>Carta</button>
      </div>
    </section>
    <section className="par3">
      <div className="par_text">
        <p className="reservation">Haz tu reseva</p>
        <button>Reserva</button>
      </div>
    </section>
    </div>
  )
}

export default Home