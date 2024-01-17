import React, { useEffect } from 'react'
import { fetchCastDetail } from './detailSlice'
import {useDispatch , useSelector} from 'react-redux'
import config from '../../config'

function CastCard({id}) {
    const dispatch = useDispatch()
    const { cast} = useSelector((state)=> state.details)
    console.log(cast)
    useEffect(()=>{
       dispatch(fetchCastDetail({id:id})) 
    },[dispatch, id])
  return (
    <div className="cast-container">
       { cast?.map((el , i)=> (
            <div key={i} className="cast-card">
            <img className='image' src={`${config.IMAGE_URL}/${el.profile_path}`} alt='itemmm'/>
            <span>{el.name}</span>
            <span>character: {el.character}</span>
           
        </div>
        ))
       }
</div>
  )
}

export default CastCard