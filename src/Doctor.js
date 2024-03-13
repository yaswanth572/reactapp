import React,{useState,useEffect} from 'react';
import axios from 'axios';//HTTp Requests(CRUD)

function Doctor(){
    const [doctors,setDoctors]=useState([]);

    //mount phase in functional component useeffect after component rendering the doctor details are rendered
    useEffect(()=>{
        const fetchDoctors=async()=>{
            try{
                //bringing the doctors details name,age,specializtion,gender,salary
                const response=await axios.get('https://backendhospital-ji3g.onrender.com/doctors');
                //intially in doctors no details 
                setDoctors(response.data);
                //the doctors details are bought in the ui(get or retrieve information)
            }
            catch(error){
                console.log('Error in fetching the doctor :',error);
            }
        }
        fetchDoctors();//calling the function
    },[])//mount based on dependency
    return(
        <div>
            <center>
                <h1>Doctor</h1>
                {
                    doctors.map(doctors=>(
                        <div key={doctors.id}>
                            <p><strong>{doctors.name}</strong>-{doctors.specialization}</p>
                            <p>Doctor Id:{doctors.id}</p>
                        </div>
                    ))
                }
            </center>
        </div>
    )
}
export default Doctor;