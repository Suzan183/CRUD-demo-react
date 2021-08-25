
import React, { Component }  from "react";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
import './index.css';

class App extends Component{
  state = {
    courses :[
      {name : "HTML"},
      {name : "CSS"},
      {name: "REACT"},
    ],
    current : '',
  }

   updateCourse = (e) => {
    //console.log(e.target.value);
    this.setState({current : e.target.value})};
  


   addCourse =(e) => {
     e.preventDefault();
     console.log("Course Add");
     let current = this.state.current; //bring the current course at input
     let courses = this.state.courses;//bring all the courses in the list
     courses.push({name :current});//add the new course to the list
     this.setState({courses,
      current :'',}// empty the current after adding it 
      )

   }
   deleteCourse = (index) =>{
     let courses = this.state.courses;
     courses.splice(index,1);
     this.setState({courses})

   }

   editCourse = (index,value) => {
     let courses = this.state.courses;
     let course = courses[index];
     course["name"] = value;
     this.setState({courses});
   }


  render(){
    const courses = this.state.courses;
    const courseList = courses.map((course, index)=> {
      return <CourseList details={course} key={index} index ={index} deleteCourse ={this.deleteCourse} editCourse={this.editCourse} /> ;
    })
    return (
    <section className="App">
      <h2>Add Courses</h2>
      <CourseForm updateCourse ={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
      <ul>{courseList}</ul>
    
    </section>
  );}
  
}

export default App;
