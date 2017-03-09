import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import TabsContainer from './TabsContainer'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Nav from './Nav'
import { Link } from 'react-router'

const style = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
}

class PresupuestoInit extends React.Component {
	render() {
		return (
		  <div>
        <Nav titulo="Vender, Vender"/>
        <TabsContainer />
        <Link to="create">
          <FloatingActionButton style={style} secondary={true}><FontIcon className="material-icons">create</FontIcon></FloatingActionButton>  
        </Link>
      </div>
		)
	}
}

export default PresupuestoInit


