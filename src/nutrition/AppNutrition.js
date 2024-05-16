import { useEffect, useState } from 'react';
import video from './nutrition.mp4';
import { Nutrition } from './Nutrition';
import { LoaderPage } from './LoaderPage';
import Swal from 'sweetalert2';


function AppNutrition() {

  const [mySearch, setMySearch] = useState();
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [myNutrition, setMyNutrition] = useState();
  const [stateLoader, setStateLoader] = useState(false);

  const APP_ID = "8f7cf633";
  const APP_KEY = "12cc09660b22059c90771dd7b38a6ee1";
  const APP_URL = "https://api.edamam.com/api/nutrition-details";

  const fetchData = async (ingr) => {
    setStateLoader(true);

    const response = await fetch(`${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingr: ingr })
    })

    if(response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setMyNutrition(data);
    } else {
      setStateLoader(false);
      Swal.fire("Ingredients entered incorectly!");
    } 
  }

  const myRecipeSearch = e => {
    setMySearch(e.target.value);
  }

  const finalSearch = e => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  useEffect(() => {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted?.split(/[,,;,\n,\r]/);
      fetchData(ingr);
    }
  }, [wordSubmitted])

return (
    <div className='bodyNutrition'>
    {stateLoader && <LoaderPage/>}

        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4"/>
        </video>

    <h1 className='headerNutrition'>Nutrition Analysis</h1>
    <p className='parNutr'>You have to type the quantity first and than the name of the ingredient, otherwise would not work.</p>
    <form className='formNutrition' onSubmit={finalSearch}>
      <input className='inputNutrition'
        placeholder="Search..."
        onChange={myRecipeSearch}
      />
      <button type="submit" className='btnNutrition'>Search</button>
    </form>
    <div className="parContainer-nutr">
      {
        myNutrition && <p className='parNutrition'>{myNutrition.calories} total kcal</p>
      }
       {
        myNutrition && <p className='parNutrition'>{myNutrition.totalWeight.toFixed(2)} total gramms</p>
      }
      {
        myNutrition && Object.values(myNutrition.totalNutrients)
          .map(({ label, quantity, unit}, index) =>
            <Nutrition
              key={index}
              label={label}
              quantity={quantity}
              unit={unit}
            />
          )
      }
    </div>
  </div>
  );
}

export default AppNutrition;