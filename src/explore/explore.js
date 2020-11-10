import React from 'react'
import Bottom from '../elements/uielements/bottom'
import './explore.css'

function Explore() {
    const Moods =[
        "Romance",
        "Chill",
        "R&B Soul",
        "Dance & electronics",
        "Study",
        "Indie",
        "Oldies",
        "2010s",
        "Workout & Gym",
        "Rock",
        "Malayalam",
        "k-pop & asian"
    ]
    return (
        <>
        <div className="head-mood">
        <img src="./reverb.png" alt="Mood" id="genre-head"/>
        </div>
        <div className="explore">
        <div className="mood">
            {Moods.map((e,i)=><div key={e} className="genres">{e}</div>)}
        </div>
        <div className="footer" style={{height:"180px"}}></div>
        <Bottom/>
        </div>
        </>
    )
}

export default Explore

