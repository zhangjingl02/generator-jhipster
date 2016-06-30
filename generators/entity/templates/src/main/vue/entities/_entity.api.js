import {<%= entityClass %>Resource} from '../../api/resources'
export const <%= entityClass %>Api={
  list:function (data) {
    return <%= entityClass %>Resource.get(data);
  },
  save:function (data) {
    return <%= entityClass %>Resource.save(data);
  },
  delete:function (data) {
    return <%= entityClass %>Resource.delete({id:data});
  }
}
