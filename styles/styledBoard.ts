const spaceBetween = 'space-between';

export const column = {
  boardGrid: {
    gap: 2,
    backgroundColor: '#448aff',
    flexWrap: 'nowrap',
    maxWidth: '100vw',
    overflow: 'auto',
  },
  column: {
    minWidth: '272px',
    maxWidth: '272px',
    borderRadius: 2,
    boxShadow: 'none',
    margin: '0 8px 0 8px',
    backgroundColor: '#eceff1',
    padding: 1,
  },
  columnInner: {
    maxHeight: 'calc(100vh - 200px)',
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
};
