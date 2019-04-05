import {
    CHANGE_SELECT,
} from './mutation-type'

export default {
    changeSelect({commit, state}, option) {
        console.log('change select in action.js')
        commit(CHANGE_SELECT, {
            id: option.id,
            selected: option.selected,
        })
    }
}