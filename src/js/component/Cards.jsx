import React from "react"

export const Cards = ({img}) => {
    return (
        <div className="card col-7 col-lg-2 container-fluid mb-4" >
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr />
                <a href="#" className="btn btn-primary d-flex justify-content-center">Find Out More!</a>
            </div>
        </div>
    );
};