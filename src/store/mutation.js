import {
    CHANGE_SELECT,
    CHANGE_NAV,
    GET_F6_DATA,
    GET_F7_DATA
} from './mutation-type'

export default {
    [CHANGE_NAV](state, index) {
        state.navigatorList.forEach((nav, navIndex) => {
            if (nav.active && index === navIndex) {
                return
            }
            if (index !== navIndex) {
                nav.active = false
            } else if (index === navIndex) {
                nav.active = true
            }
        })
        if (state.navigatorList[index].name === 'F7') {
            // TODO  先凑合一下
            return
            if (!this.hasInit.F7) {
                this.getDataAndRenderF7()
                this.hasInit.F7 = true
            }
        }
    },
    [GET_F6_DATA](state, f6Data) {
        state.chartDataList = f6Data
    },
    [GET_F7_DATA](state, f7Data) {

    },
    [CHANGE_SELECT](state, option) {
        // option.id option.selected
        let selectedCount = state.selectedIdList.length

        if (selectedCount >= 4 && !option.selected) {   // 长度大于4，而且是选中了新的   把第一个取消
            state.brandList.forEach((brand, index) => {
                if (brand.id === state.selectedIdList[0]) {
                    state.brandList[index].selected = false
                }
            })
            state.selectedIdList.splice(0, 1)
        }

        state.brandList.forEach((brand, index) => {
            if (brand.id === option.id) {
                state.brandList[index].selected = !option.selected
                if (!option.selected) {  // 如果是选中，push
                    state.selectedIdList.push(option.id)
                } else {  //如果是取消选择，把那个弄走
                    state.selectedIdList.forEach((id, idIndex) => {
                        if (id === option.id) {
                            state.selectedIdList.splice(idIndex, 1)
                        }
                    })
                }
            }
        })

        console.log('change select in mutation.js')
    },
}