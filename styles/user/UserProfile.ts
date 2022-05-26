export const style = {
  box: {
    minHeight: '80px',
    background: '#c9c9c9',
    width: '100%',
    p: '0.3% 0',
  },

  userTitleBox: {
    borderRadius: '50%',
    height: '70px',
    width: '70px',
    background: 'blue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    m: 'auto',
  },

  popUp: {
    height: '55%',
    width: '50%',
    background: 'white',
    m: '7% auto 0',
    p: '3%',
    borderRadius: 2,
  },

  button: { m: '2% 2% 0 auto', display: 'block', width: '100px' },

  input: {
    width: '80%',
    height: '30px',
    p: '0.1% 0 0 1%',
    letterSpacing: '1px',
    display: 'block',
    border: '1px solid grey',
    borderRadius: 1,
    m: '2% auto 1% 0',
  },

  label: {
    fontSize: '14px',
    display: 'block',
  },

  flex: {
    display: 'flex',
    justifyContent: 'flex-end',
    m: '2% auto',
    gap: 2,
  },
};

export const removeStyle = {
  popUp: {
    background: 'white',
    height: '22%',
    width: '260px',
    m: '27% auto',
    p: 2,
    borderRadius: 2,
  },

  flex: {
    display: 'flex',
    m: '3% auto 0%',
    justifyContent: 'space-between',
  },
};
