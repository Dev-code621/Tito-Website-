let dbconnect,
    srv = true,
    mongo_host = 'cluster0.srmvu.mongodb.net',
    mongo_port = '',
    mongo_dbname = 'tito',
    mongo_user = 'admin',
    mongo_pass = '9kwFJeCWtv5qTbQN'
    //mongo_user = process.env.MONGO_USER,
    //mongo_pass = process.env.MONGO_PASS,
    // db_env = process.env.NODE_ENV.toLowerCase();
    // console.log('env========', db_env)

if (process.env.MONGO_HOST) mongo_host = process.env.MONGO_HOST;
if (process.env.MONGO_PORT) mongo_port = process.env.MONGO_PORT;
if (process.env.MONGO_DBNAME) mongo_dbname = process.env.MONGO_DBNAME;


// if (process.env.MONGO_SRV == 'true' || process.env.MONGO_SRV == true) {
    srv = '+srv'
    mongo_port = ''
//}

if ((mongo_user && mongo_pass) && process.env.NODE_ENV !== 'test') {
    dbconnect = `mongodb${srv}://${mongo_user}:${mongo_pass}@${mongo_host}${mongo_port}/${mongo_dbname}`
} else {
    dbconnect = `mongodb://${mongo_host}:${mongo_port}/${mongo_dbname}`;
}

if (srv == 'true' || srv == true) {
    dbconnect = `${dbconnect}?retryWrites=true&w=majority`
}

console.log('the db', dbconnect)
module.exports = dbconnect