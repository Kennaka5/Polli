import { connect } from 'react-redux';
import VisitorContainer from './visitorContainer';


function mapStoreToProps(store) {
 return {
   visitorData: store.visitorData
 };
}


export default connect(mapStoreToProps)(VisitorContainer);