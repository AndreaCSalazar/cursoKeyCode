import Btn from "../../Btn";
import "./card.scss";

const handlePaymentClick = () =>{
  console.log("Proceeding to payment...!")
}

const handleCancelClick =() => {
  console.log("Order canceled!")
}
const Card = () => {
  return (
    <>
      <section src="../../images/pattern-background-desktop.svg"className='card'>
        <div>
          <figure>
              <img src="../../../../images/illustration-hero.svg"/>
          </figure>
        <h2>Order Summary</h2>
        <p>You can now listen to millions of songs, audiobooks, 
          and podcasts on any device anywhere you like!</p>
    
      
        <article>
          <img src="../../images/icon-music.svg"/> 
          <strong>Annual Plan</strong>
        $59.99/year
          <a href="../pages/Plans">change</a>
        </article> 
      </div>
      <div className="containerBtn">
          <Btn
          text="Proceed to payment" 
          onClick={handlePaymentClick}/>

          <Btn
          text="Cancel order" 
          bgColor="white" 
          onClick={handleCancelClick}
          txColor="black"
          />
          
      </div>
        
    </section>
    </>
  );
};

export default Card;