import {connect} from 'react-redux';
import * as actions from '@/actionCreator/homeAction'


export default connect(state=>state.get('home').toJS(),actions)