import React,{useState} from 'react';
import axios from 'axios';

function Patient(){
//wrapping all the details in use state or else you can use const [name,setName]=useState('');
    const [patientData,setPatientData]=useState({
        name:'',
        weight:'',
        gender:'',
        age:'',
        disease:'',
        doctorId:null,
    })
    //to change the pateintsData value
    //e is random argument
    const handleChange=(e)=>{
        //name-age,gender,disease,name..e.tc.,value-current value what you entered in the input field by user 
        //e.target-current value
        const {name,value}=e.target;
        //so updated value through e.target is updated and added by the spread operator (...)patientData
        setPatientData({...patientData,[name]:value});
        //[name]:property like age disease
        //value:23,fever
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();//submission behaviour is handle;
        try{
            const response=await axios.post('https://backendhospital-ji3g.onrender.com/patients',patientData);
            console.log('PATIENT DATA IS CREATED:',response.data);

        }
        catch(error){
           

        }
    }
  return (
    <div>
        <h2>Register the patient Details</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={patientData.name} onChange={handleChange}/>
            <label>weight:</label>
            <input type="text" name="weight" value={patientData.weight} onChange={handleChange}/>
            <label>Gender:</label>
            <input type="text" name="gender" value={patientData.gender} onChange={handleChange}/>
            <label>Age:</label>
            <input type="text" name="age" value={patientData.age} onChange={handleChange}/>
            <label>Disease:</label>
            <input type="text" name="disease" value={patientData.disease} onChange={handleChange}/>
            <label>DoctorId:</label>
            <input type="text" name="disease" value={patientData.doctorId} onChange={handleChange}/>
            <button type="submit">Submit</button>
            
        </form>

    </div>
  )
}
export default Patient;

