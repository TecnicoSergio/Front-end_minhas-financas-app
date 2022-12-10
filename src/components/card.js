import React from "react";

class Card extends React.Component{
    render(){
        return(
            <div className="card mb-3">
                <h3 className="card-header">{this.props.title}
                    <div className="card-body">
                        {this.props.children}


                    </div>

                </h3>

            </div>
        )
    }
}

export default Card;