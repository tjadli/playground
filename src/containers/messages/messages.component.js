import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessagesAction } from './messages.actions'
import { bindActionCreators } from 'redux'
import NewMessage from './components/newMessage.component'

type Props = {};

class Messages extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      showAddMessage: false
    }
  }
  componentDidMount(){
    this.props.getMessagesAction();
  }

  addNewMessage(){
    this.setState({showAddMessage : false})
  }


  render() {
    const { messages } = this.props;
    const { showAddMessage } = this.state;
    if(showAddMessage){
      return (<NewMessage close={this.addNewMessage.bind(this)} />)
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-right" style={{marginBottom: '20px'}}>
            <button className="btn btn-primary" onClick={() => { this.setState({ showAddMessage: true }) }} role="button">Ajouter message</button>
          </div>
        </div>
        <div className="row">
          {messages.map(({ value, isPublic}, key) => {
            return (<div className="col-12" key={key} >
                      <div className="jumbotron">
                        <h3>Votre message:</h3>
                          <p class="lead">{value}</p>
                        <hr class="my-4" />
                        <p>Status :    { isPublic ? 'Public' : 'Privé' }</p>
                      </div>
                    </div>)
          })}
        </div>
      </div>
      
    );
  }
}


const mapStateToProps = ({ messages }) => ({
  messages
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMessagesAction
  }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Messages)