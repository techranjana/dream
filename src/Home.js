import React from 'react'

function Home() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-dark ">
 <div class="container-fluid">
   <a class="navbar-brand text-white" href="#">Course</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
         <a class="nav-link active text-white" aria-current="page" href="Login">Login</a>
       </li>
        {/* <li class="nav-item">
         <a class="nav-link  text-white" href="available_farmer">Available Farmer</a>
       </li> 
        <li class="nav-item">
         <a class="nav-link  text-white" href="my_farmer">MyFarmerss</a>
       </li>  */}
     </ul>
     <div>
       <a class="nav-link  text-white" href="course_register">New Course Registration</a>
     </div>

     
   </div>
 </div>
</nav>


<div class="container my-5 p-md-5" style={{border: "1px solid black"}}>
 <h4 class="text-center">New  Registration </h4>
 <form class="col-md-4 offset-md-4" >

   <div class="mb-3">
     <label for="coname" class="form-label">Student Name </label>
     <input type="text" class="form-control" name="coname" />
   </div>
   <div class="mb-3">
     <label for="email" class="form-label">Email </label>
     <input type="text" class="form-control" name="email" />
   </div> 
   <div class="mb-3">
     <label for="price" class="form-label">Price </label>
     <input type="text" class="form-control" name="price" />
   </div>
   <div class="mb-3">
     <label for="course" class="form-label">Course</label>
     <input type="text" class="form-control" />
   </div>
  

    <button type="submit" class="btn btn-primary">Submit</button>
 </form>
 {/* <P> you have already account then click here <a href="#" >Course Registration</a></P> */}
</div>
</div>
  )
}

export default Home