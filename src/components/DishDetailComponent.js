import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
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

    function RenderComment({comments}) {
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


    const DishDetail = (props) => {
            if(props.selectedDishp==null){
                return(
                    <div></div>
                );
            }

            return (
                <div className="container">
                    <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish ={props.selectedDishp} />
                      </div>
                      <div className="col-12 col-md-5 m-1">
                          <h4>Comments</h4>
                          <RenderComment comments = {props.selectedDishp.comments} />
                      </div>
                    </div>
                </div>
            );
        }

export default DishDetail;
