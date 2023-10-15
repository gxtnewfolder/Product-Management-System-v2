const Product = require('../models/Product');

exports.read =  async (req, res) => {
    try {
        // code
        const id = req.params.id;
        const Producted = await Product.findOne({ _id: id }).exec();
        res.send(Producted);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
}

exports.list = async (req, res) => {
    try {
        // code
        const Producted = await Product.find({}).exec();
        res.send(Producted);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
}

exports.create = async (req, res) => {
    try {
        // code
        var data = req.body

        const Producted = await Product(data).save()
        res.send(Producted)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async (req, res) => {
    try {
        // code
        const id = req.params.id
        var newData = req.body

        const updated = await Product
            .findOneAndUpdate({ _id: id }, newData, { new: true })
            .exec()
        res.send(updated)

    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const removed = await Product.findOneAndDelete({ _id: id }).exec()

        res.send(removed)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}