import { useState } from "react";

    function Signup() {

        return(
            <div className="d-flex justify-contenet-center align-item-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Register</h2>
                    <form>
                        <div classNmae="mb-3">
                            <label htmlfor="email">
                                <strong>Nmae</strong>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="emil"
                            className="form-control rounded-0"
                            />
                        </div>
                    </form>
                    </div>              
            </div>
        )
    }