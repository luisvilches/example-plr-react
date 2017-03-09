import React from 'react'
import {Card} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Menu from './data/menuData.js'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Nav from './Nav'



const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
}


class CardUf extends React.Component {
	render() {
		return (
			<Card className="cardWd Blue pdl">
		          <div className="pd20 lineH">
		          		<h3 className="textoCardBlue">Valor neto</h3>
		          		<h2>${this.props.neto} CPL</h2>
		          		<h4 className="textoCardBlue">Valor UF</h4>
		          		<h3>${this.props.uf} UF</h3>
		          		<h5 className="textoCardBlue">Uf actual ${this.props.valoruf} CPL</h5>
		          </div>
			</Card>
		)
	}
}

class CreateCard extends React.Component {
	render() {
		return (
			<Card className="cardWd">
		          <div className="pd20 lineH">
		          		<div className="container-full">
		          			<div className="rown">
		          				<div className="cell-45">
		          					 <TextField className="wd100" hintText="Nombre del Presupuesto"/>
		          				</div>
		          				<div className="cell-45">
		          					 <TextField className="wd100" hintText="Cliente"/>
		          				</div>
		          				<div className="cell-45">
		          					 <TextField className="wd100" hintText="Valor UF por Hora (1 UF)"/>
		          				</div>
		          				<div className="cell-45">
		          					 <TextField className="wd100" hintText="Valor total"/>
		          				</div>
		          				<div className="cell-45">
		          					 <Toggle label="IVA"/>
		          				</div>
		          				<div className="cell-45">
		          					 <Toggle label="En IVA"/>
		          				</div>
		          				<div className="cell-95">
		          					 <TextField fullWidth={true} hintText="Ingresar observaciones" floatingLabelText="Observaciones" multiLine={true} rows={2}/>
		          				</div>
		          				<div className="cell-offset-left-50 cell-45">
		          					<div className="rown">
		          						<div className="cell-mobile-40 cell-40">
			          					 	<FlatButton label="Facturar" primary={true} />
			          					</div>
			          					<div className="cell-mobile-40 cell-40">
			          					 	<RaisedButton label="Guardar" primary={true} />
			          					</div>
		          					</div>
		          				</div>
		          			</div>
		          		</div>
		          </div>
			</Card>
		)
	}
}

class CardDesign extends React.Component {

	constructor(props) {
	    super(props)
	    this.state = {
	      open: 'hidden'
	  	}
    }

    handleToggle = () => {
		this.setState({open: !this.state.open})
	}

	render() {
		return (
			<Card className="cardWd">
				<div className="pd20 lineH">
	          		<div className="container-full">
	          			<div className="rown">
	          				<div className="cell-95">
	          					 <Toolbar className="white">
	          					 	<ToolbarGroup firstChild={true}>
							          <ToolbarTitle text="Diseño y UI" />
							        </ToolbarGroup>
							        <ToolbarGroup>
							          	<ToolbarSeparator />
							          	<IconButton iconClassName="material-icons" tooltip="">add</IconButton>
							          	<IconButton iconClassName="material-icons" tooltip="">more_vert</IconButton>
							        </ToolbarGroup>
	          					 </Toolbar>
	          				</div>
	          				<div className="cell-95">
	          					 <Table multiSelectable={true}>
								    <TableHeader>
								      	<TableRow>
									        <TableHeaderColumn>Items</TableHeaderColumn>
									        <TableHeaderColumn>HH</TableHeaderColumn>
									        <TableHeaderColumn>Valor</TableHeaderColumn>
									        <TableHeaderColumn className="maxwdt"></TableHeaderColumn>
								      	</TableRow>
								    </TableHeader>
								    <TableBody>
								      	{Menu.desingui.map( item => {
								      		return (
								      			<TableRow key={item.id}>
											        <TableRowColumn>{item.items}</TableRowColumn>
											        <TableRowColumn>{item.hh}</TableRowColumn>
											        <TableRowColumn>${item.valor} </TableRowColumn>
											        <TableRowColumn className="maxwdt"><IconButton iconClassName="material-icons" tooltip="">close</IconButton></TableRowColumn>
											    </TableRow>
								      		)
								      	})}
								    </TableBody>
								 </Table>
	          				</div>
	          				<div className="cell-offset-left-50 cell-20">
	          					 <Toggle label="Mostrar Costos" onToggle={this.handleToggle}/>
	          				</div>
	          				<div className="cell-20 subText">
	          					 <h5 className={(this.state.open ? 'hidden' : '')}>Valor total ${this.props.total}</h5>
	          				</div>
	          			</div>
		          	</div>
		        </div>
			</Card>
		)
	}
}

