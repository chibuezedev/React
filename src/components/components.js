import React from 'react'
import Card from './Card';


function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  
function Avatar({person, size}) {
    return (
        <img 
        className='avatar'
        src={getImageUrl(person)}
        alt={person.name}
        height={size}
        weight={size}
        />      
    )
}

function Detail({profile, age}) {
    return(
        <div>
            <h1>{profile.name}</h1>
            <h3>Biography: {profile.bio}</h3>
            <h3>Age: {age}</h3>
           
        </div>
    )
}

export default function Persons() {

  return (
      <><Card>
          <Avatar
              size={100}
              person={{
                  name: "Paul Chibueze",
                  imageId: "YfeOqp2"
              }} />
          <Detail
              profile={{
                  name: "Paul Chibueze",
                  bio: "Software developer",
              }}
              age={100} />
         </Card>
      <Card>
              <Avatar
                  size={80}
                  person={{
                      name: "Paul Chibueze",
                      imageId: "OKS67lh"
                  }} />
              <Detail
                  profile={{
                      name: "Peter",
                      bio: "Politician",
                  }}
                  age={79} />
          </Card><Card>
              <Avatar
                  size={50}
                  person={{
                      name: "Paul Chibueze",
                      imageId: "1bX5QH6"
                  }} />
              <Detail
                  profile={{
                      name: "Festus",
                      bio: "Writer",
                  }}
                  age={68} />

          </Card>
          
          </>
  )
}


