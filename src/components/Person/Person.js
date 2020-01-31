import React,{Component} from 'react';
import PropTypes from 'prop-types';  //stiahnuti novy balik

import Aux from '../../High Order Comp/Auxillia'
import withCLass from '../../High Order Comp/withClass';
import classes from './Person.css';


class Person  extends Component{
    render() {
        console.log('rendering person') ;
        return( //[                            //JSON style kde treba  keys v prvkoch a ciarky medzi prvkami
           //namiesto Aux staci aj React.Fragment
            <Aux>
                 <p key="i1" onClick={this.props.click}>
                     I'm {this.props.name} and I am {this.props.age} years old!
                 </p>
                 <p key="i2" >{this.props.children}</p>
                 <input key="i3"
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name} />
             </Aux>
        );
           // ];
    }
}
//toto je na to ak clovek da zly prop, tak to hodi sem
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withCLass(Person, classes.Person);
