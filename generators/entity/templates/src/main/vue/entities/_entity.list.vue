<template>
  <div class="x_panel">
    <div class="x_title">
      <h2><%= entityClass %> List
        <small></small>
      </h2>
      <ul class="nav navbar-right panel_toolbox">
        <li><button class="collapse-link" data-toggle="modal" data-target="#<%= entityInstance %>Modal"><i class="fa fa-plus"></i></button>
        </li>

      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">

      <table class="table table-bordered">
        <thead>
        <tr>
            <%_ for (idx in fields) {
            var fieldName = fields[idx].fieldName;
            var fieldType = fields[idx].fieldType;
            var fieldTypeBlobContent = fields[idx].fieldTypeBlobContent; _%>
            <th><%= fieldName %></th>
            <%_ } _%>
          <th>Oprator</th>
        </tr>
        </thead>
        <tbody>


        <tr v-if="<%= entityInstance %>List.length>0" v-for="item in <%= entityInstance %>List">
            <%_ for (idx in fields) {
            var fieldName = fields[idx].fieldName;
            var fieldType = fields[idx].fieldType;
            var fieldTypeBlobContent = fields[idx].fieldTypeBlobContent; _%>
            <td>{{item.<%= fieldName %>}}</td>
            <%_ } _%>
          <td>
            <i class="fa fa-eye" @click="view(item)"></i>&nbsp;
            <i class="fa fa-edit" @click="edit(item)"></i>&nbsp;
            <i class="fa fa-remove" @click="deleteAct(item.id)"></i>&nbsp;

          </td>
        </tr>
        <tr v-if="<%= entityInstance %>List.length==0">
          <td class="text-center" colspan="6">
            暂无数据!
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
    <update-<%= entityInstance %> v-ref:<%= entityInstance %>_update></update-<%= entityInstance %>>
</template>

<script>


  import Upate<%= entityClass %> from './<%= entityInstance %>.vue'
  import {<%= entityClass %>Action} from './<%= entityInstance %>.action'
  export default{

    data () {
      return {

      }
    },
    vuex:{
      getters:{
      <%= entityInstance %>List: ({<%= entityInstance %>Modules}) => <%= entityInstance %>Modules.<%= entityInstance %>List,
    },
    actions:{
      listAct:<%= entityClass %>Action.list,
      deleteAct:<%= entityClass %>Action.delete
    }
  },
  components:{
    'update-<%= entityInstance %>':Upate<%= entityClass %>
  },
  methods:{
    edit:function(item){
        this.$refs.<%= entityInstance %>_update.edit(item);
    }
  },
  ready: function () {
    this.listAct();
  }

  }
</script>
