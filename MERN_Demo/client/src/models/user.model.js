export class UserData {
    constructor(userName, email, password, confirm_password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.confirm_password = confirm_password;
    }

    isValidForSave() {
        if(this.userName === ''){
            return { isVaild: false , error: "Please enter an username."}
        }else if(this.password !== this.confirm_password || this.password === '' ){
            return ( { isVaild: false , error: "Passwords do not match"} )
        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
            return { isVaild: false , error: "Please enter a vaild email."}
        }else { return { isVaild: true , error: ''} };

    }
}