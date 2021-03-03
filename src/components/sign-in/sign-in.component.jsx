import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { signInWithGoogle, auth } from "../../firebase/firebase.utils"

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: "",
            })
        } catch (error) {
            console.log("error in signing in", error);
        }


    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="Password" />
                    <div className="button">
                        <CustomButton type="submit" value="Sign in" />
                        <CustomButton onClick={signInWithGoogle} value="Sign in with Google" isGoogleSignIn />
                    </div>


                </form>
            </div>
        )
    }
}

export default SignIn;