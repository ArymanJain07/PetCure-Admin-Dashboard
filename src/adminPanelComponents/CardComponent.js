import React from 'react'
import { useNavigate } from 'react-router-dom';


const CardComponent = () => {

  const navigate = useNavigate();

  const goToAddNewVetPage = () => {
    navigate('/addVet');
  };
  return (
   
    <div  style={{ position: 'center', padding: '2rem',paddingLeft:'30rem',paddingTop:'10rem',
        paddingRight:'6.8rem', maxWidth:'100%'}} >

        <div style={{ position: 'center', padding: '3rem', maxWidth:'80%'}}>
            <div class="row">
                <div class="col-sm-6" style={{padding:'2rem'}}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" style={{fontSize:'2rem'}}>Add New Vet</h5>
                                <p class="card-text" style={{fontSize:'1rem'}}>Register a new vetenary doctor to database</p>
                                <button onClick={goToAddNewVetPage} class="btn2 btn-primary">ADD</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{padding:'2rem'}}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" style={{fontSize:'2rem'}}>View Vet List</h5>
                                <p class="card-text" style={{fontSize:'1rem'}}>View details of all registered vetenary</p>
                                <a href="#" class="btn2 btn-primary">VIEW</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{padding:'2rem'}}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" style={{fontSize:'2rem'}}>Enable / Disable</h5>
                                <p class="card-text" style={{fontSize:'1rem'}}>Enable or disable a doctor.</p>
                                <a href="#" class="btn2 btn-primary">ENABLE/DISABLE</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{padding:'2rem'}}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" style={{fontSize:'2rem'}}>View Client List</h5>
                                <p class="card-text" style={{fontSize:'1rem'}}>View details of all registered clients</p>
                                <a href="#" class="btn2 btn-primary">VIEW</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{padding:'2rem'}}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" style={{fontSize:'2rem'}}>Enable / Disable</h5>
                                <p class="card-text" style={{fontSize:'1rem'}}>Enable or disable a client</p>
                                <a href="#" class="btn2 btn-primary">ENABLE/DISABLE</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{padding:'2rem'}}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" style={{fontSize:'2rem'}}>Add Area</h5>
                                <p class="card-text" style={{fontSize:'1rem'}}>Add new area</p>
                                <a href="#" class="btn2 btn-primary">ADD</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{padding:'2rem'}}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" style={{fontSize:'2rem'}}>Add City</h5>
                                <p class="card-text" style={{fontSize:'1rem'}}>Add new city</p>
                                <a href="#" class="btn2 btn-primary">ADD</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{padding:'2rem'}}>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" style={{fontSize:'2rem'}}>Add State</h5>
                                <p class="card-text" style={{fontSize:'1rem'}}>Add new state</p>
                                <a href="#" class="btn2 btn-primary">ADD</a>
                            </div>
                        </div>
                    </div>
                    
                
            
            </div>



        </div>
        
    </div>
  );
};

export default CardComponent;
