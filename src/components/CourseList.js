import React,{Component} from "react";

class  CourseList extends Component {
    state ={
        isEdit : false,
    }
    renderCourse = () =>{
        return (
            <li>
                <span >{this.props.details.name}</span>
                <button onClick={() => {this.toggleState()}}>Edit course</button>
                <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course </button>
            </li>
        )
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }
    // render update Form
    renderUpdateForm =() => {
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input = v }} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }


    // toggleState

    toggleState = () => {
    let {isEdit} = this.state;
    this.setState({isEdit :!isEdit})
    }


render(){
    let {isEdit} = this.state
        return (
            <React.Fragment> 
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </React.Fragment>
        );

        };
};

export default CourseList;
