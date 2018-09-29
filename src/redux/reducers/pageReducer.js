const pageReducer = (state = "home", action) => {
	switch(action.type){
		case "CHANGE_PAGE":
			return action.page;
		default: 
			return "home";
	}
};

export default pageReducer;
