module.exports = {
  boxSizing: 'border-box',
  display: 'flex',
  flexFlow: 'column',
  flex: '1 0 auto',

  footer: {
    flexFlow: 'row',
    display: 'flex',
  },

  body: {
    display: 'flex',
    flexFlow: 'column',
    flex: 1,
  },

  table: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    flex: 1,
  },

  row: {
    display: 'flex',
    flexFlow: 'row',
    flex: 1,
  },

  weekDayNames: {
    flex: 'none',
  },

  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  navTable: {
    display: 'flex',
    flexFlow: 'row',
    flex: 1,
    width: '100%',
    
    cell: {
      flex: 7,
    },

    navCell: {
      flex: 1,
    },
  },

}