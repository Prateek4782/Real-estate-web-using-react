
import './App.css';
import Header from './Components/Header'
import  {Estates} from './Components/Estates';

const realEstateData = [
  {
    image: "estate1.jpg",
    title: "Luxury Villa in Malibu",
    price: 15000,
    location: "Malibu, California",
  },
  {
    image: "estate2.jpg",
    title: "Beachfront Apartment in Miami",
    price: 3500,
    location: "Miami, Florida",
  },
  {
    image: "estate3.jpg",
    title: "Modern Condo in Downtown LA",
    price: 5000,
    location: "Los Angeles, California",
  },
  {
    image: "estate4.jpg",
    title: "Rustic Farmhouse in Tuscany",
    price: 12000,
    location: "Tuscany, Italy",
  },
  {
    image: "estate5.jpg",
    title: "Penthouse in New York City",
    price: 10000,
    location: "New York, New York",
  },
  {
    image: "estate6.jpg",
    title: "Historic Mansion in Boston",
    price: 8000,
    location: "Boston, Massachusetts",
  },
  {
    image: "estate7.jpg",
    title: "Sleek Modern Apartment in Paris",
    price: 9000,
    location: "Paris, France",
  },
  {
    image: "estate8.jpg",
    title: "Charming Cottage in Cape Cod",
    price: 6000,
    location: "Cape Cod, Massachusetts",
  },
  {
    image: "estate9.jpg",
    title: "Luxury Penthouse in San Francisco",
    price: 12000,
    location: "San Francisco, California",
  },
  {
    image: "estate10.jpg",
    title: "Contemporary Loft in Chicago",
    price: 4000,
    location: "Chicago, Illinois",
  },
  {
    image: "estate11.jpg",
    title: "Mediterranean Villa in Spain",
    price: 9000,
    location: "Costa del Sol, Spain",
  },
  {
    image: "estate12.jpg",
    title: "Spectacular Oceanfront Home in Hawaii",
    price: 20000,
    location: "Maui, Hawaii",
  },
  {
    image: "estate13.jpg",
    title: "Rustic Cabin in the Rockies",
    price: 6000,
    location: "Rocky Mountains, Colorado",
  },
  {
    image: "estate14.jpg",
    title: "Luxury Condo in Dubai",
    price: 15000,
    location: "Dubai, UAE",
  },
  {
    image: "estate15.jpg",
    title: "Modern Mansion in Beverly Hills",
    price: 18000,
    location: "Beverly Hills, California",
  },
  {
    image: "estate16.jpg",
    title: "Chic Loft in SoHo",
    price: 7000,
    location: "New York, New York",
  },
];




function App() {
  return (
    <div className="App">
    <Header/>

{
  realEstateData.map((item)=>{
    return <Estates image={item.image} title={item.title} price={item.price} location={item.location}/>
    
  })
}

    </div>
  );
}

export default App;
