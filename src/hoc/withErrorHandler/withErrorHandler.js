import React from 'react'
import Modal from '../../Components/UI/Modal/Modal'
import Wrapper from "../../hoc/wrapper"

const withErrorHandler = (WrappedComponent, axios) => {
    return (class extends React.Component {
        state = { error: null }

        componentWillMount() {
            axios.interceptors.request.use(null, error => {
                this.setState({ error: null })
            })

            axios.interceptors.response.use(null, error => {
                this.setState({ error: error })
            })
        }
        
        errorConfirmedHandler = ()=>{
            this.setState({ error: null })
        }

        render() {
            return (
                <Wrapper>
                    <Modal 
                    show={this.state.error}
                    modalClosed ={this.errorConfirmedHandler}
                    >
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Wrapper>
            )
        }
    })
}

export default withErrorHandler;
