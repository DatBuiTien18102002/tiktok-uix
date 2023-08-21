import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
