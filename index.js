require("dotenv/config");
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../src/routes");
const mongo_1 = __importDefault(require("./config/mongo"));
const PORT = process.env.PORT || 200;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
app.use(routes_1.router); //usar routes


app.get('/', (req, res) => {
    res.send('Conexión establecida correctamente');
    res.end();
});
app.listen(PORT, () => {
    console.log(PORT);
});
