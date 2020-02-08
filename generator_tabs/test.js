
let block_array_t2 = [
    ['#rec157045395', '1579828375361', '#tabs_t2_1'],
    ['#rec158063676', '1579828495190', '#tabs_t2_2'],
    ['#rec158064632', '1579828623343', '#tabs_t2_3'],
    ['#rec158067911', '1579828659043', '#tabs_t2_4'],
    ['#rec158069968', '1579828667056', '#tabs_t2_5'],];

let block_array = [
    ['#rec158925496', '1580118251333', '#tab1'],
    ['#rec158969503', '1580118590356', '#tab2'],
    ['#rec158977673', '1580118596706', '#tab3'],
    ['#rec158977711', '1580118601543', '#tab4'],
    ['#rec158977733', '1580118607956', '#tab5'],
    ['#rec158977770', '1580118612468', '#tab6'],
    ['#rec158977811', '1580118629281', '#tab7'],]
    let t_array_acc = [
        ['#rec158925496', '#rec158931263:1580523222866', '#tab_acc_1'],
        ['#rec158969503', '#rec158969486:1580523260465', '#tab_acc_2'],
        ['#rec158977673', '#rec158970897:1580523272629', '#tab_acc_3'],
        ['#rec158977711', '#rec158970932:1580523283117', '#tab_acc_4'],
        ['#rec158977733', '#rec158970948:1580523291904', '#tab_acc_5'],
        ['#rec158977770', '#rec158971204:1580523300492', '#tab_acc_6'],
        ['#rec158977811', '#rec158971487:1580523310279', '#tab_acc_7'],];

// Общие функции

function checkTypeArray(array) {
    return array[0][1].length > 13 || array[0][1][1].length > 13
}


function getString(array) {
    return array.join(', ');
}



function getBlocksId(array) {
    let id_block = []
    for (let block = 0; block < array.length; block++) {
        id_block.push(array[block][0]);
   }
   return id_block;
}


function getButtonsId(array) {
    let id_but = [];

    for (let block = 0; block < array.length; block++) {
        checkTypeArray(array) ?
        id_but.push(array[block][1].split(':')[1]) : id_but.push(array[block][1]);
    }
    return id_but;
}



function getButtonsIdPath(array) {
    let path = []
    let open = ' .tn-elem[data-elem-id="'

    for (let i = 0; i < array.length; i++) {
        if (checkTypeArray(array)) {path.push(
                getIdBlockButtonsAccordion(array)[i] +open+ getButtonsId(array)[i] + '"]')
        } else {path.push(
                getBlocksId(array)[i] +open+ getButtonsId(array)[i] + '"]');
        }
    }
    return path;
}


// ACCORDION Functions ------

function getIdBlockButtonsAccordion(array) {
    let id_block_accordion = [];
    for (let block = 0; block < array.length; block++) {
        id_block_accordion.push(array[block][1].split(':')[0]);
    }
    return id_block_accordion;
}

function createAccordion(array, string) {
    //$(getAllBlockAcc(array)).hide();
    $(getString(getBlocksId(array))).hide();
    $(getAccordionButtonsPath(array)).addClass(string + '_button_accordion');
}

//-------



//CSS path

function getPathCssId(array, string) {
    let path = []
    for (let i = 0; i < array.length; i++) {
        path.push( getButtonsIdPath(array)[i] + string)
    }
    return getString(path);
}

function getPathCssType(array, string) {
    let patch = []

    for (let i = 0; i < array.length; i++) {
        if (checkTypeArray(array)) {
            patch.push(getIdBlockButtonsAccordion(array)[i] 
        + ' [data-elem-type="button"]' + string)
        } else if (checkTypeArray(array) == false){
            patch.push(getBlocksId(array)[i] + ' [data-elem-type="button"]' + string)
        }
    }
    return getString(patch);
}

function getSelectors(array, string, id_or_type) {
    let selectors = []
    for (let i = 0; i < array.length; i++) {
        selectors.push(getPathCssId(array[i], string).split(','));
    }
    return getString(selectors) ;
}


console.log(getSelectors([block_array, t_array_acc, block_array_t2], ' .tn-atom', 'id'));
//console.log(getButtonsId(t_array_acc));
//console.log(checkTypeArray(t_array_acc));

