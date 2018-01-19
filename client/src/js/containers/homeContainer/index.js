import { connect } from 'react-redux';
import HomeContainer from './homeContainer';


function mapStoreToProps(store) {
 return {
   searchData: store.searchData.address
 };
}


export default connect(mapStoreToProps)(HomeContainer);