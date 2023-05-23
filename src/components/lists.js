import React from 'react'
import { people, recipes } from './data';


function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }


const chemist = people.filter(people => 
    people.profession === 'chemist'
)

const everyOne = people.filter(people => 
    people.profession !== 'chemist'    
)



const listItem = chemist.map(person =>

    <li key={person.id}>
        <h1>Chemist</h1>
       <img 
          src={getImageUrl(person)}
          alt={person.name}
       />

       <p>
         <b>{person.name}:</b>
           {' ' + person.profession  + '' }
            Known for {person.accomplishment}
       </p>  
    </li>
)

const everyOneList = everyOne.map(everyperson => 
    <li key={everyperson.id}>
     <h1>other Scientists</h1>
    <img 
       src={getImageUrl(everyperson)}
       alt={everyperson.name}
    />

    <p>
      <b>{everyperson.name}:</b>
        {' ' + everyperson.profession  + '' }
         Known for {everyperson.accomplishment}
    </p>  
 </li>
)

function Lists() {
  return (
    <article>

      {listItem}
      {everyOneList}
    
    { recipes.map(recipe => 
      <div key={recipe.id}>
         <h1>{recipe.name}</h1>
          <ul>
              {recipe.ingredients.map(ingredient => 
                <li key={ingredient.id}>
                    {ingredient}
                </li>
                )}
          </ul>
      </div>
    )
    }
   
    </article>
  )
}

export default Lists