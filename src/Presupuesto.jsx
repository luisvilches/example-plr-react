import React from 'react'
import {Card} from 'material-ui/Card'
import AutoComplete from 'material-ui/AutoComplete'
import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Menu from './data/menuData.js'
import LinearProgress from 'material-ui/LinearProgress';
import { Pie } from 'react-chartjs-2'



class Bar extends React.Component {
	state = {
	    dataSource: [],
	}

	handleUpdateInput = (value) => {
	    this.setState({
	      	dataSource: [
	        	value,
	        	value + value,
	        	value + value + value,
	      	],
	    })
	}

	render() {
		return (
			<div className="inline">
				<div className="cont">
					<h4>{this.props.title}</h4>
				</div>

				<div className="cont ItextWD">
					<AutoComplete
			          	hintText="Ingresar busqueda"
			          	dataSource={this.state.dataSource}
			          	onUpdateInput={this.handleUpdateInput}
			          	floatingLabelText="Busqueda"
			          	fullWidth={true}
			        />
				</div>
				<div className="cont">
					<IconMenu
				      iconButtonElement={<IconButton><FontIcon className="material-icons">filter_list</FontIcon></IconButton>}>
				    	<MenuItem primaryText="Opcion 1" />
					    <MenuItem primaryText="Opcion 2" />
				    </IconMenu>
					
				</div>
				<div className="cont">
					<IconMenu
				      iconButtonElement={<IconButton><FontIcon className="material-icons">more_vert</FontIcon></IconButton>}>
				    	<MenuItem primaryText="Opcion 1" />
					    <MenuItem primaryText="Opcion 2" />
					    <MenuItem primaryText="Opcion 3" />
				    </IconMenu>
				</div>
			</div>
		)
	}	
}

class TableList extends React.Component {

	render() {
		return (
			<Table height="553px" multiSelectable={true}>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>Descriptcion</TableHeaderColumn>
			        <TableHeaderColumn>Cliente/Propspecto</TableHeaderColumn>
			        <TableHeaderColumn>Fecha</TableHeaderColumn>
			        <TableHeaderColumn>Monto Total</TableHeaderColumn>
			        <TableHeaderColumn>Estado</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>
			      	{Menu.presupuesto.map( item => {
			      		return (
			      			<TableRow key={item.id}>
						        <TableRowColumn>{item.descripcion}</TableRowColumn>
						        <TableRowColumn>{item.cliente} <span>({item.porcentaje}%)</span></TableRowColumn>
						        <TableRowColumn>{item.fecha}</TableRowColumn>
						        <TableRowColumn>{item.total}</TableRowColumn>
						        <TableRowColumn>{item.estado}</TableRowColumn>
						    </TableRow>
			      		)
			      	})}
			    </TableBody>
			 </Table>
		)
	}
}

class ListPresupuestos extends React.Component{
	render() {
		return (
			<Card className="cardWd">
		          <Bar title="Presupuestos"/>
		          <TableList />
			</Card>
		)
	}
}

class EstadisticasOfertas extends React.Component {
	render() {
		return (
			<Card className="cardWd Blue pdl">
		          <div className="pd20 lineH">
		          		<h3 className="textoCardBlue">Oferta aceptada</h3>
		          		<h2>${this.props.ofertas} CPL</h2>
		          		<h4 className="textoCardBlue">Oferta total ofrecida</h4>
		          		<h3>${this.props.total} CPL</h3>
		          </div>
			</Card>
		)
	}
}

class Progreso extends React.Component {
	render() {
		return (
			<div>
				<h4>{this.props.title}</h4>
				<LinearProgress mode="determinate" value={this.props.value} color={this.props.color} />
			</div>
		)
	}	
}

class CardProgreso extends React.Component {
	render() {
		return (
			<Card className="cardWd">
		        <div className="pd20">
		        	<h3>{this.props.title}</h3>
		          	<Progreso title="Corto plazo" value={80} color="#F44336" />
		          	<Progreso title="Mediano plazo" value={60} color="#FFEE58" />
		          	<Progreso title="Largo plazo" value={20} color="#AED581" />
		        </div>
			</Card>
		)
	}
}

class CardChart extends React.Component {
	render() {
		return (
			<Card className="cardWd">
		        <div className="pd20">
		        	<h3>{this.props.title}</h3>
		          	<Pie data={Menu.grafico} />
		        </div>
			</Card>
		)
	}
}

class Presupuestos extends React.Component {
	render() {
		return (
			<div className="container-full">
				<div className="rown-15">
					<div className="cell-70">
						<ListPresupuestos />
					</div>
					<div className="cell-25">
						<EstadisticasOfertas ofertas={Menu.EstadisticasOfertas.oferta} total={Menu.EstadisticasOfertas.total} />
						<br />
						<CardProgreso title="Metas por tipo de proyectos" />
						<br />
						<CardChart title="Converción" />
					</div>
				</div>
			</div>
		)
	}
}


export default Presupuestos