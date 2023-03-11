import React from "react";

export const Warm = () => {
    return (
        <div className="container-fluid p-5 ">
            <div className="card bg-light mb-3">
                <div className="card-body">
                    <p className="card-title display-2 mt-4"><b>A Warn Welcome!</b></p>
                    <p className="card-text fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <a href="#" className="btn btn-primary ms-3 mb-5">Call to action!</a>
                </div>
            </div>
        </div>
    );
};