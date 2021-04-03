const path = require('path');

require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

const apiPort = process.env.PORT || 3000;
const dbUri = 'mongodb://localhost:27017/chat';

export { apiPort, dbUri };
