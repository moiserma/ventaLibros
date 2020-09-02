/* Se recomienda los scrips escritos por nosotros referenciarlos y colocarlos en una carpeta Js */

$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 3000
    });

    $('#quiero').on('show.bs.modal', function(e){
        console.log('El modal lo quiero se esta mostrando');

        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-secondary');
        $('#contactoBtn').prop('disabled',true);


    });
    $('#quiero').on('shown.bs.modal', function(e){
        console.log('El modal lo quiero se mostró');
    });

    $('#quiero').on('hide.bs.modal', function(e){
        console.log('El modal lo quiero se oculta');
    });
    $('#quiero').on('hidden.bs.modal', function(e){
        console.log('El modal lo quiero se ocultó');
        $('#contactoBtn').prop('disabled',false);
    });

});