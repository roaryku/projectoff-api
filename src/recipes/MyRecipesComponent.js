import icon from './checked.png'

function MyRecipesComponent({label, image, calories, ingredients, time, diet}){
    return(
        <div>
            <div className="containerRecipes">
               <h2>{label}</h2>

               <div className="containerRecipes">
                  <img className="tastyRecipe" src={image} alt="food"/>

                  <ul className="containerRecipes">
                    {ingredients.map((ingredient, index) => (
                        <li className='liRecipe' key={index}>
                            <img className="icon" src={icon} alt='icon'/>
                            {ingredient}</li>
                    ))}
                  </ul>

                  <div className="ontainerRecipes">
                   <p className="par">{diet} minutes</p>
               </div>

                <div className="containerRecipes">
                    <p className='par'>{calories.toFixed()} Calories</p>
                </div>

                <div className="ontainerRecipes">
                   <p className="par">{time} minutes</p>
               </div>

              </div> 
           </div>
        </div>
    )
}
export default MyRecipesComponent;