import React ,{useState}from 'react'
import './Carousel.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
function Carousel(props) {
    const {images}=props
    const [view,setView]=useState(0)
    const sliderHandle=(index)=>{
       setView(()=>{
           if(index>images.length-1){
               index=0
               return index
           }else if(index < 0){
               index=images.length - 1
               return index
           }else{
               return index
           }
           })
    }
   
  return (
   <>
    <div className="slideshow-container" >
    {images.map((image,index)=> <div className={index===view?"slides show fade":"slides fade"}key={index}>
      <div className="numbertext" >{index+1}/{images.length}</div>
      <p><NavigateBeforeIcon  onClick={()=>sliderHandle(index-1)}/>
      <NavigateNextIcon onClick={()=>sliderHandle(index+1)}/></p>
      <img className="col-8 col-s-12" src={image} alt="product" className="slider-image" />   
    </div>
    )}    
    </div>
    </>
  )
}

export default Carousel