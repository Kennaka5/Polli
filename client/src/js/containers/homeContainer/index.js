import { connect } from 'react-redux';
import HomeContainer from './homeContainer';


function mapStoreToProps(store) {
 return {
   loginData: store.searchData.login
 };
}


export default connect(mapStoreToProps)(HomeContainer);