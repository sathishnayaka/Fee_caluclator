import './App.scss';
import { useEffect, useState } from 'react';
import Data from './data.json';


function App() {
  const [dataObj, setData] = useState({});
  const [countries, setCountries]=useState([]);
  const [fees, setFees] = useState('');
  const [selectedCountry, setSelectedCountry]=useState('');
  const [course, setCourse] = useState('');
  const [level, setLevel]=useState('');
  const [fee, setFee]=useState(null);
  const getDatafromUrl = async()=>{
    console.log(Data);
    const d= (JSON.stringify(Data))
    const d2= JSON.parse(d);
    setData(d2);
  }
  useEffect(()=>{
    getDatafromUrl();
  },[])

  useEffect(()=>{
    if(fees === "Exam Fee"){
      const arr =["INDIAN",'FOREIGN','NRI','SAARC'];
      setCountries(arr);
    }
    if(fees === "Application Fee"){
      let arr =['INDIAN','FOREIGN'];
      setCountries(arr);
    }
    if(fees === '') {
      setCountries([])
      setSelectedCountry('')
      setFee(null);
    }
  },[fees])
  const handleSubmit = () =>{
    if(fees === 'Exam Fee'){
    let estimatedfee = dataObj[`${fees}`][`${selectedCountry}`]["ALL_COURSES​"]['ALL_LEVEL​']["amount"];
    setFee(estimatedfee);
    }else{
      let estimatedfee =  dataObj[`${fees}`][`${selectedCountry}`]["ALL_COURSES​"][`${level}`]["amount"]
      setFee(estimatedfee);
    }
  }
  return (
    <>
    <div className="cantainer">
      <div>
        <h1>fee caluclator</h1>
      </div>
      <div>
      <select className="fees" onChange={(e)=>setFees(e.target.value)}>
        <option value=''>select Fees</option>
        <option value='Exam Fee'>Exam Fee</option>
        <option value="Application Fee">Application Fee</option>
      </select>
      </div>
      {countries.length !== 0 && <div>
        <select className="fees" onChange={(e)=>setSelectedCountry(e.target.value)}>
          <option value=''>Select country</option>
          {countries && countries.map((ele)=>(
            <option value={ele}>{ele}</option>
          ))}
        </select>
      </div>}
      {countries.length !== 0 && selectedCountry !== '' && <div>
      <select className="fees" onChange={(e)=>setCourse(e.target.value)}>
          <option value=''>Select courses</option>
          {countries && ['MEDICAL','DENTAL','AYURVEDA'].map((ele)=>(
            <option value={ele}>{ele}</option>
          ))}
        </select>
      </div>
      }
      {countries.length !== 0 && selectedCountry !== '' && course!== ''  && course  && <div>
      <select className="fees" onChange={(e)=>setLevel(e.target.value)}>
          <option value=''>Select level of course</option>
          {countries && ['UG','UG-DIPLOMA','PG'].map((ele)=>(
            <option value={ele}>{ele}</option>
          ))}
        </select>
      </div>
      }
      {level && <div>
        <button onClick={handleSubmit} style={{padding: '15px'}}>KNOW YOUR FEE CLICK HERE</button>
        {fee !== null && <h1>{fee} Rupees</h1>}
        </div>}
    </div>
      
    </>
  )
}
export default App;

