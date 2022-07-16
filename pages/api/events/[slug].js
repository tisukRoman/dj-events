const { events } = require('./data.json');

const getEventBySlug = (req, res) => {
    const evt = events.filter(evt => evt.slug === req.query.slug);
    res.status(200).json(evt);
}

export default getEventBySlug;