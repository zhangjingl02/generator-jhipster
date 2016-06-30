<template>
    <app-modal id='<%= entityInstance %>Modal' type="warning" title="" footer="hidden" v-ref:<%= entityInstance %>_modal>
  <div class="x_panel">
    <div class="x_title">
      <h2><%= entityClass %> Infomation
        <small></small>
      </h2>

      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <br>
      <div class="form-horizontal form-label-left">

        <validator name="<%= entityInstance %>Validator">

            <%_ for (idx in fields) {
            var fieldName = fields[idx].fieldName;
            var fieldType = fields[idx].fieldType;
            var fieldTypeBlobContent = fields[idx].fieldTypeBlobContent;
            var field=fields[idx];
            if (field.fieldValidate == true) {
            var rules = field.fieldValidateRules;
            var validators = [];

            if (rules.indexOf('required') != -1 && field.fieldType != 'Boolean') {
            validators.push('required:true');
            }
            if (rules.indexOf('minlength') != -1) {
            validators.push('minlength:' + field.fieldValidateRulesMinlength);
            }
            if (rules.indexOf('maxlength') != -1) {
            validators.push('maxlength:' + field.fieldValidateRulesMaxlength );
            }
            if (rules.indexOf('min') != -1) {
            //validators.push('min="' + field.fieldValidateRulesMin + '"');
            }
            if (rules.indexOf('max') != -1) {
            //validators.push('max="' + field.fieldValidateRulesMax + '"');
            }
            if (rules.indexOf('minbytes') != -1) {
            //validators.push('minbytes="' + field.fieldValidateRulesMinbytes +'"');
            }
            if (rules.indexOf('maxbytes') != -1) {
            //validators.push('maxbytes="' + field.fieldValidateRulesMaxbytes +'"');
            }
            if (rules.indexOf('pattern') != -1) {
            validators.push('pattern:/' + field.fieldValidateRulesPattern + '/');
            }

            var result = validators.join(',');
            var isvalidator = (validators.length);
            }

            _%>
            <div class="form-group">
                <label class="control-label col-md-2 col-sm-2 col-xs-12"><%= fieldName %></label>
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <input type="text" class="form-control" placeholder="<%= fieldName %>" v-model="<%= entityInstance %>.<%= fieldName %>"
                           <%_ if( isvalidator ) { _%>
                           initial="off" v-error="$productValidator.<%= fieldName %>"       v-validate:<%= entityInstance %>.<%= fieldName %>="{ <%= result %>}"
                           <%_ } _%>
                    >
                    <p v-if="$productValidator.no.invalid" class="text-danger">请输入4-12个字符,只能用字母和数字</p>
                </div>
            </div>
            <%_ } _%>


        </validator>

        <div class="ln_solid"></div>
        <div class="form-group">
          <div class="col-md-4 col-sm-4 col-xs-6 col-md-offset-3">
            <alert text="保存成功" v-ref:palert></alert>
          </div>

        </div>

        <div class="form-group">
          <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
            <a href="#<%= entityInstance %>-list" class="btn btn-primary" @click="close">关闭</a>
            <button id="btn-save" class="btn btn-success" @click="save" data-loading-text='保存中'>保存</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</app-modal>
</template>

<script>

    import {<%= entityClass %>Action} from './<%= entityInstance %>.action'
  export default{
    data(){
      return {
        <%= entityInstance %>:{

        id:null,
        <%_ for (idx in fields) {
        var fieldName = fields[idx].fieldName;
        var fieldType = fields[idx].fieldType;
        var fieldTypeBlobContent = fields[idx].fieldTypeBlobContent; _%>
            <%= fieldName %>:'',
        <%_ } _%>


      }
    },
    vuex:{
    actions:{
      saveAct:<%= entityClass %>Action.save,
    }
  },
    methods: {

      save: function () {
        var me = this;
        if (this.$<%= entityInstance %>Validator.invalid) {
          return;
        }

        $("#btn-save").button('loading');
        this.saveAct(this.<%= entityInstance %>,function (res) {
            console.log(res.data);
            $("#btn-save").button('reset');
            me.$refs.palert.show("保存成功",'success');
        },function(res){
            $("#btn-save").button('reset');
            me.$refs.palert.show("保存失败",'danger');
        }
      )

      },
      edit: function (item) {
          this.<%= entityInstance %>=item;
          this.$refs.<%= entityInstance %>_modal.show();
      },
      close: function () {
          this.$refs.<%= entityInstance %>_modal.hide();
      }
    },
    ready: function () {
    }

  }
</script>
