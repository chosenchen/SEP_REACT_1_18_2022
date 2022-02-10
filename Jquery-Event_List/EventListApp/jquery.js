// <---------- myQuery ----------> //

class myQuery {
    constructor(selector) {
        if (selector === document || selector === window) {
            this.elements = [selector];
          } else {
            this.elements = document.querySelectorAll(selector);
          }
    };
    onEvent(eventType, cb) {
            this.elements.forEach((element) => {
            element.addEventListener(eventType, cb);
        });
        return this;
    };
    get = () => {
        let data = [];
        this.elements.forEach((element) => {
            data.push(element);
        });
        return data;
    }
    val = () => {
        let name;
        this.elements.forEach((element) => {
            let data = document.querySelector(`#${element.id}`);
            console.log(element);
            name = data.value;
        });
        return name;
    }
    inputVal = () => {
        let name;
        this.elements.forEach((element) => {
            name = element.value;
        });
        return name;
    }
};

const X = (slector) => {
    return new myQuery(slector);
};


X.getData = (url) => {
    let data =
        fetch(url)
            .then((response) => response.json())
        return data;
}

X.sendData = (url, type, event) => {
    fetch(url, {
        method: type,
        body: JSON.stringify(event),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((response) => response.json());
};

// <---------- API ----------> //

const connect = (() => {
    url = "http://localhost:3000/events";

    const getEvents = () =>
        X.getData(url);

    const addEvent = (event) =>   
        X.sendData([url, event.id].join("/"), "POST", event);

    const deleteEvent = id =>
        X.sendData([url, id].join("/"), "DELETE");

    const editEvent = event =>
        X.sendData( [url, event.id].join("/"), "PUT", event);

    return { getEvents, addEvent, deleteEvent, editEvent };

})();

// <---------- View ----------> //

const View = (() => {

    const eleId = {
        events: "#event__container",
        input_event_name: "#event__add__name__input",
        input_event_start_date: "#event__add__start__date__input",
        input_event_end_date: "#event__add__end__date__input",
        input_event_submit: "#event__add__submit",
        edit_input_name: ".input_name",
        edit_btn: "#edit__btn",
        delete_btn: ".del__btn"

    };

    const render = (element, tmp) => {
        element.innerHTML = tmp;
    };

    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((ele) => {

            const start = new Date(+ele.startDate);
            const startDate = start.toISOString().substring(0,10);
            console.log(startDate)
            const end = new Date(+ele.endDate);
            const endDate = end.toISOString().substring(0,10);

            tmp += `
            <tr class="event_display_container">
              <td class="event_display_name">
                <input disabled class=${ele.eventName} id="event__name" value=${ele.eventName}>
              </td>
              <td>
                <input disabled type="date" class=${ele.eventName} id="event__start__date" value=${startDate}>
              </td>
              <td>
              <input disabled type="date" class=${ele.eventName} id="event__end__date" value=${endDate}>
              </td>
              <td>
                <button class="btn edit__btn" id="edit__btn" name="edit" value=${ele.eventName}>EDIT</button>
                <button class="btn del__btn" name="delete" id=${ele.id}>DELETE</button>
              </td>
            </tr>
            `;
        });
        return tmp;
    };

    return {
        eleId,
        render,
        createTmp,
    };
})();
// <---------- Model ----------> //
const Model = ((api, view) => {

    class Event {
        constructor(eventName, startDate, endDate, id) {
            this.eventName = eventName;
            this.startDate = startDate;
            this.endDate = endDate;
            this.id = id;
        }
    }

    class State {
        #events = [];

        get events() {
            return this.#events;
        }

        set events(newdata) {
            this.#events = newdata;

            const ele = document.querySelector(view.eleId.events);
            const tmp = view.createTmp(this.#events);
            view.render(ele, tmp);
        }
    }

    const getEvents = api.getEvents;
    const addEvent = api.addEvent;
    const deleteEvent = api.deleteEvent;
    const editEvent = api.editEvent;

    return {
        Event,
        State,
        getEvents,
        addEvent,
        deleteEvent,
        editEvent,
    };

})(connect, View);

// <---------- Controller ----------> //

const Controller = ((model, view) => {
    const state = new model.State();

    const addEvent = () => {
        X(view.eleId.input_event_submit).onEvent("click", (event) => {
            let start = new Date(X(view.eleId.input_event_start_date).val());
            let end = new Date(X(view.eleId.input_event_end_date).val());;
            const eventNew = new model.Event(
                X(view.eleId.input_event_name).val(),
                start.getTime().toString(),
                end.getTime().toString(),
            );
            console.log(eventNew);
            model.addEvent(eventNew)
            event.target.value = "";
            setTimeout( window.location.reload(), 500);
        });
    };

    const deleteEvent = () => {
        X(view.eleId.events).onEvent("click", (event) => {
            if (event.target.id !== '' && event.target.name === "delete") {
                state.events = state.events.filter((obj) => {
                    return +obj.id !== +event.target.id;
                });
                console.log(event.target.id);
                model.deleteEvent(event.target.id);
                window.location.reload();
            }
        });
    };

    const editEvent = () => {
        X(view.eleId.events).onEvent("click", (event) => {
            if (event.target.name === "edit") {
                console.log(event.target.value);
                let selected_event = state.events.find((obj) => {
                    return obj.eventName === event.target.value;
                });
                console.log(selected_event);
                X(`.${selected_event.eventName}`).get().forEach((input) => {
                    input.disabled = false;
                });
                X(document).onEvent("keyup", (event) => {
                    if (event.key === "Enter") {
                        let start = new Date(X(`#event__start__date.${selected_event.eventName}`).inputVal());
                        let end = new Date(X(`#event__end__date.${selected_event.eventName}`).inputVal());;
                        console.log(X(`#event__name.${selected_event.eventName}`));
                        const eventUpdated = new model.Event(
                            X(`#event__name.${selected_event.eventName}`).inputVal(),
                            start.getTime().toString(),
                            end.getTime().toString(),
                            id = selected_event.id
                        );
                        console.log(eventUpdated);
                        model.editEvent(eventUpdated)
                        window.location.reload();
                    };
                });

            }
        });
    };

    const init = () => {
        model.getEvents().then((data) => {
            state.events = data;
        });
    };

    const startUp = () => {
        init();
        addEvent();
        deleteEvent();
        editEvent();
    };

    return { startUp };

})(Model, View);

Controller.startUp(); 

let start = new Date()
start.getTime().toString()