import React from 'react'

class NewForm extends React.Component {

  state = {
    name: "",
    show: "",
    img: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <>
        <p>Add New Character:</p>
        <form onSubmit={e => {
          e.preventDefault()
          this.setState({name: "", show: "", img: ""})
          this.props.addNewCharacter({name: e.target.name.value,show: e.target.show.value,img: e.target.img.value })
        }}>
          <input name="name" placeholder="Character Name" value={this.state.name} onChange={this.changeHandler} style={{"margin-right": "5px"}}/>
          <input name="show" placeholder="Show Name" value={this.state.show} onChange={this.changeHandler} style={{"margin-right": "5px"}}/>
          <input name="img" placeholder="Image Url" value={this.state.img} onChange={this.changeHandler} style={{"margin-right": "5px"}}/>
          <input type="submit" />
        </form>
      </>
    )
  }
}

export default NewForm