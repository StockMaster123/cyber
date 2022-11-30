const PORT = process.env.PORT || 200;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
app.use(routes_1.router); //usar routes

app.use('/public', express_1.default.static(`${__dirname}/storage/img/product`));
app.get('/', (req, res) => {
    res.send('Conexión establecida correctamente');
 
});
app.listen(PORT, () => {
    console.log(PORT);
});
