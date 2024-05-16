import video from './home.mp4';

function Home (){
   return(
    <div>
        <div>
          <video autoPlay muted loop playsInline>
            <source src={video} type='video/mp4'/>
          </video>

          <div className='HomeHeader'>
             <h1 className='AppHome'>Live A Healthy Lifestyle!</h1>
            <p className='AppPar'>Cook from the comfort of your home with our delicious recipes.</p>
            <p className='AppPar'>We offer you food recipes and nutrition analysis app.</p>
            <p className='menu'>Please click the menu on top to choose the perfect link for you</p>
        </div>
    </div>
    </div>
   )
}
export default Home;
