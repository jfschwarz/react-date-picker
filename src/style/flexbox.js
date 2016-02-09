const row = {
  display: 'flex',
  flexFlow: 'row',
  flex: 1,
}

const cell = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
}

const table = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexFlow: 'column',
  flex: 1,

  row,
  cell,
}

module.exports = {
  boxSizing: 'border-box',
  display: 'flex',
  flexFlow: 'column',
  flex: '1 0 auto',

  header: {
    display: 'flex',
    flexFlow: 'row',
    flex: 1,
    width: '100%',

    row: row,
    
    cell: {
      ...cell,

      flex: 7,
    },

    navCell: {
      flex: 1,
    },
  },

  footer: {
    flexFlow: 'row',
    display: 'flex',
  },

  body: {
    display: 'flex',
    flexFlow: 'column',
    flex: 1,
  },

  month: {
    ...table,
  },

  year: {
    ...table,
  },

  decade: {
    ...table,
  },

  weekDayNames: {
    flex: 'none',
  },

  

}