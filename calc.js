
class PageDrawer {

    constructor() {
        this.windows = {
            0: ['Одностворчатое окно', '300'],
            1: ['Двухстворчатое окно', '350'],
            2: ['Трёхстворчатое окно', '400'],
            3: ['Мойка лоджий и балконов', '450'],
            4: ['Мойка оконного блока', '500'],
            5: ['Балконное остекление', '1200'],
        };
        this.furniture = {
            0: ['Диван 2 посадочных места', '300'],
            1: ['Диван 3 посадочных места', '350'],
            2: ['Диван 4 посадочных места', '400'],
            3: ['Диван 5 посадочных места', '450'],
            4: ['Стул', '500'],
            5: ['Кресло', '1200'],
            6: ['Пуф', '1200'],
            7: ['Диванная подушка большая', '1200'],
            8: ['Диванная подушка малая', '1200'],
            9: ['Ковер синтетический', '1200'],
            10: ['Ковер натуральный', '1200'],
            11: ['Ковролин', '1200'],
        };
        this.win_len = 6;
        this.fun_len = 12;
    };

    block(generate = 'windows') {

        // Create wrapper 
        let win_block_wrapper = document.createElement("div");
        win_block_wrapper.classList.add('block_positions');

        // Create block title
        let text = document.createElement('p');
        text.classList.add('bp_description');

        // Define
        if (generate == 'windows') {
            text.insertAdjacentText('afterbegin', 'Мытье окон');
            win_block_wrapper.appendChild(text);
            win_block_wrapper = this.create_blocks(win_block_wrapper, this.windows, this.win_len, 'windows');
        } else if (generate == 'furniture') {
            text.insertAdjacentText('afterbegin', 'Химчитска мебели');
            win_block_wrapper.appendChild(text);
            win_block_wrapper = this.create_blocks(win_block_wrapper, this.furniture, this.fun_len, 'furniture');
        }

        // Final insert to content box
        let to_insert = document.getElementById('content_wrapper');
        to_insert.append(win_block_wrapper);
    };

    create_blocks(parent_node, input_dict, dict_len, typee) {
        // Create blocks 
        for (let item = 0; item < dict_len; item++) {
            let block = document.createElement("div");
            block.classList.add('bp_element');

            block.insertAdjacentHTML(
                'afterbegin', 
                `<p class="bp_element_name">
                    ${input_dict[item][0]}
                </p>
                <p class="bp_element_price">
                    ${input_dict[item][1]}₽/окно
                </p>
                <div class="bp_element_ctrl">
                    <img src="/minus.svg" class="bp_elem_remove" onclick="update('min', '${typee}_${item}')">
                    <p class="bp_elem_amount" id="${typee}_${item}" onchange="change()">0</p>
                    <img src="/plus.svg" class="bp_elem_add" onclick="update('add', '${typee}_${item}')">
                </div>
            `);
            parent_node.appendChild(block);
        };

        return parent_node;
    }

}

class Logic {

    constructor() {
        this.space_type = document.querySelector('#space_type');
        this.clean_type = document.querySelector('#clean_type');
        this.floor_area = document.querySelector('#place_sqrs');
        this.from_moscow = document.querySelector('#mkad_distance');
    };

    calculator() {

        let drawer = new PageDrawer;
        drawer.block('windows');
        drawer.block('furniture');

    };

    updates() {
        // When user click on all elements in calc
        this.checkout();
    };

    checkout() {
        let price = 0;
    };

}

// Update values by click on plus/minus. Separeted, call from HTML
function update(action, element_id) {
    let elem_dom = document.getElementById(element_id);
    if (action == 'add') {
        if (parseInt(elem_dom.innerText) < 99) {
            elem_dom.innerText = parseInt(elem_dom.innerText) + 1;
        }
    } else if (action == 'min') {
        if (parseInt(elem_dom.innerText) > 0) {
            elem_dom.innerText = parseInt(elem_dom.innerText) - 1;
        }
    }
}

// Init work
let calc = new Logic;
calc.calculator();

// DO NOT USE THIS 
let main_block = document.querySelector('#main_container_splitter');
main_block.addEventListener('click', e => { calc.updates(); });
// USE ONCHANGE 
