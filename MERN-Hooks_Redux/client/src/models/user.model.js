import { USER_API } from '../services/user.connectToDB';

export class UserData {
    constructor(userName, email, password, confirm_password, profile_img) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.confirm_password = confirm_password;
        this.profile_img = profile_img;
    }
    
    isValidForSave() {
        if (this.userName === '') {
            return { isVaild: false, error: "Please enter an username." }
        } else if ( this.email === '' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) ){
            return { isVaild: false, error: "Please enter a vaild email." }
        } else if (this.password !== this.confirm_password || this.password === '') {
            return ({ isVaild: false, error: "Passwords do not match" })
        } else if (this.profile_img === null) {
            return { isVaild: false, error: "Please select a profile image." }
        } else { return { isVaild: true, error: '' } };
    }
}