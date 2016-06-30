import {<%= entityClass %>Api} from './<%= entityInstance %>.api'
import * as Types from './<%= entityInstance %>.type'

export const <%= entityClass %>Action={
  list:function ({ dispatch },data,success,error) {
      <%= entityClass %>Api.list().then(function (response) {
      console.log("list <%= entityInstance %> success");
      dispatch(Types.<%= entityInstanceUp %>_LIST_SUCCESS,response.data);
      if(success){
          success(response.data);
      }
      },function (response) {
          if(error){
              error(response.data);
          }

      });
  },
  save:function ({ dispatch },data,success,error) {
    console.log("save <%= entityInstance %> ..");
      <%= entityClass %>Api.save(data).then(function (response) {
      console.log("save <%= entityInstance %> success");
      dispatch(Types.<%= entityInstanceUp %>_SAVE_SUCCESS,response.data);
      if(success){
          success(response.data);
      }
    },function (response) {
       if(error){
           error(response.data);
       }

    });
  },
  delete:function ({ dispatch },id,success,error) {
    console.log("delete <%= entityInstance %> "+id);
      <%= entityClass %>Api.delete(id).then(function (response) {
      console.log("delete <%= entityInstance %> success");
      dispatch(Types.<%= entityInstanceUp %>_DELETE_SUCCESS,id);
      if(success){
          success(response.data);
      }
  },function (response) {
      if(error){
          error(response.data);
      }

  });
  }
}
