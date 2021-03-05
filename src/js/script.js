$(function () {

    $('.filter-style').styler(); // Стилизация инпутов, чекбоксов, селектов ...

    @@include('tabs.js')

    @@include('input.js')

    @@include('rate.js')

    @@include('../blocks/modules/header/header.js')

    @@include('../blocks/modules/questions/questions.js')

    @@include('../blocks/modules/order-process/order-process.js')

    // ===================== POPUPS =======================//

    @@include('../blocks/modules/popups/popups.js')

    // ===================== SLIDERS ========================/

    @@include('../blocks/modules/clients/clients.js')

    @@include('../blocks/modules/start/start.js')

    @@include('../blocks/modules/logos/logos.js')


    //=====================VALIDATION==================//

    @@include('validate.js')

    @@include('phone-select.js')

});