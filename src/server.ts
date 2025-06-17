import app from "./app"
import log from "./lib/logger"

const PORT = 3000

app.listen(PORT, () => {
    log.info(`Server running on PORT ${PORT}`)
});