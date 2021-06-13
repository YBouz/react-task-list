import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ({title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : '#0066a1'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
