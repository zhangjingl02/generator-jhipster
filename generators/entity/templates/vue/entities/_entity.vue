<template>
    <app-modal id='<%= entityInstance %>Modal' v-bind:evts='evts' v-bind:save='save' type="warning" title="" v-ref:<%= entityInstanceSnake %>_modal>
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
            var fieldValidate = fields[idx].fieldValidate;
            var fieldTypeBlobContent = fields[idx].fieldTypeBlobContent;
            var field=fields[idx];
            var fieldValdate=0;
            if (field.fieldValidate == true) {
            fieldValdate=1;
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
            }

            _%>
            <div class="form-group">
                <label class="control-label col-md-2 col-sm-2 col-xs-12"><%= fieldName %></label>
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <input type="text" class="form-control" placeholder="<%= fieldName %>" v-model="<%= entityInstance %>.<%= fieldName %>"
                           <%_ if( fieldValdate==1 ) { _%>
                           initial="off" v-error="$productValidator.<%= fieldName %>"       v-validate:<%= entityInstance %>.<%= fieldName %>="{ <%= result %>}"
                           <%_ } _%>
                    >
                </div>
            </div>
            <div class="ln_solid"></div>
            <%_ } _%>


        </validator>

      </div>
    </div>
  </div>
    <alert text="保存成功" v-ref:palert></alert>
</app-modal>
</template>

<script>

    import {<%= entityClass %>Action} from './<%= entityFileName %>.action'
  export default{
    data(){
      return {
        isNew:true,
        <%= entityInstance %>:{

        id:null,
        <%_ for (idx in fields) {
        var fieldName = fields[idx].fieldName;
        var fieldType = fields[idx].fieldType;
        var fieldTypeBlobContent = fields[idx].fieldTypeBlobContent; _%>
            <%= fieldName %>:'',
        <%_ } _%>

        }
      }
    },
    vuex:{
    actions:{
      saveAct:<%= entityClass %>Action.save,
        updateAct:<%= entityClass %>Action.update,
    }
  }, computed:{
        evts:function () {
            var me=this;
            return {
                show:function (e) {
                    console.log('show.evt2');
                    if(me.isNew){
                        me.<%= entityInstance %>={};
                    }
                },
                hide:function (e) {
                    console.log('hide.evt');
                    me.isNew=true;
                },
            }
        }
    },
    methods: {
      save: function () {
        var me = this;
        if (this.$<%= entityInstance %>Validator.invalid) {
          return;
        }

        $("#btn-save").button('loading');
          var saveFunc=this.saveAct;
          if(this.<%= entityInstance %>.id!=null){
              console.log("update");
              saveFunc=this.updateAct;
          }


        saveFunc(this.<%= entityInstance %>,function (res) {
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
          this.isNew=false;
          this.$refs.<%= entityInstanceSnake %>_modal.show();
      },
      close: function () {
          this.$refs.<%= entityInstanceSnake %>_modal.hide();
      }
    },
    ready: function () {
    }

  }
</script>
