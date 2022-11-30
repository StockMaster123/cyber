
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../src/routes");
const mongo_1 = __importDefault(require("./config/mongo"));
const PORT = process.env.PORT || 200;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
app.use(routes_1.router); //usar routes
(0, mongo_1.default)()
    .then((e) => console.log('conectado a base de datos'))
    .catch((err) => console.warn(err));
app.get('/', (req, res) => {
    res.send('Conexión establecida correctamente');
    res.end();
});
app.listen(200, () => {
    console.log(PORT);
});
