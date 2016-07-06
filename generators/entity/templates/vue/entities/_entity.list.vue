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
          <td class="text-center" colspan="<%=fields.length+1 %>">
            暂无数据!
          </td>
        </tr>
        </tbody>
      </table>
        <pagination v-bind:links="links" page="pagination.page" v-bind:change="query"></pagination>
    </div>
  </div>
    <update-<%= entityInstanceKebab %> v-ref:<%= entityInstanceKebab %>_update></update-<%= entityInstanceKebab %>>
</template>

<script>


  import Upate<%= entityClass %> from './<%= entityFileName %>.vue'
  import {<%= entityClass %>Action} from './<%= entityFileName %>.action'
  export default{

    data () {
      return {
          links:{},
          pagination:{
              page: 0,
              sort: '',
              search: '',
          },
      }
    },
    vuex:{
      getters:{
      <%= entityInstance %>List: function({<%= entityInstance %>Modules}) {
      return <%= entityInstance %>Modules.<%= entityInstance %>List;
      }
    },
    actions:{
      listAct:<%= entityClass %>Action.list,
      deleteAct:<%= entityClass %>Action.delete
    }
  },
  components:{
    'update-<%= entityInstanceKebab %>':Upate<%= entityClass %>
  },
  methods:{
    edit:function(item){
        this.$refs.<%= entityInstanceKebab %>_update.edit(item);
    },
      query:function () {
          var me=this;
          this.listAct(this.pagination,function (res) {
              me.links=PaginationUtil.parse(res.headers('link'));
          });
      }
  },
  ready: function () {
    this.listAct();
  }

  }
</script>
