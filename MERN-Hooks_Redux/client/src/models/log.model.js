export class LogData {

    constructor(_id, photoLabel, dateTaken, url, city, country, likes, user, liked_users) {
        this._id = _id;
        this.photoLabel = photoLabel;
        this.dateTaken = dateTaken;
        this.url = url;
        this.city = city;
        this.country = country;
        this.likes = likes;
        this.user = user;
        this.liked_users = liked_users;
    }

}