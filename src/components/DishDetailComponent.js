import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    class DishDetail extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                selectedDish: null
            }
        }

        renderDish(dish) {
            if (dish != null)
                return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }

        renderComment(comments) {
            if (comments==null){
                return (<div></div>);
            }
                    const commentp = comments.map((comment) => {
                        return (          
                            <div key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                            </p>
                        </div>
                        );
                    });
                
            return(
                    <div>
                        {commentp}
                    </div>
                );
        }


        render(){
            if(this.props.selectedDishp==null){
                return(
                    <div></div>
                );
            }

            return (
                    <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDishp)}
                      </div>
                      <div className="col-12 col-md-5 m-1">
                          <h4>Comments</h4>
                          {this.renderComment(this.props.selectedDishp.comments)}
                      </div>
                    </div>
            );
        }
    }

export default DishDetail;
