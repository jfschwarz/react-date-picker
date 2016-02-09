'use strict';

var React = require('react')
var substyle = require('substyle')
var P = React.PropTypes
var onEnter = require('./onEnter')

module.exports = React.createClass({

  displayName: 'DatePickerHeader',

  propTypes: {
    onChange: P.func,
    onPrev  : P.func,
    onNext  : P.func,
    colspan : P.number,
    children: P.node
  },

  render: function() {

    var props = this.props
console.log(props);
    return <div {...substyle(props)}>
      <div {...substyle(props, 'row')}>
        <div
          tabIndex="1"
          role="link"
          {...substyle(props, ['prev-nav', 'nav-cell', 'cell'])}
          onClick={props.onPrev}
          onKeyUp={onEnter(props.onPrev)}
        >{props.prevText}
        </div>

        <div
          tabIndex="1"
          role="link"
          {...substyle(props, ['nav-view', 'cell'])}
          colSpan={props.colspan}
          onClick={props.onChange}
          onKeyUp={onEnter(props.onChange)}
        >{props.children}</div>

        <div
          tabIndex="1"
          role="link"
          {...substyle(props, ['next-nav', 'nav-cell', 'cell'])}
          onClick={props.onNext}
          onKeyUp={onEnter(props.onNext)}
        >{props.nextText}</div>
      </div>
    </div>
  }

})
