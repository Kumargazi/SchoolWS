const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const port = 8080
const morgan = require('morgan') //поступает любой запрос для обработки
const mongoose = require('mongoose') // подключение к базе даных
const bcrypt = require('bcryptjs') // для шифрования паролей
const multer = require('multer')
const fs = require('fs')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
// const redis = require('redis')

app.listen(port, () =>{
	console.log(`Server listening on port ${port}`)
})