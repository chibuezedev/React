import React, {Fragment, useEffect, useState} from 'react'
import { createApi } from 'unsplash-js'
import './UpSplash.css'

const api = createApi({
    accessKey: "lrI3GUyA6CwxBDUokWdyEIlhEPmhxFWxT7YjcFh6hxQ"
})

const PhotoCamp = ({ photo }) => {
    const {user, urls} = photo;
   
    return (
       <Fragment>
           <img className="img" src={urls.regular} alt='' />
           <a
             className="credit"
             target='_blank'
             href={`https://unsplash.com/@${user.username}`} rel="noreferrer"
           >
               {user.name}
           </a>
       </Fragment>
    )}

function UnSplash() {
const [data, setData] = useState(null)

useEffect(() => {
    api.search
      .getPhotos({ 
        query: "celebrities", 
        orientation: "landscape",
        per_page: 50
    })
      .then(result => {
        setData(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

if (data === null){
    return <div>Loading...</div>
} else if(data.errors){
    return (
<div className='error'>
    <div>{data.errors[0]}</div>
    <div>PS: Make sure to set your access token!</div>
  </div>
)

} else {
   return (
    <div className='feed'>
        <ul className='columnUl'>
            {data.response.results.map(photo => (
            <li key={photo.id} className='li'>
                <PhotoCamp photo={photo}/>
            </li>
            ))}
        </ul>
    </div>
   )
}

}

export default UnSplash