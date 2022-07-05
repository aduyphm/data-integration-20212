import { logIn, forgetPass } from "../../services/AdminServices";

export const login = async (admin) => {
    try {
        const response = await logIn(admin);
        if (response.status === "fail") {
            return {
                success: false,
                msg:response.msg
            }
        } else if(response.status === "success") {
            return {
                success: true,
                token: response.token,
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const resetPass = async (email) => {
    try {
        const response = await forgetPass(email);
        if (response.status === "fail") {
            return {
                success: false,
                msg:response.msg
            }
        } else if(response.status === "true") {
            return {
                success: true,
                msg:response.msg
            }
        }
    } catch (error) {
        console.log(error)
    }
}