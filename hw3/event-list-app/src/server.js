export const getEvents = () =>
    fetch("http://localhost:3000/events")
        .then(res => {
            res.json();
console.log(res.json());
        })
        .then((result) => {
            console.log('result');
            this.setState({ list: result });
        }
        )
        .catch(
            (err) => console.log(err)
    );
        
export const addEvent = () => {

};