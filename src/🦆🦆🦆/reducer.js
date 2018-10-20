const INITIAL_STATE = {
	name: "",
	address: "",
	city: "",
	state: "",
	zip: "",
	mortgage: "",
	rent: "",
	img: ""
};

const NAME = "NAME";
const ADDRESS = "ADDRESS";
const CITY = "CITY";
const STATE = "STATE";
const ZIP = "ZIP";
const MORTGAGE = "MORTGAGE";
const RENT = "RENT";
const IMG = "IMG";
const RESET = "RESET";

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case NAME:
			return Object.assign({}, state, { name: action.payload });
		case ADDRESS:
			return Object.assign({}, state, { address: action.payload });
		case CITY:
			return Object.assign({}, state, { city: action.payload });
		case STATE:
			return Object.assign({}, state, { state: action.payload });
		case ZIP:
			return Object.assign({}, state, { zip: action.payload });
		case MORTGAGE:
			return Object.assign({}, state, { mortgage: action.payload });
		case RENT:
			return Object.assign({}, state, { rent: action.payload });
		case IMG:
			return Object.assign({}, state, { img: action.payload });
		case RESET:
			return { ...action.payload };
		default:
			return state;
	}
}

export function reset() {
	return {
		type: RESET,
		payload: INITIAL_STATE
	};
}

export function update(prop, value) {
	switch (prop) {
		case "name":
			return {
				type: NAME,
				payload: value
			};
		case "address":
			return {
				type: ADDRESS,
				payload: value
			};
		case "city":
			return {
				type: CITY,
				payload: value
			};
		case "state":
			return {
				type: STATE,
				payload: value
			};
		case "zip":
			return {
				type: ZIP,
				payload: value
			};
		case "mortgage":
			return {
				type: MORTGAGE,
				payload: value
			};
		case "rent":
			return {
				type: RENT,
				payload: value
			};
		case "img":
			return {
				type: IMG,
				payload: value
			};
		default:
			return;
	}
}
