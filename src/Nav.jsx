import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {Card, CardHeader} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router'

// componente para la tarjeta con informacion del usuario que ira dentro del menu drawer
class CardUser extends React.Component {
	render() {
		return (
			//usamos el componente card y cardHeader de material-ui
			<Card>
				<CardHeader
			      title="Jotape"
			      subtitle="jotape@elmundoalreves.cl"
			      avatar="https://res.cloudinary.com/idemo/image/upload/ar_200:131,c_fill,dpr_1.0,g_faces,w_200/woman.jpg"
			    />
			</Card>
		)
	}		
}
// componente list que ira dentro del menu drawer
class ListMenu extends React.Component {
	//pasamo el estado por defecto
	state = {
    	open: false,
	}
	// creamos el metodo para abrir el sub menu
	handleToggle = () => {
	    this.setState({
	      	open: !this.state.open,
	    })
	}
	//creamos el metodo para mostrar los sub menu
	handleNestedListToggle = (item) => {
	    this.setState({
	      	open: item.state.open,
	    })
	}

	render() {
		return (
			<div>
	          <List>
	            <ListItem
	              primaryText="Vender, Vender"
	              leftIcon={ <FontIcon className="material-icons">store_mall_directory</FontIcon>}
	              initiallyOpen={true}
	              primaryTogglesNestedList={true}
	              nestedItems={[
	                <Link key={1} className="noStyleLink pdl" to="/"><ListItem primaryText="Presupuestos"></ListItem></Link>,
	                <Link key={2} className="noStyleLink pdl" to="/"><ListItem primaryText="Clientes"></ListItem></Link>,
	                <Link key={3} className="noStyleLink pdl" to="/"><ListItem primaryText="Prospectos"></ListItem></Link>,
	              ]}
	            />
	            <ListItem primaryText="Quitan 'Trabajo'" leftIcon={ <FontIcon className="material-icons">launch</FontIcon>} />
            	<ListItem primaryText="Dinero !" leftIcon={ <FontIcon className="material-icons">work</FontIcon>} />
	          </List>
	        </div>
		)
	}
}

//componente principal del componente nav
class Nav extends React.Component {
	//creamos el constructon con los props por defecto
	constructor (props) {
		super (props)
		this.state = {open:false}		
	}
	//creamos el metodo open, con la que se mostrara el menu drawer
	handleToggle = () => this.setState({open: !this.state.open})
	//creamos el metodo close con el que cerraremos el menu drawer
	handleClose = () => this.setState({open: false});
	//renderizamos el componente nav
	render() {
		//retornamos todos los elementos que conforman el componente como uno solo
		return (
			<div>
				
				<AppBar title={this.props.titulo} onLeftIconButtonTouchTap={this.handleToggle} />
				<Drawer width={330} docked={false} open={this.state.open} onRequestChange={this.handleClose} disableSwipeToOpen={true}>
					<CardUser />
		          	<ListMenu />
		        </Drawer>
			</div>
		)
	}
}
//exportamos el componente nav
export default Nav