class TipoPropuesta extends React.Component {
	render() {
		return (
			<Card className="cardWd  pdl">
		          <div className="pd20 lineH">
		          		<h3>{this.props.title}</h3>
		          		<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
					      <RadioButton value="not_light" label="Web"  style={styles.radioButton}/>
					      <RadioButton value="light" label="App"  style={styles.radioButton}/>
					      <RadioButton value="ludicrous" label="Web + App"  style={styles.radioButton}/>
					    </RadioButtonGroup>
		          </div>
			</Card>
		)
	}
}

class Versions extends React.Component {
	render() {
		return (
			<div className="relative">
				<h5>{this.props.version}</h5>
		    	<TextField className="wd100 lineH0" hintText={this.props.date} disabled={true}/>
		    	<IconButton className="positionCloseVersion" iconClassName="material-icons" tooltip="">close</IconButton>
			</div>
		)
	}
}

class CardVersions extends React.Component {
	render() {
		return (
			<Card className="cardWd pdl pdr">
		          <div className="pd20 lineH">
		          		<h3>{this.props.title}</h3>

		          		{Menu.versiones.map( item => {
							return <Versions key={item.id} version={item.version} date={item.fecha} />
						})}

		          		<IconButton iconClassName="material-icons" tooltip="">add</IconButton>
		          </div>
			</Card>
		)
	}
}

class Hitos extends React.Component {
	render() {
		return (
			<div className="relative containerHito">
				<h5>{this.props.name}</h5>
		    	<TextField className="wd100 lineH0" hintText={this.props.desc} disabled={true}/>
		    	<IconButton className="positionCloseVersion" iconClassName="material-icons" tooltip="">close</IconButton>
		    	<TextField className="porcentajeHito" hintText={this.props.porcentaje + '%'} disabled={true}/>
			</div>
		)
	}
}

class CardHitosPagos extends React.Component {
	render() {
		return (
			<Card className="cardWd pdl pdr">
		          <div className="pd20 lineH">
		          		<h3>{this.props.title}</h3>
		          		<h5>Valor total: {this.props.uf} UF</h5>
		          		{Menu.hitos.map( item => {
							return <Hitos key={item.id} name={item.nombre} desc={item.descriptcion} porcentaje={item.porcentaje}/>
						})}
						<IconButton iconClassName="material-icons" tooltip="">add</IconButton>
		          </div>
			</Card>
		)
	}
}


class CreatePresupuesto extends React.Component {

	render() {
		return (
			<div className="container-full">
				<div className="rown-15">
					<div className="cell-70">
						<CreateCard />
						<br />
						<CardDesign total="29.990"/>
					</div>
					<div className="cell-25">
						<CardUf neto="5.670.834" uf="190" valoruf="26.769" />
						<br />
						<TipoPropuesta title="Tipo de propuesta" />
						<br />
						<CardVersions title="Versiones"/>
						<br />
						<CardHitosPagos title="Hitos de pago" uf="190"/>
					</div>
				</div>
			</div>
		)
	}
}

class Create extends React.Component {
	render() {
		return (
			<div>
				<Nav titulo="Crear presupuesto"/>
				<CreatePresupuesto />
			</div>
		)
	}
}


export default Create