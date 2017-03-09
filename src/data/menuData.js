var Menu = {
  	'NavBar':[
		{"caption": "Google","url": "http://google.cl","stl":"colorWhite"},
		{"caption": "Facebook","url": "http://facebook.com","stl":"colorWhite"},
		{"caption": "Github","url": "http://github.com","stl":"colorWhite"}
	],
	'Drawer': [
		{'caption': "Vender, Vender",'url': "http://twitter.com","stl":"colorGreen"},
		{'caption': "Quitan trabajo",'url': "http://plus.google.com","stl":"colorGreen"},
		{'caption': "Dinero",'url': "http://instagram.com","stl":"colorGreen"}
	],
	'Tabs': [
		{'nombre':'Presupuestos', 'enlace':'#scroll-tab-1'},
		{'nombre':'Clientes', 'enlace':'#scroll-tab-2'},
		{'nombre':'Prospectos', 'enlace':'#scroll-tab-3'}
	],
	'presupuesto': [
		{'id':'1', 'selected':'true', 'descripcion':'Sitio Sernatur', 'cliente':'Grupo AWA', 'porcentaje':'80', 'fecha':'hace 1 dia', 'total':'7.000.000', 'estado':'Enviado'},
		{'id':'2', 'selected':'true', 'descripcion':'Tarapaca App', 'cliente':'LFI', 'porcentaje':'90', 'fecha':'hace 1 dia', 'total':'7.000.000', 'estado':'En Proceso'},
		{'id':'3', 'selected':'true', 'descripcion':'Landing PS', 'cliente':'All senses', 'porcentaje':'90', 'fecha':'hace 1 mes', 'total':'2.500.000', 'estado':'Aprovado'},
		{'id':'4', 'selected':'true', 'descripcion':'Sitio Sernatur', 'cliente':'Grupo AWA', 'porcentaje':'80', 'fecha':'hace 1 dia', 'total':'7.000.000', 'estado':'Enviado'},
		{'id':'5', 'selected':'true', 'descripcion':'Tarapaca App', 'cliente':'LFI', 'porcentaje':'90', 'fecha':'hace 1 dia', 'total':'7.000.000', 'estado':'En Proceso'},
		{'id':'6', 'selected':'true', 'descripcion':'Landing PS', 'cliente':'All senses', 'porcentaje':'90', 'fecha':'hace 1 mes', 'total':'2.500.000', 'estado':'Aprovado'},
		{'id':'7', 'selected':'true', 'descripcion':'Sitio Sernatur', 'cliente':'Grupo AWA', 'porcentaje':'80', 'fecha':'hace 1 dia', 'total':'7.000.000', 'estado':'Enviado'},
		{'id':'8', 'selected':'true', 'descripcion':'Tarapaca App', 'cliente':'LFI', 'porcentaje':'90', 'fecha':'hace 1 dia', 'total':'7.000.000', 'estado':'En Proceso'},
		{'id':'9', 'selected':'true', 'descripcion':'Landing PS', 'cliente':'All senses', 'porcentaje':'90', 'fecha':'hace 1 mes', 'total':'2.500.000', 'estado':'Aprovado'}
	],
	'desingui': [
		{'id':'1', 'selected':'true', 'items':'Sitio Sernatur', 'hh':'10', 'valor':'150.000'},
		{'id':'2', 'selected':'true', 'items':'Tarapaca App', 'hh':'10', 'valor':'150.000'},
		{'id':'3', 'selected':'true', 'items':'Landing PS', 'hh':'10', 'valor':'150.000'}
	],
	'progress': [
		{'name':'Corto Plazo', 'porcentaje':'40', 'width':'1', 'color':'#ff9999'},
		{'name':'Mediano Plazo', 'porcentaje':'80', 'width':'1', 'color':'#344346'},
		{'name':'Largo Plazo', 'porcentaje':'20', 'width':'1', 'color':'#ff4326'}
	],
	'grafico': {
	    'labels': ["Aceptadas", "Rechazadas", "Enviadas"],
        'datasets': [
            {
                'backgroundColor': ["#FF6384","#36A2EB","#FFCE56"],
                'hoverBackgroundColor': ["#FF6384","#36A2EB","#FFCE56"],
                'data': [28, 48, 40]
            }
        ]
	},
	'EstadisticasOfertas': {'oferta':'30.000.000', 'total':'158.765.876'},
	'versiones': [
		{'id':'1','version':'1.0', 'fecha':'08/02/16'},
		{'id':'2','version':'2.0', 'fecha':'08/02/17'}
	],
	'hitos': [
		{'id':'1','nombre':'Hito 1', 'descriptcion':'08/02/16', 'porcentaje':'30'}
	]
}


module.exports = Menu;