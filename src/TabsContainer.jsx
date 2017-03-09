import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import Presupuestos from './Presupuesto'


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
}

class TabsContainer extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      	slideIndex: 0,
	    }
	}

	handleChange = (value) => {
	    this.setState({
	      	slideIndex: value,
	    })
	}

	render() {
		return (
			<div>
		        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
		          	<Tab label="Presupuestos" value={0} />
		          	<Tab label="Clientes" value={1} />
		          	<Tab label="Prospectos" value={2} />
		        </Tabs>
		        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
		          	<div>
		            	<Presupuestos />
		          	</div>
		          	<div style={styles.slide}>
		            	slide n°2
		          	</div>
		          	<div style={styles.slide}>
		            	slide n°3
		          	</div>
		        </SwipeableViews>
		    </div>
		)
	}
}


export default TabsContainer