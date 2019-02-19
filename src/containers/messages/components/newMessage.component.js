import React, { Component } from 'react';
import { addMessageAction } from '../messages.actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


class NewMessage extends Component {

  // Set default props
  static defaultProps = {
    close: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      message: {
        value: '',
        isPublic: false
      },
      hasError: false
    };
  }

  validateForm(){
    if (!this.state.message.value.length){
      this.setState({ hasError: true })
      return false;
    }
    return true;
    
  }
  submit(){
    if(this.validateForm()){
      this.props.addMessageAction(this.state.message)
      this.props.close();
    }
  }
  renderError(){
     if(this.state.hasError) {
       return (
          <div class="alert alert-danger" role="alert">
           Formulaire invalid
          </div>
       )
     }
  }
  render() {
    const { message } = this.state;
    return (
      <div className="container">
          {this.renderError()}
         <div className="row">
          <div className="col-12">
            <div className="card" >
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="message">Votre message</label>
                  <textarea className="form-control" id="message" onChange={({ target }) => { this.setState({ hasError: false, message: { ...message, value: target.value}})}}  placeholder="Entrer votre message" />
                </div>
                <div className="form-group">
                  <label htmlFor="ispublic">Public</label>
                  <input type="checkbox" onChange={({ target }) => { this.setState({ message: { ...message, isPublic: target.value } }) }} className="form-control" id="ispublic" />
                </div>
                <button onClick={this.submit.bind(this)} className="btn btn-primary">Enregistrer</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    )
  }

}

NewMessage.PropTypes = {
  close: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMessageAction
  }, dispatch)
}



export default connect(null, mapDispatchToProps)(NewMessage)