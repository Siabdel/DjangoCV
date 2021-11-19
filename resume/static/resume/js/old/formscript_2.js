var init_name = "";

$(document).on('click', '.add-form-row', function (e) {
        e.preventDefault();
        //var Total_Forms = parseInt($(".method_form_1").find("#id_step2-TOTAL_FORMS").val());
        var clone_row = $(".formation-list").clone().find("div.form-row-local").hide().appendTo(".formation-list-plus").slideDown(300);
        // numeroté les id et name des balises input
        var Total_Forms_output = parseInt($("#id_step2-TOTAL_FORMS").val());

        if(Total_Forms ){

            $(".formation-list-plus").find(".form-row-local:last-child").each(
              function () {

                $(".formation-list-plus").find(".form-field-input").each(
                   function () {
                     var regular_exp = new RegExp('(' + 'step2' + '-\\d+-)');
                     var replacement = "step2-" + Total_Forms + "-";
                     if ($(this).attr("for")) $(this).attr("for", $(this).attr("for").replace(regular_exp, replacement));
                     if (this.id) this.id = this.id.replace(regular_exp, replacement);
                     if (this.name) this.name = this.name.replace(regular_exp, replacement);
                     $(this).val("")
                     $(this).removeAttr('value');
                     return true
                   }
                 );
                 return true

               }
             );
            //$(clone_row).insertAfter(".form").slideDown(30);

        // incrementer le TOTAL_FORMS
        $(".method_form_1").find("#id_step2-TOTAL_FORMS").val(Total_Forms_output + 1);
        console.log("this.id  = " + Total_Forms_output);

      }
    })

    //suppression
    $(".form-row-local").find(".delete-form-row").click(
        function (event) {
            event.preventDefault();

            Total_Forms = $(".form-row-local").length;
            if (Total_Forms > 1) {

                $(this).parent(".form-row-local").remove();
                $(".method_form_1").find("#id_step2-TOTAL_FORMS").val($(".form-row-local").length);
                form_name = $(".form-row-local");

                for (i = 0; i < Total_Forms; i++) {
                    $(form_name.get(i)).find(".form-field-input").each(
                        function () {
                            var regular_exp = new RegExp('(' + 'step2' + '-\\d+-)');
                            var replacement = "step2-" + i + "-";
                            if ($(this).attr("for")) $(this).attr("for", $(this).attr("for").replace(regular_exp, replacement));
                            if (this.id) this.id = this.id.replace(regular_exp, replacement);
                            if (this.name) this.name = this.name.replace(regular_exp, replacement);

                            return false;
                        }
                    )
                }


            }


        }
    );
