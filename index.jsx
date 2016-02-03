'use strict'

 require('./style/base.styl')
 require('./style/theme/monokai/index.styl')

// require ('./theme/monokai.css')
// require ('./base.css')

var moment = require('moment');
var React      = require('react')
var DatePicker = require('./src/index')

var render = require('react-dom').render

var range = ['2016-02-01', '2016-02-09']
var date = moment().add(2, 'days')

var LOCALE = 'en'

var TODAY = {
    en: 'Today',
    fr: 'Aujourd\'hui',
    de: 'Heute',
    es: 'Hoy',
    ro: 'Azi'
}

var GO2SELECTED = {
    en: 'Go to selected',
    es: 'Vaya a Favoritos',
    de: 'Zum ausgewählten',
    fr: 'Aller a la liste',
    ro: 'Mergi la selectie'
}

function emptyFn(){}

var App = React.createClass({
    displayName: 'App',

    onLocaleChange: function(event) {
        LOCALE = event.target.value

        this.setState({})
    },

    render: function(){
        range = this.props.range || range
        date = this.props.date || date

        return <div style={{margin: 10}}>

            <p>Select locale: <select value={LOCALE} onChange={this.onLocaleChange}>
                    <option value="en">English (US)</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                    <option value="ro">Romanian</option>
                </select>
            </p>

            <DatePicker
              minDate={moment().format('YYYY-MM-DD')}
              xweekStartDay={3}
              highlightWeekends={true}
              locale="ro"
              weekNumberName="x"
              weekNumbers
              defaultRange={range}
              //defaultDate={date}
              //onChange={this.onRangeChange}
              //onRangeChange={this.onRangeChange}
              xweekDayNames={['S','M','T','W','T','F','S']}
              renderWeekNumber={(p) => {
                p.children = 'W' + p.week
                }}
            />
        </div>
    },

    onRangeChange: function(rangeValue){
        //range = rangeValue
        //date = rangeValue
        //this.setState({})
    }
})

render(<App />, document.getElementById('content'))
