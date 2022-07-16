const { events } = require('./data.json');

const getEvents = (req, res) => {
    res.status(200).json(events);
}

export default getEvents;