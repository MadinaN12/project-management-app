const spaceBetween = 'space-between';

export const column = {
  mainGrid: {
    backgroundColor: '#448aff',
    height: 'calc(100vh - 71px)',
  },
  boardGrid: {
    gap: 2,
    backgroundColor: '#448aff',
    flexWrap: 'nowrap',
    maxWidth: '100vw',
    overflow: 'auto',
    height: 'calc(100vh - 100px)',
  },
  column: {
    minWidth: '280px',
    maxWidth: '280px',
    borderRadius: 2,
    boxShadow: 'none',
    margin: '0 8px 0 8px',
    backgroundColor: '#eceff1',
    padding: 1,
  },
  columnInner: {
    maxHeight: 'calc(80vh - 200px)',
    overflow: 'auto',
  },
  bottom: {
    displayFlex: '',
    justifyContent: spaceBetween,
    alignItems: 'self-end',
    m: '5px 0 5px 0',
  },
  btn: {
    fontSize: '10px',
    maxWidth: '20px',
    padding: '6px 0px',
  },
  bigBtn: {
    fontSize: '10px',
    width: '150px',
    padding: '6px 0px',
  },
  header: {
    displayFlex: spaceBetween,
    justifyContent: spaceBetween,
    alignItems: 'self-end',
    m: '5px 0 5px 0',
    minWidth: '50px',
    flexWrap: 'nowrap',
  },
  title: {
    width: '100%',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  input: {
    maxHeight: '28px',
    border: '1px solid blue',
    borderRadius: 1,
    backgroundColor: 'white',
  },
  headerGrid: {
    displayFlex: spaceBetween,
    justifyContent: 'space-around',
  },
  addBtn: {
    minWidth: '272px',
    maxWidth: '272px',
    maxHeight: '40px',
    margin: '0 8px 0 8px',
    backgroundColor: '#eceff1',
    padding: 1,
    color: 'black',
    ':hover': {
      bgcolor: '#bbdefb',
    },
  },
};
