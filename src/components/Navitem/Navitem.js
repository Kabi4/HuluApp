import React from 'react';
import { connect } from 'react-redux';
import './Navitem.css';
import * as actionCreators from './../../store/actionCreators/index';

const Navitem = (props) => {
    return (
        <h2
            onClick={(e)=>{
                e.preventDefault();
                props.setoption(props.option);
            }}
         className="navitem">
            {props.children}
        </h2>
    )
};

const mapDispatchToProps = (dispatch)=>{
    return{
        setoption: (option)=>{ dispatch(actionCreators.setOption(option))}
    }
}

export default connect(null,mapDispatchToProps)(Navitem);
