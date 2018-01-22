import { connect } from 'react-redux';
import AdminContainer from "./adminContainer";


function mapStoreToProps(store) {
    return {
        adminData: store.adminData
    };
}

export default connect(mapStoreToProps)(AdminContainer);