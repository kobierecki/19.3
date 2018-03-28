const COMMENT_ADD = 'COMMENT_ADD';
const COMMENT_EDIT = 'COMMENT_EDIT';
const COMMENT_REMOVE = 'COMMENT_REMOVE';
const COMMENT_THUMB_UP = 'COMMENT_THUMB_UP';
const COMMENT_THUMB_DOWN = 'COMMENT_THUMB_DOWN';

export function commentAdd(message) {
	return {
		type: COMMENT_ADD,
		payload: {
			message
		}
	};
};

export function commentEdit(message) {
	return {
		type: COMMENT_EDIT,
		payload: {
			message
		}
	};
};

export function commentRemove(id) {
	return {
		type: COMMENT_REMOVE,
		payload: {
			id
		}
	};
};

export function commentThumbUp(id) {
	return {
		type: COMMENT_THUMB_UP,
		payload: {
			id
		}
	};
};

export function commentThumbDown(id) {
	return {
		type: COMMENT_THUMB_DOWN,
		payload: {
			id
		}
	};
};