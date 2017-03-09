import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { teal500, deepOrange600 } from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

//import Nav from './Nav'
import PresupuestoInit from './PresupuestoInit'
import CreatePresupuesto from './CreatePresupuesto'


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
    accent1Color: deepOrange600,
  },
  appBar: {
    height: 80,
  },
})

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    )
  }
}


class Content extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={PresupuestoInit} />
				<Route path="create" component={CreatePresupuesto}/>
				<Route path="*" component={PageNotFound} />
			</Router>
		)
	}
}

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Content />
	</MuiThemeProvider>,
  document.getElementById('root')
);