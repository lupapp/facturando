import React, {Component} from 'react';
import Main from './Main';
class Encabezado extends Component{
    render(){
        return(
            <header>
                <div className="row">
                    <div className="col-md-2">
                    <img src="images/logo.png"></img>
                    </div>
                    <div class="col-med-10">
                    <Main></Main>
                    </div>
                </div>
            </header>

        );
    }

}
export default Encabezado;
