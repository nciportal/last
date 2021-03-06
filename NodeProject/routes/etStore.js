const common		= require('./common');
const logger=common.logger;
const redux = require("redux");
const reduxThunk = require("redux-thunk");
const reducerObjMain = require("./etEmailReducer").EmailReducer;
const orgReducerOb = require("./etOrgReducer").OrgReducer;
const orgReducerObj = new orgReducerOb();
var cloudVaultReducer = require("./etCloudVaultReducer").cloudVaultReducer;
const newsReducer=require("./etNewsReducer").newsReducer;
const newsReducerObj = new newsReducer();
const chatReducer  = require("./etChatReducer").ChatReducer;
const chatReducerObj = new chatReducer();
const projectReducer = require("./etProjectReducer").ProjectReducer;
const CalendarReducer = require("./etCalendarReducer").CalendarReducer;
const calendarReducerObj = new CalendarReducer();
const contactReducer = require("./etContactReducer").ContactReducer;
const contactReducerObj = new contactReducer();
const stgReducer=require("./etSettingReducer").SettingReducer;
const stgReducerObj=new stgReducer();
const ondemandReducer = require("./etOnDemandReducer").OnDemandReducer;
const ondemandReducerObj = new ondemandReducer();
const loginReducer = require("./etLoginReducer").LoginReducer;
const iotReducer = require("./etIOTReducer").iotReducer;
const iotReducerObj=new iotReducer();
const loginReducerObj=new loginReducer();
const prjReducerObj = new projectReducer();
const reducerObj = new reducerObjMain();
logger.info("In etStore : start ");
exports.makeStore = function() {
	const chatReducerObject = chatReducerObj.reducer;
	const contactReducerObject = contactReducerObj.reducer;
	const loginReducerObject = loginReducerObj.reducer;
	const newsReducerObject = newsReducerObj.reducer;
	const calendarReducerObject = calendarReducerObj.reducer;
	const orgReducerObject = orgReducerObj.reducer;
	const emailReducer = reducerObj.reducer;
	const stgReducerObject = stgReducerObj.reducer;
	const ondemandReducerObject = ondemandReducerObj.reducer;
	const prjReducerObject = prjReducerObj.reducer;
	const iotReducerObject = iotReducerObj.reducer;
	var  combineReducer = redux.combineReducers({emailReducer,orgReducerObject , cloudVaultReducer, prjReducerObject,newsReducerObject,chatReducerObject,calendarReducerObject,contactReducerObject,stgReducerObject,ondemandReducerObject,loginReducerObject,iotReducerObject});
	var store = redux.createStore(combineReducer, redux.applyMiddleware(reduxThunk.default));
	return store;
};