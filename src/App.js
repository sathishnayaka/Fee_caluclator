import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import CloseIcon from './CloseIcon.png'
// import Modal from './Modal';
function App() {
  const [items, setItems]=useState([]);
  const[isOpen, setIsopen]=useState(false);
  const getDatafromUrl = async()=>{
    let res= await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts");
    setItems(res.data);
  }
  useEffect(()=>{
    getDatafromUrl();
  },[])
  return (
    <div className="App">
      <div className="cantainer">
        <Modal item={items[3]} isOpen={isOpen} setIsopen={setIsopen}/>
      { items.map((item)=>(
        <div className="cards" key={item.id}>
            <img className="Img"src={item.thumbnail.large} alt={item.id} width="100%" height="auto"/>
            <div className='learn_more' onClick={()=>{setIsopen(true)}}><h1>LEARN MORE</h1></div>
            <div className='content'>
              <h1>{item.title}</h1>
              <div className="heading">
              <label>{item.content}</label>
              </div>
              <div className="author">
                <div>
                  <label color='red'>{item.author.name}</label>
                  <label>{`${"-"}${item.author.role}`}</label>
                </div>
                <div>
                  <label>{item.date}</label>
                </div>
              </div>

            </div>
        </div>
      ))

      }

      </div>
    </div>
  );
}

export default App;

const styles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		minWidth: '300px',
		width: '30%',
		transform: 'translate(-50%, -50%)',
		borderRadius: 10,
		padding: '20px 30px',
		fontFamily: 'Nunito',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
};

function Modal({item,isOpen,setIsopen}) {
	return (
		<ReactModal isOpen={isOpen} style={styles}>
			<div className='backIcon'>
				<img
					src={CloseIcon}
					alt="Close Icon"
          width="20px"
          height="20px"
          onClick={()=>{setIsopen(false)}}
				/>
			</div>
			<img src={item.thumbnail.small} alt={item.id} width="100%" height="auto"/>
            <div className='content'>
                <h1>{item.title}</h1>
              <div className="heading">
                <label>{item.content}</label>
              </div>
              <div className="author">
                <div>
                  <div>
                  <img src={item.author.avatar} alt="author Image" width="50px" height="50px"/>
                  </div>
                  <label color='red'>{item.author.name}</label>
                  <label>{`${"-"}${item.author.role}`}</label>
                </div>
              </div>
            </div>
              
		</ReactModal>
	);
}
