import React from 'react';
import './style.css';

class Future extends React.Component{
    
    btnClick(){
        window.open('https://www.saleswhale.com/get-a-free-demo?ref=topNav');
    }

    btnClick2(){
        window.open('https://www.saleswhale.com/education');
    }

    render(){
        return (
            <>
                <div className="container" id="future">
                    <p id="mimossa">See the Future</p>
                    <div className="buttons" id="btnFun">
                        <button onClick={this.btnClick.bind(this)} className="button" id="aDemo">Get a Demo</button>
                        <button onClick={this.btnClick2.bind(this)} className="button" id="useCase">Read use cases</button>
                    </div>
                </div>
            </>
        );
    }    
   
}

export default Future;