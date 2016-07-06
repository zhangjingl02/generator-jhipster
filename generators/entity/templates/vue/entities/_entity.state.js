
import {
<%= entityInstanceUp %>_SAVE_SUCCESS,
<%= entityInstanceUp %>_UPDATE_SUCCESS,
<%= entityInstanceUp %>_LIST_SUCCESS,
<%= entityInstanceUp %>_DELETE_SUCCESS
} from './<%= entityFileName %>.type'


// initial state
const state = {
    <%= entityInstance %>List:[]
}

// mutations
const mutations = {
  [<%= entityInstanceUp %>_SAVE_SUCCESS] (state, data) {
    console.log("save <%= entityInstance %> success:"+data);
    state.<%= entityInstance %>List.unshift(data)
  },
[<%= entityInstanceUp %>_UPDATE_SUCCESS] (state, data) {
    console.log("save <%= entityInstance %> update:"+data);
    //state.<%= entityInstance %>List.unshift(data)
},
  [<%= entityInstanceUp %>_LIST_SUCCESS] (state, data) {
    console.log("list <%= entityInstance %> success!!!");
    state.<%= entityInstance %>List=data;
  },
  [<%= entityInstanceUp %>_DELETE_SUCCESS] (state, id) {
    state.<%= entityInstance %>List.forEach(function (item,index) {
      if(item.id==id){
        state.<%= entityInstance %>List.splice(index,1);
        return;
      }
    });
  },

}

export default {
  state,
  mutations
}
