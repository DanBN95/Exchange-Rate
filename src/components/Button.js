import PropTypes from 'prop-types'

const Button = ({ classname, color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
            backgroundColor: color,
            width: "250px", 
            height: "50px",
            color: 'white',
            fontWeight: 600,
            borderRadius: 15,
            fontFamily: 'inherit',
            cursor: 'pointer'
        }}
      className={classname}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: '#007AF3',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button