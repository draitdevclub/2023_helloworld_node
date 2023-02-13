const COLLECTION_NAME = 'REF_COUNTRIES';
var ObjectId = require('mongodb').ObjectId;

exports.getAll = async function (options = null) {
    // console.log('In getAll');
    // console.log('options: ' + JSON.stringify(options));

    try {
        const query = {
            is_live: true,
        };
        // console.log('query: ' + JSON.stringify(query));

        if (options === null) {
            options = {
                projection: {
                    is_live: 0,
                    creation_date: 0,
                    updation_date: 0,
                    operator_id: 0,
                },
                sort:{
                    code:1
                }
            };
        }
        // console.log('options: ' + JSON.stringify(options));

        var data = await myDB.collection(COLLECTION_NAME).find(query, options).toArray();
        // console.log("data: " + JSON.stringify(data));

        return data;
    } catch (e) {
        console.log(e);
        throw Error('Error')
    }
}

exports.getById = async function (id, options = null) {
    // console.log('In getById');
    // console.log('id: ' + id);
    // console.log('options: ' + JSON.stringify(options));

    try {
        const query = {
            _id: ObjectId(id),
        };
        // console.log('query: ' + JSON.stringify(query));

        if (options === null) {
            options = {
                projection: {
                    is_live: 0,
                    creation_date: 0,
                    updation_date: 0,
                    operator_id: 0,
                },
            };
        }
        // console.log('options: ' + JSON.stringify(options));

        var data = await myDB.collection(COLLECTION_NAME).findOne(query, options);
        // console.log("data: " + JSON.stringify(data));

        return data;
    } catch (e) {
        console.log(e);
        throw Error('Error')
    }
}

exports.getByCode = async function (code, options = null) {
    // console.log('In getByCode');
    // console.log('code: ' + code);
    // console.log('options: ' + JSON.stringify(options));

    try {
        const query = {
            code: code,
            is_live: true,
        };
        // console.log('query: ' + JSON.stringify(query));

        if (options === null) {
            options = {
                projection: {
                    is_live: 0,
                    creation_date: 0,
                    updation_date: 0,
                    operator_id: 0,
                },
            };
        }
        // console.log('options: ' + JSON.stringify(options));

        var data = await myDB.collection(COLLECTION_NAME).findOne(query, options);
        // console.log("data: " + JSON.stringify(data));

        return data;
    } catch (e) {
        console.log(e);
        throw Error('Error')
    }
}
