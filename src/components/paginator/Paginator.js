import React ,{useState}from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './Paginator.css'
function Paginator(props) {
    const {pages}=props
  const [pageNumber, setPageNumber] = useState(1);
  
const setPageHandle=(page)=>{
    setPageNumber(page)
 }
  const prevPageHandle=()=>{
    let count=pageNumber-1
    setPageNumber(()=>{
        if(count>pages){
           count=1
           return count
        }else if(count < 1){
            count= pages
            return count
        }else{
            return count
        }
        })
 }
 const nextPageHandle=()=>{
    let count=pageNumber+1
    setPageNumber(()=>{
        if(count>pages){
           count=1
           return count
        }else if(count < 1){
            count= pages
            return count
        }else{
            return count
        }
        })
}
  
  return (
    <div className="pagination">
    <span><NavigateBeforeIcon  onClick={()=>prevPageHandle()}/></span>
      
    {[...Array(pages)].map((el, index) => (      
        <span key={index} className={index+1 === pageNumber?"active":""} onClick={()=>setPageHandle(index+1)}>{index+1}</span>   
      ))}
      <span><NavigateNextIcon onClick={()=>nextPageHandle()}/></span>
  </div>
  );
}

export default Paginator